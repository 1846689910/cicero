# Binder

##### [back to contents](../../README.md#top)

## description

`Binder` is an event binding util class that simulating the event driven mechanism in client side.
It will bind event listener to `window`.

## API

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
      <td><b>static bind(eventObj: object)</b></td>
      <td><b>bind event <code>type</code> and listener to <code>window</code></b></td>
    </tr>
    <tr>
      <td><b>undefined</b></td>
      <td><b>static dispatch(event: object)</b></td>
      <td><b>dispatch event, can directly be call with <code>dispatch({type: "..."})</code></b></td>
    </tr>
  </tbody>
</table>

### example

```js
import { Binder } from "cicero/lib/client";
Binder.bind({
  SAY_HELLO(attr) {
    console.log(`hello ${attr.name}`);
  },
  DIV_TO_BLUE(attr) {
    document.querySelector(attr.selector).style.background = "blue";
  }
});
setTimeout(() => {
  dispatch({
    type: "SAY_HELLO",
    name: "user"
  });
  dispatch({
    type: "DIV_TO_BLUE",
    selector: "#div"
  });
}, 1000);
```
