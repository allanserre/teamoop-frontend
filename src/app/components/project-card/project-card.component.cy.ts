import { ProjectCardComponent } from './project-card.component'
import { Project } from '../../models/project.model'

describe('ProjectCardComponent', () => {
  it('should mount', () => {
    cy.mount(ProjectCardComponent)
  })

  it('should display project title', () => {
    const project: Project = { titre: 'Nom du projet', description: 'Description du projet' };
    cy.mount(ProjectCardComponent, {
      componentProperties: {
        project: project
      }
    })
    cy.get('h3').should('have.text', 'Nom du projet')
  })

  it('should display project description', () => {
    const project: Project = { titre: 'Nom du projet', description: 'Description du projet' };
    cy.mount(ProjectCardComponent, {
      componentProperties: {
        project: project
      }
    })
    cy.get('p').should('have.text', 'Description du projet')
  })
})