import { ClassicButtonComponent } from './classic-button.component';
import { createOutputSpy } from 'cypress/angular';

describe('ClassicButtonComponent', () => {
  it('should render the button with default properties', () => {
    cy.mount(ClassicButtonComponent);

    cy.get('button')
      .should('exist')
      .and('have.class', 'primary')
      .and('have.class', 'filled')
      .and('not.be.disabled');
  });

  it('should apply the correct classes based on inputs', () => {
    cy.mount(ClassicButtonComponent, {
      componentProperties: {
        color: 'success',
        filled: false,
      },
    });

    cy.get('button')
      .should('have.class', 'success')
      .and('have.class', 'outlined')
      .and('not.have.class', 'filled');
  });

  it('should disable the button when disabled is true', () => {
    cy.mount(ClassicButtonComponent, {
      componentProperties: {
        disabled: true,
      },
    });

    cy.get('button')
      .should('be.disabled')
      .and('have.attr', 'aria-disabled', 'true');
  });

  it('should not disable the button when disabled is false', () => {
    cy.mount(ClassicButtonComponent, {
      componentProperties: {
        disabled: false,
      },
    });

    cy.get('button')
      .should('not.be.disabled')
      .and('have.attr', 'aria-disabled', 'false');
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

  it('should keep only one icon when multiple icons are projected', () => {
    cy.mount(
      `<app-classic-button>
        <i class="fa fa-check"></i>
        <i class="fa fa-trash"></i>
      </app-classic-button>`,
      {
        declarations: [ClassicButtonComponent],
      }
    );

    cy.get('button .icon')
      .find('i')
      .should('have.length', 1)
      .and('have.class', 'fa-check');

    cy.get('button .text').should('exist');
  });
});
