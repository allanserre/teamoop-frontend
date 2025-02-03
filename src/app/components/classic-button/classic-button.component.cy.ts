import { ClassicButtonComponent } from './classic-button.component';
import { createOutputSpy } from 'cypress/angular';

describe('ClassicButtonComponent', () => {
  it('should render the button with default properties', () => {
    cy.mount(ClassicButtonComponent);

    cy.get('button').should('exist').and('have.class', 'primary').and('have.class', 'filled').and('not.be.disabled');
  });

  it('should apply the correct classes based on inputs', () => {
    cy.mount(ClassicButtonComponent, {
      componentProperties: {
        color: 'success',
        filled: false,
      },
    });

    cy.get('button').should('have.class', 'success').and('have.class', 'outlined');
  });

  it('should disable the button when disabled is true', () => {
    cy.mount(ClassicButtonComponent, {
      componentProperties: {
        disabled: true,
      },
    });

    cy.get('button').should('be.disabled');
  });

  it('should not disable the button when disabled is false', () => {
    cy.mount(ClassicButtonComponent, {
      componentProperties: {
        disabled: false,
      },
    });

    cy.get('button').should('not.be.disabled');
  });

  it('should emit an event when clicked', () => {
    cy.mount(ClassicButtonComponent, {
      componentProperties: {
        clicked: createOutputSpy('clickedSpy'),
      },
    });

    cy.get('button').click();
    cy.get('@clickedSpy').should('have.been.calledOnce');
  });

  it('should not emit an event when disabled', () => {
    cy.mount(ClassicButtonComponent, {
      componentProperties: {
        disabled: true,
        clicked: createOutputSpy('clickedSpy'),
      },
    });

    cy.get('button').click();
    cy.get('@clickedSpy').should('not.have.been.called');
  });
});
