describe('dashboard', () => {
  it('should authenticate into the dashboard', () => {
    cy.clearAllCookies()
    cy.clearLocalStorage()
    cy.visit('http://localhost:3000/dashboard/jobs')
    cy.wait(500)
    cy.url().should(
      'equal',
      'http://localhost:3000/auth/login?redirect=/dashboard/jobs'
    )
  })
})
