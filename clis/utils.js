const shell = require("shelljs");
const Path = require("path");
const Fs = require("fs");

function uglify() {}

function getAllFiles(dir) {
  console.log(dir);
  return shell
    .find(dir)
    .filter(p => /\.[t|j]sx?$/.test(p) && Fs.lstatSync(p).isFile());
}

function getAllDirs(dir) {
  return shell.find(dir).filter(x => Fs.lstatSync(x).isDirectory());
}

console.log(getAllFiles(Path.resolve("src/")));
console.log(getAllDirs(Path.resolve("src")));
