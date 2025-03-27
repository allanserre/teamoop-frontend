import { InputDescriptionComponent } from './input-description.component';
import { signal } from '@angular/core';
import { provideMarkdown } from 'ngx-markdown';
import { cypressDrag } from '../../../helpers/CypressHelper';

describe('InputDescriptionComponent', () => {
  it('should mount', () => {
    cy.mount(InputDescriptionComponent);
  });

  it('should display the placeholder in the textarea', () => {
    const placeholderText = 'Enter description';
    cy.mount(InputDescriptionComponent, {
      componentProperties: {
        placeholder: placeholderText,
      },
    });
    cy.get('textarea').should('have.attr', 'placeholder', placeholderText);
  });

  it('should display initial markdown preview when value changes and markdown component formatting', () => {
    const markdownValue = signal('### Markdown preview');
    cy.mount(InputDescriptionComponent, {
      componentProperties: {
        value: markdownValue,
      },
      providers: [provideMarkdown()],
    });
    cy.get('markdown').should('contain.text', 'Markdown preview');
  });

  it('should update markdown preview when value changes', () => {
    cy.mount(InputDescriptionComponent, {
      componentProperties: {
        value: 'Initial value',
      },
    });
    cy.get('textarea').clear().type('Updated Markdown content');
    cy.get('markdown').should('contain.text', 'Updated Markdown content');
  });

  it('should be resized and keep same height when resized', () => {
    cy.mount(InputDescriptionComponent, {
      componentProperties: {
        value: 'Initial value',
      },
    });

    // La hauteur des bords cause un léger décalage dans le calcul de la hauteur
    const borderRadiusHeight = 2;

    cypressDrag('drag-handle', 350, 350);
    cy.get('[data-cy="input"]')
      .invoke('height')
      .then(height => {
        cy.get('[data-cy="markdown-container"]')
          .invoke('height')
          .should('equal', height! - borderRadiusHeight);
      });

    cypressDrag('drag-handle', 188, 188);
    cy.get('[data-cy="input"]')
      .invoke('height')
      .then(height => {
        cy.get('[data-cy="markdown-container"]')
          .invoke('height')
          .should('equal', height! - borderRadiusHeight);
      });
  });
});
