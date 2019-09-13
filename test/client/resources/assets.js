const Fs = require("fs");
const Path = require("path");

const TOP_HEAD = "<TOP_HEAD/>";
const BOTTOM_HEAD = "<BOTTOM_HEAD/>";
const IN_BODY = "<IN_BODY/>";

const style = css => `<style>${css}</style>`;
const script = script => `<script>${script}</script>`;

const template = `
<!DOCTYPE html>
<html>
<head>
  ${TOP_HEAD}
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>cicero</title>
  ${BOTTOM_HEAD}
</head>
<body>
  ${IN_BODY}
</body>
</html>
`;
const html = (locators = {}) => {
  const { topHeads = [], bottomHeads = [], inBodys = [] } = locators;
  return template
    .replace(TOP_HEAD, topHeads.join(""))
    .replace(BOTTOM_HEAD, bottomHeads.join(""))
    .replace(IN_BODY, inBodys.join(""));
};

module.exports = {
  baseHtml: html(),
  html
};
