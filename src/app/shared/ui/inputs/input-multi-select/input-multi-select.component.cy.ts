import { InputMultiSelectComponent } from './input-multi-select.component';
import { createOutputSpy } from 'cypress/angular';

describe('InputMultiSelectComponent', () => {
  const chips = [{ label: 'Chip 1' }, { label: 'Chip 2' }];

  it('should mount', () => {
    cy.mount(InputMultiSelectComponent);
  });

  it('should display initial chips', () => {
    cy.mount(InputMultiSelectComponent, {
      componentProperties: {
        chips,
      },
    });

    cy.get('app-chip-input').should('have.length', 2);
    cy.get('app-chip-input').first().should('contain.text', 'Chip 1');
    cy.get('app-chip-input').last().should('contain.text', 'Chip 2');
  });

  it('should show input field when clicked', () => {
    cy.mount(InputMultiSelectComponent, {
      componentProperties: { chips },
    });
    cy.get('.input-multi-select-container').click();
    cy.get('app-input').should('exist');
  });

  it('should hide input field when clicking outside', () => {
    cy.mount(InputMultiSelectComponent, {
      componentProperties: { chips, showInput: true },
    });

    cy.get('body').click(400, 400);
    cy.get('app-input').should('not.exist');
  });

  it('should emit chipDeleted when a chip is removed', () => {
    const chips = [{ label: 'Chip 1' }, { label: 'Chip 2' }];
    cy.mount(InputMultiSelectComponent, {
      componentProperties: {
        chips,
        chipDeleted: createOutputSpy('chipDeletedSpy'),
      },
    });

    cy.get('app-chip-input').first().find('[data-cy="close"]').click();
    cy.get('@chipDeletedSpy').should('have.been.calledOnceWith', 0);
  });

  it('should add a new chip when a value is entered and validated', () => {
    cy.mount(InputMultiSelectComponent, {
      componentProperties: {
        chips,
        chipAdded: createOutputSpy('chipAddedSpy'),
      },
    });

    cy.get('.input-multi-select-container').click();
    cy.get('app-input input').type('New Chip{enter}');
    cy.get('@chipAddedSpy').should('have.been.calledOnceWith', 'New Chip');
  });

  it('should not validate input if canValidate is false', () => {
    cy.mount(InputMultiSelectComponent, {
      componentProperties: {
        chips,
        canValidate: false,
        chipAdded: createOutputSpy('chipAddedSpy'),
      },
    });

    cy.get('.input-multi-select-container').click();
    cy.get('app-input input').should('not.exist');
    cy.get('@chipAddedSpy').should('not.have.been.called');
  });
});
