import { ClassicButtonComponent } from './classic-button.component';
import { EventEmitter } from '@angular/core';

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
        style: 'outlined',
      },
    });

    cy.get('button')
      .should('have.class', 'success')
      .and('have.class', 'outlined');
  });

  it('should disable the button when disabled is true', () => {
    cy.mount(ClassicButtonComponent, {
      componentProperties: {
        disabled: true,
      },
    });

    cy.get('button')
      .should('be.disabled')
      .and('have.class', 'disabled');
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
    const clickEvent = new EventEmitter<void>();
    const spy = cy.spy();
    clickEvent.subscribe(spy);

    cy.mount(ClassicButtonComponent, {
      componentProperties: {
        clickEvent: clickEvent,
      },
    });

    cy.get('button').click();
    cy.wrap(spy).should('have.been.called');
  });

  it('should not emit an event when disabled', () => {
    const clickEvent = new EventEmitter<void>();
    const spy = cy.spy();
    clickEvent.subscribe(spy);

    cy.mount(ClassicButtonComponent, {
      componentProperties: {
        disabled: true,
        clickEvent: clickEvent,
      },
    });

    cy.get('button').click();
    cy.wrap(spy).should('not.have.been.called');
  });
});
