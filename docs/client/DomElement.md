# DomElement

##### [back to contents](../../README.md#top)

## description

`DomElement` is a HTML dom element util class for chaining element operations.

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
      <td><b>new DomElement(tagName: string)</b></td>
      <td><b>wrap a create element whose tag name will be `tagName`</b></td>
    </tr>
    <tr>
      <td><b>new DomElement(htmlElement: object)</b></td>
      <td><b>wrap an existing html dom element</b></td>
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
      <td><b>DomElement</b></td>
      <td><b>setAttr(k:string, v:string)</b></td>
      <td><b>set html element attribute</b></td>
    </tr>
    <tr>
      <td><b>DomElement</b></td>
      <td><b>setStyle(style: object)</b></td>
      <td><b>set html element style</b></td>
    </tr>
    <tr>
      <td><b>DomElement</b></td>
      <td><b>unsetStyle(...styles: string)</b></td>
      <td><b>set the html element specified style to "unset"</b></td>
    </tr>
    <tr>
      <td><b>DomElement</b></td>
      <td><b>workOnClassList(callback: function)</b></td>
      <td><b>set a callback function <code>(classList)=>{}</code> to work on classList</b></td>
    </tr>
    <tr>
      <td><b>DomElement</b></td>
      <td><b>remove(k: string)</b></td>
      <td><b>remove html element attribute</b></td>
    </tr>
    <tr>
      <td><b>DomElement</b></td>
      <td><b>innerHTML(html: string)</b></td>
      <td><b>set html element innerHTML</b></td>
    </tr>
    <tr>
      <td><b>HtmlElement</b></td>
      <td><b>get()</b></td>
      <td><b>get the nested html dom element</b></td>
    </tr>
    <tr>
      <td><b>DomElement</b></td>
      <td><b>append(...eles: object)</b></td>
      <td><b>append several HtmlDomElements or this class DomElement in this element</b></td>
    </tr>
    <tr>
      <td><b>DomElement</b></td>
      <td><b>prepend(...eles: object)</b></td>
      <td><b>prepend several HtmlDomElements or this class DomElement in this element</b></td>
    </tr>
    <tr>
      <td><b>DomElement</b></td>
      <td><b>addEvent(...eventInfoArrs: array)</b></td>
      <td><b>add event listener to this element, <code>eventInfoArrs</code> is <code>[type, listener, useCapture=false]</code>,
      use like <code>addEvent(["click", () => console.log("clicked")])</code></b></td>
    </tr>
    <tr>
      <td><b>string</b></td>
      <td><b>toString()</b></td>
      <td><b>get the string format of the nested element</b></td>
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
