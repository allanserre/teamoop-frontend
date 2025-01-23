import { Tags } from '@models/tags.model';
import { ProjectCardComponent } from './project-card.component'
import { Project } from '@models/project.model'

describe('ProjectCardComponent', () => {
  it('should mount', () => {
    cy.mount(ProjectCardComponent)
  })

  it('should display project title', () => {
    const tags: Tags[] = [
      {name: '#tag1', color: 'green'},
      {name: '#tag2', color: 'red'},
      {name: '#tag3', color: 'blue'}
    ];
    
    const project: Project = {
      name: 'Nom du projet', 
      description: 'Description du projet',
      startDate: new Date(),
      endDate: new Date(),
      active: true,
      tags: tags
    };
    cy.mount(ProjectCardComponent, {
      componentProperties: {
        project: project
      }
    })
    cy.get('[data-cy="project-title"]').should('have.text', 'Nom du projet')
  })

  it('should display project description', () => {

    const tags: Tags[] = [
      {name: '#tag1', color: 'green'},
      {name: '#tag2', color: 'red'},
      {name: '#tag3', color: 'blue'}
    ];

    const project: Project = {
      name: 'Nom du projet', 
      description: 'Description du projet',
      startDate: new Date(),
      endDate: new Date(),
      active: true,
      tags: tags
    };
    cy.mount(ProjectCardComponent, {
      componentProperties: {
        project: project
      }
    })
    cy.get('[data-cy="project-description"]').should('have.text', 'Description du projet')
  })

  it('should display project tags', () => {
    const tags: Tags[] = [
      {name: '#tag1', color: 'green'},
      {name: '#tag2', color: 'red'},
      {name: '#tag3', color: 'blue'}
    ];

    const project: Project = {
      name: 'Nom du projet', 
      description: 'Description du projet',
      startDate: new Date(),
      endDate: new Date(),
      active: true,
      tags: tags
    };
    cy.mount(ProjectCardComponent, {
      componentProperties: {
        project: project
      }
    })
    cy.get('[data-cy="project-tags"]').should('have.length', 3)
  })
})