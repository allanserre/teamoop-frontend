import { signal } from '@angular/core';
import { User } from '../../models/user.model';
import { UserProfilComponent } from './user-profil.component'

describe('UserProfilComponent', () => {
  it('should mount', () => {
    cy.mount(UserProfilComponent)
  })

  it('should display user name and email', () => {
    const mail = "johndoe@gmail.com"
    const name = "john"
    const user: User = {
      name: name,
      mail: mail
    }

    cy.mount(UserProfilComponent,
      {
        componentProperties: {
          // Voir comment typer pour le test des signaux
          user: signal(user) as any
        },
      });

    cy.get('[data-cy="test-component-username-display"]')
      .should('have.text', name);


    cy.get('[data-cy="test-component-usermail-display"]')
      .should('have.text', mail);
  });
})
