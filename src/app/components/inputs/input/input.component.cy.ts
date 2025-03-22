import { InputComponent } from './input.component';

describe('InputComponent', () => {
  const label = 'Label';
  const placeholder = 'text';

  it('should mount', () => {
    cy.mount(InputComponent);
  });

  it('should display input', () => {
    cy.mount(InputComponent);
    cy.get('input').should('exist');
  });

  it('should display label', () => {
    cy.mount(InputComponent, {
      componentProperties: {
        value: label,
      },
    });
    cy.get('label').should('have.text', label);
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
});
