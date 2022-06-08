describe("Add to cart functionality", () => {
  it("visits home page", () => {
    cy.visit("/");
  });
  it("Adds item to cart when add is clicked", () => {
    cy.get("[type=submit]").first().click({ force: true });
  });
  it("Verifies that the item is added to the cart", () => {
    cy.get("li.nav-item.end-0").should("include.text", "My Cart (1)");
  });

});