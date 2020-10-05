describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
  it("successfully loads", () => {
    cy.visit("https://cloud.sterblue.com"); // change URL to match your dev URL
  });
  it("recorded test", () => {
    // https://chrome.google.com/webstore/detail/cypress-recorder/glcapdcacdfkokcmicllhcjigeodacab/related
    cy.visit("https://cloud.sterblue.com/login");
    cy.get("[data-testid=loginEmailInput]").click();
    cy.get("[data-testid=loginEmailInput]").type("admin@sterblue.com");
    cy.get("#content-root > .css-1k4twjc").click();
    cy.get("[data-testid=loginPassInput]").click();
    cy.get("[data-testid=loginPassInput]").type(
      "modified-mystify-lure-creme-moistness"
    );
    cy.get("#content-root > .css-1k4twjc").click();
    cy.get("#content-root > .css-1k4twjc").click();
    cy.get("[data-testid=loginSubmit]").click();
    cy.get("form").submit();
    cy.url().should("contains", "https://cloud.sterblue.com/login");
    cy.url().should(
      "contains",
      "https://app.hubspot.com/conversations-visitor/6102235/threads/utk/bdbcaaa8efa64c2fb18397c39c954e6c"
    );
    cy.get(".css-1vh4164 > #tooltip-Missions").click();
    cy.get(".css-1hwfws3").click();
    cy.get("#react-select-2-input").type("Demo-E2");
    cy.get(".css-9s9w08-RowGroup > .css-ws6chj-RowCell").click();
    cy.get(".css-9s9w08-RowGroup .e1wj3be0").click();
    cy.get("#images-step > .stepDot").click();
    cy.get(".css-sct1iq-Flex img").click();
    cy.get(
      ".css-1tillto-Item:nth-child(4) > #navigation > .css-63vt7h-Item:nth-child(2) .css-6mbeuy-StyledButton"
    ).click();
    cy.get(
      ".css-1tillto-Item:nth-child(4) > #navigation > .css-63vt7h-Item:nth-child(2) .css-6mbeuy-StyledButton"
    ).click();
    cy.get(
      ".css-1tillto-Item:nth-child(4) > #navigation > .css-63vt7h-Item:nth-child(2) .css-6mbeuy-StyledButton"
    ).click();
    cy.get(
      ".css-1tillto-Item:nth-child(4) > #navigation > .css-63vt7h-Item:nth-child(2) .css-6mbeuy-StyledButton"
    ).click();
  });
});
