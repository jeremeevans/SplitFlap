describe("example-element", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000/dev")
  })

  it("increments the count when the button is clicked", () => {
    cy.get("button").should("contain.text", "Click Count: 0")
    cy.get("button").click()
    cy.get("button").should("contain.text", "Click Count: 1")
  })
})
