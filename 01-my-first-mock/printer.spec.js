const { printer, spooler } = require('./printer');

describe("spooler", () => {
  it("prints each line", () => {
    let lines = [
      "ACME Corp",
      "To whomever it concerns",
      "Page 1/1"
    ];

    spooler(printer, lines);

    // Check that the test output contains the following lines:
    // ACME Corp
    // To whomever it concerns
    // Page 1/1
  });
});
