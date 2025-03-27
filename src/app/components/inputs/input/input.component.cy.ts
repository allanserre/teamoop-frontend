import { InputComponent } from './input.component';
import { createOutputSpy } from 'cypress/angular';

describe('InputComponent', () => {
  const label = 'Label';
  const placeholder = 'text';

  it('should mount', () => {
    cy.mount(InputComponent);
  });

  it('can mount using template syntax', () => {
    cy.mount('<app-input></app-input>', {
      imports: [InputComponent],
    });
    cy.get('input').should('exist');
  });

  it('should display placeholder', () => {
    cy.mount(InputComponent, {
      componentProperties: {
        value: label,
        placeholder: placeholder,
      },
    });
    cy.get('input').should('have.attr', 'placeholder', placeholder);
  });

  it('should focus input if focus is true', () => {
    cy.mount(InputComponent, {
      componentProperties: {
        focus: true,
      },
    });
    cy.get('input').should('be.focused');
  });

  it('should trigger validate event on Enter key press', () => {
    cy.mount(InputComponent, {
      componentProperties: {
        validate: createOutputSpy('validateSpy'),
      },
    });
    cy.get('input').type('{enter}');
    cy.get('@validateSpy').should('have.been.calledOnce');
  });

  it('should trigger unfocused event on blur', () => {
    cy.mount(InputComponent, {
      componentProperties: {
        unfocused: createOutputSpy('unfocusedSpy'),
      },
    });
    cy.get('input').focus().blur();
    cy.get('@unfocusedSpy').should('have.been.calledOnce');
  });

  it('should focus input when calling triggerFocus()', () => {
    cy.mount(InputComponent).then(({ component }) => {
      component.triggerFocus();
    });
    cy.get('input').should('be.focused');
  });
});
