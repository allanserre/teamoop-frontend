import { ChipInputComponent } from './chip-input.component';
import { createOutputSpy } from 'cypress/angular';
import variables from 'cypress/variables.json';
import 'cypress-real-events';

describe('ChipInputComponent', () => {
  // Test du comportement

  it('should mount', () => {
    cy.mount(ChipInputComponent);
  });

  it('can mount using template syntax without content projection', () => {
    cy.mount('<app-chip-input></app-chip-input>', {
      imports: [ChipInputComponent],
    });

    cy.get('[data-cy="chip-text"]').should('have.text', '#filter');
  });

  it('can mount using template syntax with content projection', () => {
    const chipText = 'projected';
    cy.mount('<app-chip-input>' + chipText + '</app-chip-input>', {
      imports: [ChipInputComponent],
    });

    cy.get('[data-cy="chip-text"]').should('have.text', chipText);
  });

  it('should trigger a chipClosed event when clicking on the right icon', () => {
    cy.mount(ChipInputComponent, {
      componentProperties: {
        chipClosed: createOutputSpy('chipClosedSpy'),
      },
    });

    cy.get('[data-cy="close"]').click();
    cy.get('@chipClosedSpy').should('have.been.calledOnce');
  });

  // Styles Test

  it('should apply hover styles to the close button', () => {
    cy.mount(ChipInputComponent);

    cy.get('.icon-backdrop').realHover().should('have.css', 'background-color', variables['hover-color']);
  });
});
