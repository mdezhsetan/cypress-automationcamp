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

  it("Keyboard Actions > Clear input", function () {
    cy.visit("https://www.google.com/");
    cy.get("input[name=q]").type("Cypress");
    cy.get("input[name=q]").clear();
    cy.get("input[name=q]").type("Cypress");
    cy.get("input[name=q]").type("{selectall}{del}");
    cy.get("input[name=q]").type("Cypress");
    cy.get("input[name=q]").type("{selectall}{backspace}");
  });
  it("Keyboard Actions > Delay Option", function () {
    cy.visit("https://www.google.com/");
    cy.get("input[name=q]").type("I'm typing slowly", { delay: 100 });
    cy.get("input[name=q]").clear();
    cy.get("input[name=q]").type("I'm typing fast", { delay: 0 });
  });
  it("Keyboard Actions > Repeat", function () {
    cy.visit("https://www.google.com/");
    cy.get("input[name=q]").type("Cypress ".repeat(6));
  });
});

describe("Session3 - Mouse Actions", function () {
  it("1-Click / 2-Double Click / 3-Right Click", function () {
    // Click
    cy.visit("https://play2.automationcamp.ir/index.html");
    cy.get("input#male").click();
    cy.get("input#male").should("be.checked");
    // Double Click
    cy.contains("Double-click me").dblclick();
    cy.contains("Your Sample Double Click worked!");
    // Right click + Position
    cy.get("body").rightclick("top");
    // Force Click
    cy.get("body").rightclick({ force: true });
    // Hold CTRL and click
    cy.get('[href="contact.html"]').click({ ctrlKey: true });
  });

  it("Mouse Hover", function () {
    // When implemented by onmouseover event
    cy.visit("test-hover.html");
    cy.get("#left11").should("not.be.visible");
    cy.get("#menu1").trigger("mouseover");
    cy.get("#left11").should("be.visible");

    // When implemented by CSS Psedu-class `:hover`
    cy.get("#left21").should("not.be.visible");
    cy.get("#menu2").realHover();
    cy.get("#left21").should("be.visible");
  });

  it("Long Press (Click and Hold)", function () {
    cy.visit("https://demos.telerik.com/kendo-ui/circular-gauge/index");
    cy.get(".qual_x_svg_dash").click();
    cy.get("#onetrust-accept-btn-handler").click();
    // cy.get("[role=button][title=Increase]").trigger('mousedown', {which: 1})
    cy.get("[role=button][title=Increase]")
      .realMouseDown()
      .wait(3000)
      .trigger("mouseup", { force: true });
    cy.get("[role=slider]")
      .invoke("attr", "aria-valuenow")
      .should("not.equal", "55");
  });

  it("Drag and Drop", function () {
    cy.visit("https://selenium08.blogspot.com/2020/01/drag-drop.html");
    cy.get("#draggable")
      .trigger("mousedown", { which: 1 })
      .get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });

  it("Drag and Drop by offset", function () {
    cy.visit("https://selenium08.blogspot.com/2020/01/drag-drop.html");
    cy.get("#draggable")
      .trigger("mousedown", { which: 1 })
      .realMouseMove(300, 100)
      .realMouseUp();
  });
});
