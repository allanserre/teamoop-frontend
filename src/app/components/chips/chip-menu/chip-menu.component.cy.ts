import { ChipMenuComponent } from './chip-menu.component';
import variables from 'cypress/variables.json';
import 'cypress-real-events';

describe('ChipMenuComponent', () => {
  it('should mount', () => {
    cy.mount(ChipMenuComponent);
  });

  it('can mount using template syntax without content projection', () => {
    cy.mount('<app-chip-menu></app-chip-menu>', {
      imports: [ChipMenuComponent],
    });

    cy.get('[data-cy="chip-menu"]').should('contains.text', '#Chips');
  });

  it('can mount using template syntax with content projection', () => {
    const chipText = 'projected';
    cy.mount('<app-chip-menu>' + chipText + '</app-chip-menu>', {
      imports: [ChipMenuComponent],
    });

    cy.get('[data-cy="chip-menu"]').should('contains.text', chipText);
  });

  it('should have the correct default css class', () => {
    cy.mount(ChipMenuComponent);
    cy.get('[data-cy="chip-menu"]').should('not.have.class', 'active');
  });

  it('should apply active class when active() is true', () => {
    cy.mount(ChipMenuComponent, {
      componentProperties: {
        active: true,
      },
    });
    cy.get('[data-cy="chip-menu"]').should('have.class', 'active');
  });

  it('should not apply active class when active() is false', () => {
    cy.mount(ChipMenuComponent, {
      componentProperties: {
        active: false,
      },
    });
    cy.get('[data-cy="chip-menu"]').should('not.have.class', 'active');
  });

  // Styles Test

  it('should apply hover styles when hovering and not active', () => {
    cy.mount(ChipMenuComponent, {
      componentProperties: {
        active: false,
      },
    });

    cy.get('[data-cy="chip-menu"]').realHover().should('have.css', 'background-color', variables['chip-menu-hover-color']);
  });

  it('should not apply hover styles when hovering and active', () => {
    cy.mount(ChipMenuComponent, {
      componentProperties: {
        active: true,
      },
    });

    cy.get('[data-cy="chip-menu"]').realHover().should('have.css', 'background-color', variables['chip-menu-active-color']);
  });
});
