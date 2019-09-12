const shell = require("shelljs");
const Path = require("path");
const Fs = require("fs");
const method = process.argv[2];

const isWin32 = process.platform === "win32";
const setEnv = env => ({
  ...env,
  ...(!isWin32 && { PATH: process.env.PATH + ":/usr/local/bin" })
});
const baseCommand = cmd => (isWin32 ? cmd : `$"${cmd}"`);
const getAllFiles = (dir, regex) =>
  shell.find(dir).filter(p => {
    if (regex) {
      return regex.test(p) && Fs.lstatSync(p).isFile();
    }
    return Fs.lstatSync(p).isFile();
  });

const baseCommands = {
  build: `${baseCommand(
    "babel"
  )} src -d lib --extensions=.js,.jsx,.ts,.tsx --copy-files`,
  uglify(input, output) {
    return `${baseCommand("uglifyjs")} ${input} -o ${output}`;
  }
};

const rmFiles = dir => shell.rm("-rf", dir);

const methods = {
  build() {
    rmFiles(Path.resolve("lib"));
    shell.exec(baseCommands.build, {
      env: setEnv({ NODE_ENV: "production" })
    });
    getAllFiles("lib", /\.[t|j]sx?$/).forEach(x => {
      shell.exec(baseCommands.uglify(x, x));
    });
  }
};

if (methods[method]) {
  methods[method]();
} else {
  console.error("No matched command found");
}
