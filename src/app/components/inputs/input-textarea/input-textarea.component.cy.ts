import { InputTextareaComponent } from './input-textarea.component';

describe('InputDescriptionComponent', () => {
  it('should mount', () => {
    cy.mount(InputTextareaComponent);
  });

  it('should display input', () => {
    cy.mount(InputTextareaComponent);
    cy.get('textarea').should('exist');
  });

  it('should display the placeholder text', () => {
    const placeholderText = 'Enter text here...';
    cy.mount(InputTextareaComponent, {
      componentProperties: { placeholder: placeholderText },
    });

    cy.get('[data-cy="input"]').should('have.attr', 'placeholder', placeholderText);
  });

  it('should bind the value correctly', () => {
    const initialValue = 'Initial value';
    cy.mount(InputTextareaComponent, {
      componentProperties: { value: initialValue },
    });

    cy.get('[data-cy="input"]').should('have.value', initialValue);
  });

  it('should update the value when typed', () => {
    const typedText = 'New input';
    cy.mount(InputTextareaComponent, {
      componentProperties: { value: '' },
    });

    cy.get('[data-cy="input"]').type(typedText);
    cy.get('[data-cy="input"]').should('have.value', typedText);
  });

  it('should set the correct height', () => {
    const height = '200px';
    cy.mount(InputTextareaComponent, {
      componentProperties: { height: height },
    });

    cy.get('[data-cy="input"]').should('have.css', 'height', height);
  });

  it('should be resizable when resizable is true', () => {
    cy.mount(InputTextareaComponent, {
      componentProperties: { resizable: true },
    });

    cy.get('[data-cy="input"]').should('have.css', 'resize', 'both');
  });

  it('should not be resizable when resizable is false', () => {
    cy.mount(InputTextareaComponent, {
      componentProperties: { resizable: false },
    });

    cy.get('[data-cy="input"]').should('have.css', 'resize', 'none');
  });
});
