# Carousel

##### [back to Content](../../README.md#top)

## description

`Carousel` is a wrapper class to quickly build a bootstrap style Carousel

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
      <td><b>new CarouselItem(id: string, carouselItems: array, options: object)</b></td>
      <td><b>create a bootstrap styled Carousel instance</b>
        <pre>
        options: {
          withIndicators: boolean = true,
          withControl: boolean = true,
          style: object = {}
        }
        </pre>
      </td>
    </tr>
  </tbody>
</table>

### method

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
      <td><b>HtmlDomElement</b></td>
      <td><b>get()</b></td>
      <td><b>return the dom carousel element</b></td>
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

## usage

```js
import React from "react";
import {
  Carousel as BootstrapCarousel,
  CarouselItem
} from "cicero/lib/client";
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    const style = {
      height: "300px",
      width: "100%"
    };
    const carouselItems = [
      new CarouselItem({
        content: "<div/>",
        caption: "<h5>cicero bootstrap-carousel</h5><p>slide-0</p>",
        style: { ...style, background: "#ff7251" }
      }),
      new CarouselItem({
        content: "<div/>",
        caption: "<h5>cicero bootstrap-carousel</h5><p>slide-1</p>",
        style: { ...style, background: "#f5a142" }
      }),
      new CarouselItem({
        content: "<div/>",
        caption: "<h5>cicero bootstrap-carousel</h5><p>slide-2</p>",
        style: { ...style, background: "#ffca7b" }
      })
    ];
    this.carousel = new BootstrapCarousel("cicero-carousel", carouselItems, { style }).get();
  }
  componentDidMount() {
    this._div.append(this.carousel);
  }
  render() {
    return <div ref={r => (this._div = r)} style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}></div>;
  }
}
```
