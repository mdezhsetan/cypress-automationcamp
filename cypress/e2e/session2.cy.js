///<reference types = "cypress"/>

describe("session2", () => {
  it("test1", () => {
    cy.visit("https://play2.automationcamp.ir/index.html");
    cy.get("#fname").type("Mahi");
  });
  it("scroll", () => {
    cy.visit("https://datatables.net/examples/basic_init/scroll_x.html");
    cy.get(":nth-child(10) > :nth-child(9)").click();
  });
  it("contain", () => {
    cy.visit("https://play2.automationcamp.ir/index.html");
    cy.contains("label[for='moption']", " Option 2");
    cy.get("label[for='moption']").contains(" Option 2");
  });
  it("Children", () => {
    cy.visit("https://play2.automationcamp.ir/index.html");
    cy.get("#owc").children();
    cy.get("#owc").children("[value='option 2']").click();
    cy.contains("Singer").parent();
  });
});
