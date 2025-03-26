import { ProjectTagsSelectionComponent } from './project-tags-selection.component';
import { TagsService } from '@services/tags.service';
import { of } from 'rxjs';

describe('ProjectTagsSelectionComponent', () => {
  let tagsServiceMock: Partial<TagsService>;
  const initialTags = [{ name: 'Angular' }, { name: 'Cypress' }];
  const debounceTime = 300;

  beforeEach(() => {
    tagsServiceMock = {
      searchTags: cy.stub().returns(of([])), // Stub de base
    };
  });

  it('should mount', () => {
    cy.mount(ProjectTagsSelectionComponent, {
      componentProperties: { tags: initialTags },
      providers: [{ provide: TagsService, useValue: tagsServiceMock }],
    });
  });

  it('should display initial tags as chips', () => {
    cy.mount(ProjectTagsSelectionComponent, {
      componentProperties: { tags: initialTags },
      providers: [{ provide: TagsService, useValue: tagsServiceMock }],
    });

    cy.get('app-chip-input').should('have.length', initialTags.length);
    cy.get('app-chip-input').first().should('contain.text', initialTags[0].name);
    cy.get('app-chip-input').last().should('contain.text', initialTags[1].name);
  });

  it('should show dropdown on input focus with matching tags', () => {
    tagsServiceMock.searchTags = cy.stub().returns(of([{ name: 'Vue' }, { name: 'React' }]));

    cy.mount(ProjectTagsSelectionComponent, {
      componentProperties: { tags: initialTags },
      providers: [{ provide: TagsService, useValue: tagsServiceMock }],
    });

    cy.get('app-input-multi-select').click();
    cy.get('app-input-multi-select [data-cy="input"]').type('V').wait(debounceTime);
    cy.get('.item-list-container').should('be.visible');
    cy.get('.item-container').should('have.length', 2);
    cy.get('.item-container').first().should('contain.text', 'Vue');
  });

  it('should add a new tag when selected from dropdown', () => {
    const tagName = 'Typescript';
    tagsServiceMock.searchTags = cy.stub().returns(of([{ name: tagName }]));

    cy.mount(ProjectTagsSelectionComponent, {
      componentProperties: { tags: initialTags },
      providers: [{ provide: TagsService, useValue: tagsServiceMock }],
    });

    cy.get('app-input-multi-select').click();
    cy.get('app-input-multi-select [data-cy="input"]').type('Type');
    cy.get('.item-container').contains(tagName).click();

    cy.get('app-chip-input').should('contain.text', tagName);
  });

  it('should delete a tag when clicking on close icon', () => {
    cy.mount(ProjectTagsSelectionComponent, {
      componentProperties: { tags: initialTags },
      providers: [{ provide: TagsService, useValue: tagsServiceMock }],
    });

    cy.get('app-chip-input').first().should('contain.text', initialTags[0].name);
    cy.get('app-chip-input [data-cy="close"]').first().click();

    cy.get('app-chip-input').should('have.length', 2);
  });

  it('should update input value when typing', () => {
    cy.mount(ProjectTagsSelectionComponent, {
      componentProperties: { tags: initialTags },
      providers: [{ provide: TagsService, useValue: tagsServiceMock }],
    });

    cy.get('app-input-multi-select').click();
    cy.get('app-input-multi-select input').type('Svelte');
    cy.get('app-input-multi-select input').should('have.value', 'Svelte');
  });

  it('should not show dropdown when input is empty', () => {
    cy.mount(ProjectTagsSelectionComponent, {
      componentProperties: { tags: initialTags },
      providers: [{ provide: TagsService, useValue: tagsServiceMock }],
    });

    cy.get('app-input-multi-select').click();
    cy.get('app-input-multi-select input').type('sddd').wait(debounceTime).clear();
    cy.get('.item-list-container').should('not.exist');
  });

  // TODO This test is working with by hand but not with cypress env

  // it('should not loose focus when clicking outside dropdown', () => {
  //   cy.mount(ProjectTagsSelectionComponent, {
  //     componentProperties: { tags: initialTags },
  //     providers: [{ provide: TagsService, useValue: tagsServiceMock }],
  //   });
  //
  //   cy.get('app-input-multi-select').click();
  //   cy.get('app-input-multi-select input').type('sddd').wait(debounceTime);
  //
  //   // Click outside of the dropdown container
  //   cy.get('.cdk-overlay-backdrop').click('bottom', {force: true});
  //   cy.get('app-input-multi-select input').should('be.focused');
  // });
});
