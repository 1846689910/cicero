import $ from "jquery";
import "jquery-ui-dist/jquery-ui.min.js";
import "jquery-ui-dist/jquery-ui.min.css";
import fa from "font-awesome/css/font-awesome.min.css";

const windowDefaultStyle = {
  width: "500px",
  height: "350px",
  border: "0.5px solid rgba(0,0,0,0.2)",
  display: "flex",
  flexFlow: "column",
  position: "absolute",
  borderRadius: "10px",
  padding: "3px 0 0 0",
  background: "white",
  marginLeft: "-250px",
  marginTop: "-175px",
  top: "50%",
  left: "50%"
};
const windowDefaultMaxStyle = {
  width: "700px",
  height: "550px",
  marginLeft: "-350px",
  marginTop: "-275px"
};
const windowDefaultMinStyle = {
  width: "450px",
  height: "300px",
  marginLeft: "-225px",
  marginTop: "-150px"
};
export default class PopupWindow {
  constructor(props = {}) {
    const { windowStyle, windowMaxStyle, windowMinStyle } = props;
    this._opened = false;
    this.isOpen = this.isOpen.bind(this);
    this._windowStyle = Object.assign({}, windowDefaultStyle, windowStyle);
    this._windowMaxStyle = Object.assign(
      {},
      windowDefaultMaxStyle,
      windowMaxStyle
    );
    this._windowMinStyle = Object.assign(
      {},
      windowDefaultMinStyle,
      windowMinStyle
    );
    this._window = this._windowGen.call(this);
    this._bindEvents = this._bindEvents.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  isOpen() {
    return this._opened;
  }
  _setStyle(dom, style) {
    if (
      typeof dom === "object" &&
      dom !== null &&
      typeof style === "object" &&
      style !== null
    ) {
      Object.entries(style).forEach(([k, v]) => (dom.style[k] = v));
    }
  }
  _windowGen() {
    const div = document.createElement("div");
    this._setStyle(div, this._windowStyle);
    const baseCircleClassName = `${fa.fa} ${fa["fa-circle"]}`;
    div.innerHTML = `
          <div style="height: 20px; text-align: center;">My Window</div>
          <div style="height: 100%; margin: 10px; display: flex; border: 0.5px solid rgba(0, 0, 0, 0.1); flex-flow: row wrap;">
               <div><h2 style="align-self: center; text-align: center; flex: 1;">...Amazing Here ...</h2></div>
          </div>
          <div style="position: absolute; display: flex; flex-direction: row; width: 70px; justify-content: space-evenly; height: 20px; line-height: 20px;">
              <i class="${baseCircleClassName} close-1846689910" aria-hidden="true" style="color: red; font-size: 14px;"></i>
              <i class="${baseCircleClassName} minimize-1846689910" aria-hidden="true" style="color: #FFD662; font-size: 14px;"></i>
              <i class="${baseCircleClassName} maximize-1846689910" aria-hidden="true" style="color: #79C753; font-size: 14px;"></i>
          </div>
      `;
    return div;
  }
  _bindEvents() {
    const div = this._window;
    if (this.isOpen() && div) {
      div
        .querySelector(".close-1846689910")
        .addEventListener("click", this.close, false);
      div.querySelector(".minimize-1846689910").addEventListener(
        "click",
        e => {
          this._setStyle(div, this._windowMinStyle);
        },
        false
      );
      div.querySelector(".maximize-1846689910").addEventListener(
        "click",
        e => {
          this._setStyle(div, this._windowMaxStyle);
        },
        false
      );
    }
  }
  open() {
    if (!this.isOpen() && this._window) {
      document.body.appendChild(this._window);
      this._opened = true;
      this._bindEvents();
      $(this._window)
        .draggable({
          // handle: ".ui-draggable"
        })
        .resizable({
          handles: "n, e, s, w",
          minHeight: 300,
          minWidth: 450,
          maxHeight: 450,
          maxWidth: 600
        });
    }
  }
  close() {
    if (this.isOpen() && this._window) {
      document.body.removeChild(this._window);
      this._opened = false;
    }
  }
}
