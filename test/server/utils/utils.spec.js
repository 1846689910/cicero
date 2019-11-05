const Path = require("path");
const { expect } = require("chai");
const { getAllPaths } = require("../../../src/server");

describe("getAllPaths", () => {
  it("should get all paths in the directory", () => {
    const { files, dirs } = getAllPaths(Path.resolve("test/server"), {
      needPath: false,
      pathType: 2
    });
    expect(files).to.include("utils.spec.js");
    expect(dirs).to.include("utils");
  });
});
