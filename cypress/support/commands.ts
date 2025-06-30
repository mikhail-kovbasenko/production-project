import { login as logIn } from './commands/login';

Cypress.Commands.add('login', logIn);

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>
    }
  }
}

export {};
