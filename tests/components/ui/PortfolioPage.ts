import { expect } from '@playwright/test';
import { UiBase } from '@ui/UiBase';

export class PortfolioPage extends UiBase {
  // Locators
  readonly langToggle = this.page.locator('#lang-toggle');
  readonly themeToggle = this.page.locator('#theme-toggle');
  readonly heroTitle = this.page.locator('[data-i18n="hero_title"]');
  readonly heroBio = this.page.locator('[data-i18n="hero_bio"]');
  readonly availabilityBadge = this.page.locator('[data-i18n="hero_availability"]');
  readonly contactBtn = this.page.locator('a[href^="mailto:"]');
  readonly copyEmailBtn = this.page.locator('#copy-email-btn');
  readonly toast = this.page.locator('#toast');
  readonly avatarImg = this.page.locator('img[alt*="Marttin Roman"]');
  readonly presentationVideo = this.page.locator('#presentation-video');
  readonly videoUnmuteOverlay = this.page.locator('#video-unmute-overlay');
  readonly flagshipRepoLink = this.page.locator('a[href*="autonomous-qa-engine"]');

  // Atomic Test Components (ATCs)
  async loadPortfolio() {
    await this.goto('/');
    await expect(this.heroTitle).toBeVisible();
  }

  async verifyInitialEnglishLocale() {
    const lang = await this.getHtmlAttribute('lang');
    expect(lang).toBe('en');
    await expect(this.availabilityBadge).toHaveText('Available for remote & international roles');
  }

  async toggleLanguageToSpanish() {
    await this.langToggle.click();
    const lang = await this.getHtmlAttribute('lang');
    expect(lang).toBe('es');
    await expect(this.availabilityBadge).toHaveText('Disponible para roles remotos e internacionales');
  }

  async toggleTheme() {
    const wasDark = await this.isElementDark();
    await this.themeToggle.click();
    const isDarkNow = await this.isElementDark();
    expect(isDarkNow).toBe(!wasDark);
  }

  async verifyOutboundRepositories() {
    for (const repoUrl of this.config.expectedRepositories) {
      const link = this.page.locator(`a[href="${repoUrl}"]`);
      await expect(link).toBeAttached();
      const target = await link.getAttribute('target');
      const rel = await link.getAttribute('rel');
      expect(target).toBe('_blank');
      expect(rel).toContain('noopener');
      expect(rel).toContain('noreferrer');
    }
  }

  async triggerEmailCopy() {
    await this.copyEmailBtn.click();
    await expect(this.toast).toBeVisible();
    await expect(this.toast).toHaveClass(/opacity-100/);
  }

  async verifyPresentationVideo() {
    await expect(this.presentationVideo).toBeVisible();
    await expect(this.presentationVideo).toHaveAttribute('autoplay', '');
    await expect(this.presentationVideo).toHaveAttribute('loop', '');
    const poster = await this.presentationVideo.getAttribute('poster');
    expect(poster).toContain('video-poster.jpg');
    const source = this.presentationVideo.locator('source').first();
    const src = await source.getAttribute('src');
    expect(src).toContain('marttin-roman-short-presentation.mp4');
  }

  async verifyVideoSoundActivation() {
    // Si el overlay está visible por política de autoplay del navegador, hacer click para activar sonido
    if (await this.videoUnmuteOverlay.isVisible()) {
      await this.videoUnmuteOverlay.click();
      await expect(this.videoUnmuteOverlay).toBeHidden();
    }
    const isMuted = await this.presentationVideo.evaluate((v: HTMLVideoElement) => v.muted);
    expect(isMuted).toBe(false);
  }
}
