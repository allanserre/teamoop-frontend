export function cypressDrag(selector: string, x: number, y: number) {
  cy.get(`[data-cy='${selector}']`).trigger('mousedown').trigger('mousemove', { clientX: x, clientY: y }).trigger('mouseup', { force: true });
}
