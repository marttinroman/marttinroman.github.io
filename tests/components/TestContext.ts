export interface TestConfig {
  baseUrl: string
  expectedEmail: string
  expectedRepositories: string[]
}

export class TestContext {
  protected config: TestConfig;

  constructor() {
    this.config = {
      baseUrl: process.env.BASE_URL || 'http://127.0.0.1:8080',
      expectedEmail: 'marttinroman@gmail.com',
      expectedRepositories: [
        'https://github.com/marttinroman/autonomous-qa-engine',
        'https://github.com/marttinroman/e2e-framework-boilerplate',
        'https://github.com/marttinroman/ai-vector-validation-suite',
        'https://github.com/marttinroman/api-performance-harness',
        'https://github.com/marttinroman/visual-regression-engine',
      ],
    };
  }
}
