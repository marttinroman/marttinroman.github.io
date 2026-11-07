# Video Asset Pipeline & Standard Operating Procedure (SOP)

This document establishes the official project standard and operational procedure for ingesting, optimizing, and deploying video assets in the Marttin Roman Portfolio and AI-TestOps showcases.

---

## 1. Architectural Principles

When publishing executive presentation videos on GitHub Pages (static Edge CDN / Fastly), video assets must adhere to four strict principles:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        VIDEO ASSET PIPELINE                            │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  [1] Web-Safe Slug     → kebab-case naming (no spaces or colons)       │
│  [2] FastStart Moov    → Metadata index at file start (+faststart)     │
│  [3] Web Compression   → High-efficiency H.264 (< 50 MB GitHub limit)   │
│  [4] Poster Frame      → Extracted 1st-second JPEG for zero-FOUC paint │
│  [5] Autoplay & Audio  → Muted inline autoplay + user unmute overlay   │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Why Each Transformation Is Required

### 2.1 Web-Safe Slug Naming (Kebab-Case vs. Spaces)
* **Problem:** Screen recording software (e.g., QuickTime, OBS) default to filenames like `2026-11-07 12-32-14_Marttin_Roman_AI_Fit_English_1_min_21_sec_Full_HD.mp4`. In HTTP URLs, whitespace characters require percent-encoding (`%20`).
* **Consequences:** Percent-encoded URLs break web crawlers, introduce 404 hazards across CDNs, look unpolished in network tabs, and trigger selector escaping issues in test automation frameworks like Playwright.
* **Standard:** Canonical files must always use clean kebab-case slugs (e.g., `marttin-roman-ai-fit-presentation.mp4`).
* **Symlink & Tar Dereferencing Constraint:** Never commit symlinks pointing to large video files in the repository. The GitHub Pages deployment action (`actions/upload-pages-artifact`) invokes `tar --dereference`, which resolves symlinks by duplicating the entire binary file. This doubles deployment archive sizes and causes GitHub Pages `syncing_files` backend timeouts.
* **`.nojekyll` Requirement:** A root `.nojekyll` file must always be maintained so GitHub Pages bypasses the Jekyll markdown build container and deploys static assets directly.

### 2.2 FastStart Optimization (`moov` Atom Placement)
* **Problem:** Standard MP4 encoders write the `moov` (movie metadata index) atom at the **end** of the file after all audio and video packets are rendered.
* **Consequences:** Without the `moov` atom, a browser cannot determine video dimensions, codecs, or keyframe offsets. The browser is forced to download the entire video before playback begins.
* **Standard:** All MP4 assets must be processed with `-movflags +faststart`. This rearranges the file so the `moov` atom precedes the `mdat` (media data) atom, enabling instant progressive streaming and buffering.

### 2.3 GitHub File Size Boundaries (< 50 MB)
* **Problem:** GitHub issues a formal warning on files larger than 50 MB (`remote: warning: File ... is larger than GitHub's recommended maximum of 50.00 MB`) and outright rejects files exceeding 100 MB.
* **Standard:** Video bitrates must be budgeted to stay comfortably under 40 MB for 1-2 minute presentations, ensuring rapid edge-caching on Fastly and instant loading on mobile cellular connections.

### 2.4 Poster Thumbnail Extraction
* **Problem:** Without a designated `poster` attribute on `<video>`, the browser paints a black rectangle until the first video keyframe is decoded, creating an unstyled content flash.
* **Standard:** A high-resolution JPEG poster (`docs/img/video-poster.jpg`) is extracted from the 1-second mark of the video, matching the exact aspect ratio of the recording.

### 2.5 Modern Browser Autoplay & Audio Policies
* **Problem:** Browsers (Chrome, Safari, Firefox) strictly forbid unmuted video playback without prior user gestures (clicking or tapping).
* **Standard:**
  1. The `<video>` element starts with `muted`, `autoplay`, `playsinline`, and `loop`.
  2. The page attempts unmuted playback via `video.play()`.
  3. If rejected by browser autoplay policy, it falls back to muted playback and displays an elevated floating **"Enable Sound"** button (`#video-unmute-overlay`).
  4. The first user interaction on the page immediately restores volume and hides the overlay button.

---

## 3. Automated CLI Pipeline: `scripts/process-video.sh`

A dedicated bash script automates this entire pipeline in a single command.

### Usage
```bash
# Process a new video from your system:
bash scripts/process-video.sh "/path/to/Raw_Video_Export.mp4" [slug-name]

# Example:
bash scripts/process-video.sh "/Users/marttinroman/Movies/2026-11-07 12-32-14_Marttin_Roman_AI_Fit_English_1_min_21_sec_Full_HD.mp4" "marttin-roman-ai-fit-presentation"
```

---

## 4. Manual FFmpeg Reference Commands

If running FFmpeg manually, execute the following verified commands:

### Step 1: Optimize Video for Web Streaming (< 40 MB with FastStart)
```bash
ffmpeg -y -i "raw-input-file.mp4" \
  -vf "scale=-2:1080" \
  -c:v libx264 -crf 22 -preset slow \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  "docs/videos/clean-slug-name.mp4"
```

### Step 2: Extract High-Resolution Poster Frame
```bash
ffmpeg -y -ss 00:00:01 -i "docs/videos/clean-slug-name.mp4" \
  -vframes 1 -q:v 2 \
  "docs/img/video-poster.jpg"
```

### Step 3: Create Compatibility Symlink
```bash
cd docs/videos
ln -sf "clean-slug-name.mp4" "raw-input-file.mp4"
cd ../..
```

---

## 5. Automated Verification Checklist

Before publishing, verify the following:
* [ ] `ffprobe docs/videos/clean-slug-name.mp4 2>&1 | grep "Duration"` verifies correct duration and 60fps.
* [ ] File size is < 50 MB (`ls -lh docs/videos/clean-slug-name.mp4`).
* [ ] `docs/img/video-poster.jpg` exists and is non-empty.
* [ ] `index.html` references the new slug in both `<source>` tags and i18n copy.
* [ ] `npx playwright test` passes 100% locally.
* [ ] GitHub Actions CI workflow triggers and passes on push.
