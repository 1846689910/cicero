# register-babel

##### [back to contents](../../README.md#top)

## Description

enable `@babel/register`

## Usage

```js
require("cicero/lib/server").registerBabel(options);
```

- options: the options object passed in `@babel/register`
  - default:

```js
{
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env"],
  plugins: ["@babel/plugin-proposal-class-properties"]
}
```
