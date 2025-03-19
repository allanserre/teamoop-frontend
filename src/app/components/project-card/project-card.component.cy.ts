import { Tags } from '@models/tags.model';
import { ProjectCardComponent } from './project-card.component';
import { Project } from '@models/project.model';

describe('ProjectCardComponent', () => {
  const description = 'Description du projet';
  const projectName = 'Nom du projet';

  //constantes
  const tags: Tags[] = [
    { name: '#tag1', color: 'green' },
    { name: '#tag2', color: 'red' },
    { name: '#tag3', color: 'blue' },
  ];

  const project: Project = {
    id: 3,
    name: projectName,
    description: description,
    startDate: new Date(),
    endDate: new Date(),
    active: true,
    tags: tags,
  };

  it('should mount', () => {
    cy.mount(ProjectCardComponent);
  });

  it('should display project title', () => {
    cy.mount(ProjectCardComponent, {
      componentProperties: {
        project: project,
      },
    });
    cy.get('[data-cy="project-title"]').should('contains.text', projectName);
  });

  it('should display project description', () => {
    cy.mount(ProjectCardComponent, {
      componentProperties: {
        project: project,
      },
    });
    cy.get('[data-cy="project-description"]').should('contains.text', description);
  });

  it('should display project tags', () => {
    cy.mount(ProjectCardComponent, {
      componentProperties: {
        project: project,
      },
    });
    cy.get('[data-cy="project-tags"]').should('have.length', 3);
  });
});
