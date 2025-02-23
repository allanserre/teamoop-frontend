import { InputDescriptionComponent } from './input-description.component'

describe('InputDescriptionComponent', () => {

  const label = 'Label';
  const placeholder = 'text'

  it('should mount', () => {
    cy.mount(InputDescriptionComponent)
  })

  it('should display input', () => {
      cy.mount(InputDescriptionComponent)
      cy.get('textarea').should('exist')
    })
  
    it('should display label', () => {
      cy.mount(InputDescriptionComponent, {
        componentProperties: {
          label: label
        }
      })
      cy.get('label').should('have.text', label)
    })
  
    it('should display placeholder', () => {
      cy.mount(InputDescriptionComponent, {
        componentProperties: {
          label: label,
          placeholder: placeholder
        }
      })
      cy.get('textarea').should('have.attr', 'placeholder', placeholder)
    })
})