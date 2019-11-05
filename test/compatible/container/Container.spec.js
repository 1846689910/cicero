const { expect } = require("chai");
const { Container } = require("../../../src/compatible");

describe("Container", () => {
  let container;
  
  beforeEach(() => {
    container = new Container();
  });

  it("should get the props by key", () => {
    container.add("bob", {
      age: 12
    }, {
      state: "CA"
    });
    expect(container.getPropsByK("bob")).to.have.property("state");
  });
});
