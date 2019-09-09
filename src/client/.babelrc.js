const coreJsVersion = require("core-js/package.json").version.split(".")[0];
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        loose: true,
        targets: "> 0.25%, not dead",
        useBuiltIns: "entry",
        corejs: coreJsVersion
      }
    ],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@loadable/babel-plugin",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "babel-plugin-lodash",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-flow-strip-types"
  ]
};
