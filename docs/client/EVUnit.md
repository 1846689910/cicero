# EVUnit

##### [back to FormValidator](./FormValidator#top)

## description

`EVUnit` is a helper class for `FormValidator`. It includes each element and its validator function to help `FormValidator` to get validation result

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
      <td><b>new EVUnit(element: object, validator: function, options: object)</b></td>
      <td>
        <code>element</code> is one of HTML form element like <code>input</code><br>
        <code>validator</code> is a function that take the element as parameter and return boolean value, like <code>(ele) => ele.value.length > 0</code>
        <code>options</code> is an object includes both <code>validStyle</code> and <code>inValidStyle</code>
      </td>
    </tr>
  </tbody>
</table>

