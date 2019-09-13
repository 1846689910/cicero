const generalOptions = {
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env"], // for the experimental environment like using `import` to replace `require` clause
  plugins: ["@babel/plugin-proposal-class-properties"] // static properties
};
module.exports = function babelRegister(options = generalOptions) {
  return require("@babel/register")(options);
};
