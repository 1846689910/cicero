module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: 8 }
      }
    ],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "@babel/proposal-object-rest-spread"
  ]
};
