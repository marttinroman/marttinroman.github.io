import type { Page } from '@playwright/test';
import { TestContext } from '@components/TestContext';

export class UiBase extends TestContext {
  protected page: Page;

  constructor(page: Page) {
    super();
    this.page = page;
  }

  async goto(path = '/') {
    await this.page.goto(path);
  }

  async getHtmlAttribute(name: string): Promise<string | null> {
    return this.page.locator('html').getAttribute(name);
  }

  async isElementDark(): Promise<boolean> {
    return this.page.locator('html').evaluate(el => el.classList.contains('dark'));
  }
}
