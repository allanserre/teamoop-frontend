import { OutputEmitterRef } from '@angular/core';
import { ClassicButtonComponent } from './classic-button.component';
import { TestBed } from '@angular/core/testing';

describe('ClassicButtonComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClassicButtonComponent],
    }).compileComponents();
  });

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

  it('should not emit an event when disabled', () => {
    const clickedSpy = cy.spy().as('clickedSpy');

    const clickedEmitter: OutputEmitterRef<void> = {
      emit: clickedSpy,
      subscribe: clickedSpy,
      destroyed: false,
      listeners: [],
      errorHandler: undefined,
    } as unknown as OutputEmitterRef<void>;

    const fixture = TestBed.createComponent(ClassicButtonComponent);
    fixture.componentInstance.clicked = clickedEmitter;
    fixture.detectChanges();

    cy.wrap(fixture.nativeElement).find('button').click({ force: true });
    cy.get('@clickedSpy').should('not.have.been.called');
  });

});
