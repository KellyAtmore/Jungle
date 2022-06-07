describe('Home page', () => {

  beforeEach(() => {
    cy.visit('/');
  })
  
  it("There is products on the page", () => {
    cy.get(".products article").should("be.visible");
  });
  
  it("There is 2 products on the page", () => {
    cy.get(".products article").should("have.length", 2);
  });
  
  it("Can navigate to product details page", () => {
    cy.get("[alt='Scented Blade']").click();
    cy.contains('The Scented Blade is an extremely rare, tall plant and can be found mostly in savannas.');
    cy.get('button').contains('Add');
  });
})