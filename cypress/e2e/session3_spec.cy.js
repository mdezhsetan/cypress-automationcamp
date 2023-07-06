///<reference types = 'cypress' />

describe("Session 3", () => {
  //   it("Keyboard Actions --> Type", () => {
  //     cy.get("https://google.com").type("learning cypress {enter}");
  //   });

  //   it("Keyboard Actions --> using sequences", () => {
  //     cy.get("https://google.com").type(
  //       "learning cypress {backspace}{home}{del}"
  //     );
  //   });

  it("Keyboard Actions --> Key Combination", () => {
    cy.visit("https://google.com/");
    cy.get("textarea[name=q]")
      .type("cypress")
      .realPress(["Control", "A"])
      .realPress(["Control", "X"])
      .realPress(["Control", "v"]);
  });

  it("5- Keyboard Actions > Clear input", function () {
    cy.visit("https://www.google.com/");
    cy.get("input[name=q]").type("Cypress");
    cy.get("input[name=q]").clear();
    cy.get("input[name=q]").type("Cypress");
    cy.get("input[name=q]").type("{selectall}{del}");
    cy.get("input[name=q]").type("Cypress");
    cy.get("input[name=q]").type("{selectall}{backspace}");
  });
  it("6- Keyboard Actions > Delay Option", function () {
    cy.visit("https://www.google.com/");
    cy.get("input[name=q]").type("I'm typing slowly", { delay: 100 });
    cy.get("input[name=q]").clear();
    cy.get("input[name=q]").type("I'm typing fast", { delay: 0 });
  });
  it("7- Keyboard Actions > Repeat", function () {
    cy.visit("https://www.google.com/");
    cy.get("input[name=q]").type("Cypress ".repeat(6));
  });
});
