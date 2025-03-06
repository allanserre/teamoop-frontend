import { ChipTagColor, ChipTagComponent } from './chip-tag.component';
import { signal } from '@angular/core';
import variables from 'cypress/variables.json';

describe('ChipTagComponent', () => {
  it('should mount', () => {
    cy.mount(ChipTagComponent);
  });

  it('can mount using template syntax without content projection', () => {
    cy.mount('<app-chip-tag></app-chip-tag>', {
      imports: [ChipTagComponent],
    });

    cy.get('.chip-tag').should('have.text', '#chips');
  });

  it('can mount using template syntax with content projection', () => {
    const chipText = 'projected';
    cy.mount('<app-chip-tag>' + chipText + '</app-chip-tag>', {
      imports: [ChipTagComponent],
    });

    cy.get('.chip-tag').should('have.text', chipText);
  });

  // Styles Test

  it('test all chip colors can render', () => {
    const chipColor = signal<ChipTagColor>('green');

    cy.mount(ChipTagComponent, {
      componentProperties: {
        color: chipColor,
      },
    });

    cy.get('[data-cy="chip-container"]').should('have.css', 'background-color', variables['chip-tag-green-background']);
    cy.get('[data-cy="chip-container"]').should('have.css', 'color', variables['chip-tag-green-color']);

    cy.then(() => {
      chipColor.set('red');
    });
    cy.get('[data-cy="chip-container"]').should('have.css', 'background-color', variables['chip-tag-red-background']);
    cy.get('[data-cy="chip-container"]').should('have.css', 'color', variables['chip-tag-red-color']);

    cy.then(() => {
      chipColor.set('blue');
    });
    cy.get('[data-cy="chip-container"]').should('have.css', 'background-color', variables['chip-tag-blue-background']);
    cy.get('[data-cy="chip-container"]').should('have.css', 'color', variables['chip-tag-blue-color']);

    cy.then(() => {
      chipColor.set('light-blue');
    });
    cy.get('[data-cy="chip-container"]').should('have.css', 'background-color', variables['chip-tag-light-blue-background']);
    cy.get('[data-cy="chip-container"]').should('have.css', 'color', variables['chip-tag-light-blue-color']);

    cy.then(() => {
      chipColor.set('orange');
    });
    cy.get('[data-cy="chip-container"]').should('have.css', 'background-color', variables['chip-tag-orange-background']);
    cy.get('[data-cy="chip-container"]').should('have.css', 'color', variables['chip-tag-orange-color']);
  });
});
