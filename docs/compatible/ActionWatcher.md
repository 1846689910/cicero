# ActionWatcher

##### [back to contents](../../README.md#top)

## description

`ActionWatcher` is used for watch user's event and execute callbacks at the proper moment.

options:

- `onTime`: watch for the continuous action. `onAction` will be triggered by each action and `afterAction` will be triggered `timeout` ms after each action
- `delay`: within `delay` ms after action, the following operation is invalid, Only after delay ms, the `afterDelay` function is available to be triggered

## API

<table>
  <thead>
    <tr>
      <th>Return</th>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>ActionWatcher</b></td>
      <td><b>new ActionWatcher(options: object)</b></td>
      <td><b>bind event <code>type</code> and listener to <code>window</code></b></td>
    </tr>
  </tbody>
</table>

`options`: 
```js
{
  onTime: {
    timeout: number,
    onAction: function,
    afterAction: function
  },
  delay: {
    delay: number,
    afterDelay: function
  }
}
```

### methods

<table>
  <thead>
    <tr>
      <th>Return</th>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>undefined</b></td>
      <td><b>watch()</b></td>
      <td><b>watch the user action and execute callback at proper moment</b></td>
    </tr>
  </tbody>
</table>

### examples

- use `onTime` feature
```js
const inputWatcher = new ActionWatcher({
  onTime: {
    timeout: 500,
    onAction: () => console.log("inputing"),
    afterAction: () => console.log("done input")
  }
});
document.querySelector("input").addEventListener("input", e => {
  inputWatcher.watch(e);
}, false);
```
- use `delay` feature
```js
const clickWatcher = new ActionWatcher({
  onTime: {
    onAction: () => console.log("I am first click every time")
  },
  delay: {
    afterDelay: () => console.log("second click good to happen")
  }
});
document.querySelector("div").addEventListener("click", clickWatcher.watch, false);
```