module.exports = require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env"], // for the experimental environment like using `import` to replace `require` clause
  plugins: ["@babel/plugin-proposal-class-properties"] // static properties
});
