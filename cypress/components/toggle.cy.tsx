import Toggle from "@/app/components/toggle/Toggle"

describe("toggle tests", ()=>{

  it("has light mode by default", ()=>{
    cy.mount(<Toggle/>);

    cy.get('[data-testId="toggleInput"]').should('not.be.checked');
  })

  it("has dark mode on click", () => {
    cy.mount(<Toggle/>);
    cy.get('[data-testId="toggleLabel"]').click()
    cy.get('[data-testId="toggleInput"]').should('be.checked');
  })
})