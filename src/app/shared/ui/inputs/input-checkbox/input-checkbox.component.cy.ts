import { InputCheckboxComponent } from './input-checkbox.component';
import { signal } from '@angular/core';

describe('InputCheckboxComponent', () => {
  it('should mount', () => {
    cy.mount(InputCheckboxComponent);
  });

  it('can mount using template syntax', () => {
    cy.mount('<app-input-checkbox></app-input-checkbox>', {
      imports: [InputCheckboxComponent],
    });
    cy.get('input[type="checkbox"]').should('exist');
  });

  it('should be checked when model value is true', () => {
    cy.mount(InputCheckboxComponent, {
      componentProperties: {
        checked: true,
      },
    });
    cy.get('input[type="checkbox"]').should('be.checked');
  });

  it('should be unchecked when model value is false', () => {
    cy.mount(InputCheckboxComponent, {
      componentProperties: {
        checked: false,
      },
    });
    cy.get('input[type="checkbox"]').should('not.be.checked');
  });

  it('should toggle checked state on click on svg visible', () => {
    cy.mount(InputCheckboxComponent, {
      componentProperties: {
        checked: false,
      },
    });

    cy.get('[data-cy="checkbox"]').click();
    cy.get('[data-cy="checkbox-input"]').should('be.checked');
    cy.get('[data-cy="svg-icon"]').should('be.visible');

    cy.get('[data-cy="checkbox"]').click();
    cy.get('[data-cy="checkbox-input"]').should('not.be.checked');
    cy.get('[data-cy="svg-icon"]').should('not.exist');
  });

  it('should be disabled and not clickable', () => {
    const disabledInput = signal<boolean>(true);

    cy.mount(InputCheckboxComponent, {
      componentProperties: {
        disabled: disabledInput,
        checked: false,
      },
    });

    cy.get('[data-cy="checkbox-input"]').should('be.disabled');
    cy.get('[data-cy="checkbox"]').click();
    cy.get('[data-cy="checkbox-input"]').should('not.be.checked');

    cy.then(() => {
      disabledInput.set(false);
    });

    cy.get('[data-cy="checkbox-input"]').should('not.be.disabled');
    cy.get('[data-cy="checkbox"]').click();
    cy.get('[data-cy="checkbox-input"]').should('be.checked');
  });
});
