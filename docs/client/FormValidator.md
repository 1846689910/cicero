<a id="top"></a>

# FormValidator

##### [back to contents](../../README.md#top)

## description

`FormValidator` is a HTML form element validation activity controller. It will dynamically watch the current status of the whole bunch of form elements, 
and also watch each element's validity status

## API

### constructor

<table>
  <thead>
    <tr>
      <th>Constructor</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>new FormValidator(evUnits: array&lt;<a href="./EVUnit.md">EVUnit</a>&gt;, options)</b></td>
      <td>
        <b>create a <code>FormValidator</code></b><br>
        <code>evUnits</code> will contain all the elements that are logically should be in one group for validation, and their validator function<br>
        <code>options</code> with default value
        <pre>
          {
            validate(results) { // return the final result of validation based on each element's validity status. 
              // the results array is in same order of evUnits array. It represents each element's timely validity status
              return results.every(x => !!x);
            },
            validCallback() {},  // will be called if the whole form is valid
            invalidCallback() {},  // will be called if the whole form is invalid
            beforeApply() {},  // will be called after apply method called but actions taken before
            afterApply() {},  // will be called after apply method
            beforeUnapply() {},  // will be called before unapply method
            afterUnapply() {}  // will be called after unapply method
          }
        </pre>
      </td>
    </tr>
  </tbody>
</table>

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
      <td><b>FormValidator</b></td>
      <td><b>apply()</b></td>
      <td><b>apply the formValidator, the dynamic validation will start working</b></td>
    </tr>
    <tr>
      <td><b>FormValidator</b></td>
      <td><b>unapply()</b></td>
      <td><b>release the formValidator, the dynamic validation will stop working</b></td>
    </tr>
      <tr>
      <td><b>boolean</b></td>
      <td><b>isValid()</b></td>
      <td><b>get the timely valid status of the whole form</b></td>
    </tr>
    <!-- 
    <tr>
      <td><b></b></td>
      <td><b></b></td>
      <td><b></b></td>
    </tr>
     -->
  </tbody>
</table>

### usage

```html
name: <input id="name" type="text" autocomplete="off" /> 
age: <input id="age" type="number" autocomplete="off" />
<br />
<button id="btn">submit</button>
```
```js
import { FormValidator, EVUnit } from "cicero/lib/client";
const name = document.getElementById("name");
const age = document.getElementById("age");
const btn = document.getElementById("btn");
const formValidator = new FormValidator(
  [
    new EVUnit(name, ele => ele.value.length > 0),
    new EVUnit(age, ele => ele.value > 0 && ele.value < 120)
  ],
  {
    validCallback() {
      btn.disabled = false;
    },
    invalidCallback() {
      btn.disabled = true;
    },
    afterUnapply() {
      btn.disabled = false;
    }
  }
).apply();
setTimeout(formValidator.unapply, 2000);
```