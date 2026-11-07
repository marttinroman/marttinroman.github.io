#!/usr/bin/env bash
# ==============================================================================
# Video Asset Processing Script for Marttin Roman Portfolio
# Automatically optimizes raw video for web streaming, faststart, and poster extraction
# ==============================================================================

set -euo pipefail

INPUT_FILE="${1:-}"
SLUG_NAME="${2:-marttin-roman-ai-fit-presentation}"

if [ -z "$INPUT_FILE" ] || [ ! -f "$INPUT_FILE" ]; then
  echo "❌ Error: Please provide a valid input video file path."
  echo "Usage: $0 /path/to/video.mp4 [slug-name]"
  exit 1
fi

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DOCS_VIDEOS="$PROJECT_ROOT/docs/videos"
DOCS_IMG="$PROJECT_ROOT/docs/img"
OUTPUT_VIDEO="$DOCS_VIDEOS/${SLUG_NAME}.mp4"
POSTER_IMAGE="$DOCS_IMG/video-poster.jpg"
RAW_FILENAME="$(basename "$INPUT_FILE")"

mkdir -p "$DOCS_VIDEOS" "$DOCS_IMG"

echo "🎬 Starting video processing pipeline for: $RAW_FILENAME"
echo "   Output target: $OUTPUT_VIDEO"

# Step 1: Optimize video with FFmpeg for progressive web streaming (< 40MB, +faststart)
echo "⚡ Step 1: Encoding with -movflags +faststart and H.264 web optimization..."
ffmpeg -y -i "$INPUT_FILE" \
  -vf "scale=-2:1080" \
  -c:v libx264 -crf 22 -preset medium \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  "$OUTPUT_VIDEO"

# Step 2: Extract high-resolution poster frame at 00:00:01
echo "🖼️  Step 2: Extracting poster thumbnail at 1s mark..."
ffmpeg -y -ss 00:00:01 -i "$OUTPUT_VIDEO" \
  -vframes 1 -q:v 2 \
  "$POSTER_IMAGE"

# Step 3: Verification telemetry
echo "✅ Step 3: Verification Telemetry:"
FILE_SIZE_MB=$(du -m "$OUTPUT_VIDEO" | cut -f1)
echo "   • Processed Video Size: ${FILE_SIZE_MB} MB"
echo "   • Video Path: $OUTPUT_VIDEO"
echo "   • Poster Image Path: $POSTER_IMAGE"

if [ "$FILE_SIZE_MB" -gt 50 ]; then
  echo "⚠️ Warning: Video is over 50MB. GitHub may warn during push."
else
  echo "🎉 Video size is optimal (< 50MB) for GitHub and Fastly CDN delivery!"
fi
