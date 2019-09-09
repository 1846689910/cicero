const coreJsVersion = require("core-js/package.json").version.split(".")[0];
const useBuiltIns = archetype.babel.hasMultiTargets
  ? { useBuiltIns: "entry", corejs: coreJsVersion }
  : {};
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        loose: true,
        targets: "> 0.25%, not dead",
        ...useBuiltIns
      }
    ],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@loadable/babel-plugin",
    "@babel/plugin-proposal-decorators",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "babel-plugin-lodash",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-flow-strip-types"
  ]
};
