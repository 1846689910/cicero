const Path = require("path");
require(Path.resolve("src/server/register-babel"));
const {
  default: DomElement
} = require("../../../src/client/element/DomElement");
const { expect } = require("chai");
const { html } = require("../resources/assets");
const { JSDOM } = require("jsdom");
describe("DomElement", () => {
  let dom;

  beforeEach(() => {
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  afterEach(() => {
    dom = null;
    document = null;
  });

  describe("constructor", () => {
    it("should create DomElement with tag name", () => {
      const div = new DomElement("div").get();
      expect(div).not.equal(null);
      expect(div.tagName.toLowerCase()).to.equal("div");
    });

    it("should create DomElement with given DOM element", () => {
      const div = new DomElement(document.createElement("div")).get();
      expect(div).not.equal(null);
      expect(div.tagName.toLowerCase()).to.equal("div");
    });
  });

  describe("set", () => {
    it("should set element attribute", () => {
      const div = new DomElement("div").set("aria-hidden", "true").get();
      expect(div).not.equal(null);
      expect(div.getAttribute("aria-hidden")).to.equal("true");
    });
  });
});
