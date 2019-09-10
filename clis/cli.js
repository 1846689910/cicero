const shell = require("shelljs");
const Path = require("path");
const method = process.argv[2];

const isWin32 = process.platform === "win32";
const setEnv = env => ({ ...env, ...(!isWin32 && { PATH: process.env.PATH + ":/usr/local/bin" }) });
const baseCommand = cmd => (isWin32 ? cmd : `$"${cmd}"`);

const baseCommands = {
  build: `${baseCommand("babel")} src -d lib --extensions=.js,.jsx,.ts,.tsx --copy-files`,
  uglify: `${baseCommand("uglifyjs-folder")} lib -e -x .js -o lib`
};

const rmFiles = dir => shell.rm("-rf", dir);

const methods = {
  build() {
    rmFiles(Path.resolve("lib"));
    shell.exec(baseCommands.build, {
      env: setEnv({ NODE_ENV: "production" })
    });
    shell.exec(baseCommands.uglify);
  }
};

if (methods[method]) {
  methods[method]();
} else {
  console.error("No matched command found");
}
