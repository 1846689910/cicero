# PopupWindow

## description

`PopupWindow` is a util class for client side to popup a window interface.

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
      <td><b>new PopupWindow(options: object)</b></td>
      <td><b>create a `PopupWindow` with init options</b></td>
    </tr>
  </tbody>
</table>

#### options

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Default</th>
      <th>Descriptiong</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>windowStyle</b></td>
      <td><b>object</b></td>
      <td><b><code>undefined</code></b></td>
      <td><b>set the style of outer box of window</b></td>
    </tr>
    <tr>
      <td><b>windowMaxStyle</b></td>
      <td><b>object</b></td>
      <td><b><code>
        {
          width: "700px",
          height: "550px",
          marginLeft: "-350px",
          marginTop: "-275px"
        }
      </code></b></td>
      <td><b>set the style of window if maxmize clicked</b></td>
    </tr>
    <tr>
      <td><b>windowMinStyle</b></td>
      <td><b>object</b></td>
      <td><b><code>
        {
          width: "450px",
          height: "300px",
          marginLeft: "-225px",
          marginTop: "-150px"
        }
      </code></b></td>
      <td><b>set the style of window if minimize clicked</b></td>
    </tr>
    <tr>
      <td><b>title</b></td>
      <td><b>string</b></td>
      <td><b><code>""</code></b></td>
      <td><b>set the title of window</b></td>
    </tr>
    <tr>
      <td><b>bodyHTML</b></td>
      <td><b>string</b></td>
      <td><b><code>""</code></b></td>
      <td><b>set the innerHTML of window</b></td>
    </tr>
    <tr>
      <td><b>events</b></td>
      <td><b>object</b></td>
      <td><b><code>{}</code></b></td>
      <td><b>set the events handler to tackle window events, including <code>beforeOpen, afterOpen, beforeClose, afterClose, beforeMinimize, afterMinimize, beforeMaximize, afterMaximize</code></b></td>
    </tr>
    <tr>
      <td><b>draggableOptions</b></td>
      <td><b>object</b></td>
      <td><b><code>{}</code></b></td>
      <td><b>set the jquery-ui draggable widget options, see <a href="https://jqueryui.com/draggable/">draggable</a></b></td>
    </tr>
    <tr>
      <td><b>resizableOptions</b></td>
      <td><b>object</b></td>
      <td><b><code>{
        handles: "n, e, s, w, se, sw",
        minHeight: 300,
        minWidth: 450,
        maxHeight: 450,
        maxWidth: 600
      }</code></b></td>
      <td><b>set the jquery-ui resizable widget options, see <a href="https://jqueryui.com/resizable/">resizable</a></b></td>
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
      <td><b>undefined</b></td>
      <td><b>open()</b></td>
      <td><b>open the popup window</b></td>
    </tr>
    <tr>
      <td><b>undefined</b></td>
      <td><b>isOpen()</b></td>
      <td><b>check if the popup window is opened</b></td>
    </tr>
    <tr>
      <td><b>undefined</b></td>
      <td><b>close()</b></td>
      <td><b>close the popup window if opened</b></td>
    </tr>
    <tr>
      <td><b>undefined</b></td>
      <td><b>minimize()</b></td>
      <td><b>minimize the window with the windowMinStyle</b></td>
    </tr>
    <tr>
      <td><b>undefined</b></td>
      <td><b>maximize()</b></td>
      <td><b>maximize the window with the windowMaxStyle</b></td>
    </tr>
  </tbody>
</table>
