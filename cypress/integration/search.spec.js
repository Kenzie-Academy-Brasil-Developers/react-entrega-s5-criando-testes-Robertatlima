context("Search", () => {
  it("Search for an address using the CEP", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
    cy.get("input").type(50980360);
    cy.contains("Buscar pelo CEP").click();
  });
});
