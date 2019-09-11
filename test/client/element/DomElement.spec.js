require("../../../src/server/register-babel")();
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

  describe("setStyle", () => {
    it("should set the element style", () => {
      const div = new DomElement("div").setStyle({ width: "100px" }).get();
      expect(div.style.width).to.equal("100px");
    });
  });

  describe("workOnClassList", () => {
    it("should work on the element's classList", () => {
      const div = new DomElement("div")
        .workOnClassList(classList => classList.add("my-div"))
        .get();
      expect(div.classList.contains("my-div")).to.be.true;
    });
  });

  describe("remove", () => {
    it("should remove the specified attribute", () => {
      const div = new DomElement("div").set("data-mark", "my-div").get();
      expect(div.getAttribute("data-mark")).to.equal("my-div");
      const newDiv = new DomElement(div).remove("data-mark").get();
      expect(newDiv.getAttribute("data-mark")).to.be.null;
    });
  });

  describe("innerHTML", () => {
    it("should set the element's innerHTML", () => {
      const html = "<span>foo</span>";
      const div = new DomElement("div").innerHTML(html).get();
      expect(div.innerHTML).to.equal(html);
    });
  });

  describe("get", () => {
    it("should get the nested DOM element", () => {
      const div = new DomElement("div").get();
      expect(div).not.to.be.null;
      expect(div.tagName.toLowerCase()).to.equal("div");
    });
  });

  describe("append", () => {
    it("should appendChild to the element", () => {
      const div = new DomElement("div").append(new DomElement("p").get()).get();
      expect(div.children[0].tagName.toLowerCase()).to.equal("p");
    });
  });

  describe("toString", () => {
    it("should get the element's string format", () => {
      const s = new DomElement("div").innerHTML("123").toString();
      expect(s).to.equal("<div>123</div>");
    });
  });
});
