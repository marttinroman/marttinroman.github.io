import { expect, test } from '@components/TestFixture';

test.describe('Marttin Roman Portfolio - E2E Verification Suite', () => {
  test.beforeEach(async ({ ui }) => {
    await ui.loadPortfolio();
  });

  test('should load in English by default and switch seamlessly to Spanish', async ({ ui }) => {
    await ui.verifyInitialEnglishLocale();
    await ui.toggleLanguageToSpanish();
  });

  test('should toggle dark and light mode correctly', async ({ ui }) => {
    await ui.toggleTheme();
    await ui.toggleTheme();
  });

  test('should feature verified and secured links to all 5 GitHub repositories', async ({ ui }) => {
    await ui.verifyOutboundRepositories();
  });

  test('should display the professional avatar image', async ({ ui }) => {
    await expect(ui.avatarImg).toBeVisible();
    const src = await ui.avatarImg.getAttribute('src');
    expect(src).toContain('LinkedIn.jpeg');
  });

  test('should display and configure executive presentation video', async ({ ui }) => {
    await ui.verifyPresentationVideo();
    await ui.verifyVideoSoundActivation();
  });

  test('should trigger copy email feedback toast', async ({ ui }) => {
    await ui.triggerEmailCopy();
  });
});
