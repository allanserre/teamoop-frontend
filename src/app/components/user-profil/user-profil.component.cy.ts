import { User } from '@models/user.model';
import { UserProfilComponent } from './user-profil.component';

describe('UserProfilComponent', () => {
  it('should mount', () => {
    cy.mount(UserProfilComponent);
  });

  it('should display user name and email', () => {
    const mail = 'johndoe@gmail.com';
    const name = 'john';
    const user: User = {
      name: name,
      mail: mail,
    };

    cy.mount(UserProfilComponent, {
      componentProperties: {
        user: user,
      },
    });

    cy.get('[data-cy="username-text"]').should('have.text', name);

    cy.get('[data-cy="usermail-text"]').should('have.text', mail);
  });
});
