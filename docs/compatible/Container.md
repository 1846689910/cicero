# Container

##### [back to contents](../../README.md#top)

## description

`Container` is used for user to store and manage app assets(`key` -> `value` -> `props`)

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
      <td><b>Container</b></td>
      <td><b>new Container()</b></td>
      <td><b>create a new container</b></td>
    </tr>
  </tbody>
</table>

## methods

- **setter**

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
      <td><b>setKV(k: not-object, v: object)</b></td>
      <td><b>set key-value pair</b></td>
    </tr>
    <tr>
      <td><b>undefined</b></td>
      <td><b>setKProps(k: not-object, props: object)</b></td>
      <td><b>set props by key</b></td>
    </tr>
    <tr>
      <td><b>undefined</b></td>
      <td><b>setVProps(v: object, props: object)</b></td>
      <td><b>set props by value</b></td>
    </tr>
    <tr>
      <td><b>undefined</b></td>
      <td><b>add(k: not-object, v: object, props: object)</b></td>
      <td><b>set key, value, props</b></td>
    </tr>
    <tr>
      <td><b>undefined</b></td>
      <td><b>remove(k: not-object)</b></td>
      <td><b>remove key from the container</b></td>
    </tr>
    <tr>
      <td><b>undefined</b></td>
      <td><b>setKProps(k: not-object, props: object)</b></td>
      <td><b>set props by key</b></td>
    </tr>
    <tr>
      <td><b>undefined</b></td>
      <td><b>updatePropsByK(k: not-object, props: object)</b></td>
      <td><b>combine the old and new props</b></td>
    </tr>
    <tr>
      <td><b>undefined</b></td>
      <td><b>doms(selector: string, searchInDom: object, events: object)</b></td>
      <td><b>search <code>selector</code> from <code>searchInDom</code> which default is <code>document</code>, get all elements and bind them with <code>events:{fn(){}, ...}</code> if given, then return those elements </b></td>
    </tr>
  </tbody>
</table>

- **getter**

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
      <td><b>object</b></td>
      <td><b>getVByK(k: not-object)</b></td>
      <td><b>get value</b></td>
    </tr>
    <tr>
      <td><b>object</b></td>
      <td><b>getPropsByK(k: not-object)</b></td>
      <td><b>get props</b></td>
    </tr>
    <tr>
      <td><b>object</b></td>
      <td><b>getPropsByV(v: object)</b></td>
      <td><b>get props</b></td>
    </tr>
    <tr>
      <td><b>array</b></td>
      <td><b>getVsByProps(props: object)</b></td>
      <td><b>all the Values in array that match the given props</b></td>
    </tr>
    <tr>
      <td><b>array</b></td>
      <td><b>getKsByProps(props: object)</b></td>
      <td><b>all the Keys in array that match the given props</b></td>
    </tr>

  </tbody>
</table>

- **checker**

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
      <td><b>boolean</b></td>
      <td><b>hasK(k: not-object)</b></td>
      <td><b>check if container has the key</b></td>
    </tr>
    <tr>
      <td><b>boolean</b></td>
      <td><b>hasV(v: object)</b></td>
      <td><b>check if container has the value</b></td>
    </tr>
    <tr>
      <td><b>boolean</b></td>
      <td><b>hasPropsByK(k: not-object)</b></td>
      <td><b>check if key in container has props</b></td>
    </tr>
  </tbody>
</table>
