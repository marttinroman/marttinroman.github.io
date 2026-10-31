import { test as baseTest } from '@playwright/test';
import { PortfolioPage } from '@ui/PortfolioPage';

export interface FixtureOptions {
  ui: PortfolioPage
}

export const test = baseTest.extend<FixtureOptions>({
  ui: async ({ page }, use) => {
    const portfolioPage = new PortfolioPage(page);
    await use(portfolioPage);
  },
});

export { expect } from '@playwright/test';
