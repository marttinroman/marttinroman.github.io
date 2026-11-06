export interface TestConfig {
  baseUrl: string
  expectedEmail: string
  expectedRepositories: string[]
  expectedCredentials: string[]
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
      expectedCredentials: [
        'https://www.skills.google/public_profiles/1baf72bb-ccba-42b3-aa78-cc665f773841',
        'https://www.credly.com/badges/6707abbc-0e2a-4426-bba5-47c54838c895',
        'https://www.credly.com/users/marttin-roman/badges/credly',
      ],
    };
  }
}
