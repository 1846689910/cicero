import $ from "jquery";
import "jquery-ui-dist/jquery-ui.min.js";
import "jquery-ui-dist/jquery-ui.min.css";
import fa from "font-awesome/css/font-awesome.min.css";
import DomElement from "../element/DomElement";
import {
  windowDefaultMaxStyle,
  windowDefaultMinStyle,
  windowDefaultStyle,
  closeBtnStyle,
  minBtnStyle,
  maxBtnStyle,
  btnGroupStyle
} from "./styles";

const defaultBodyHtml = new DomElement("h2")
  .setStyle({ alignSelf: "center", textAlign: "center", flex: 1 })
  .innerHTML("...Amazing Here...")
  .toString();

export default class PopupWindow {
  constructor(props = {}) {
    const {
      windowStyle,
      windowMaxStyle,
      windowMinStyle,
      title = "My Window",
      bodyHTML = defaultBodyHtml
    } = props;
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
    this.title = title;
    this.bodyHtml = bodyHTML;
    this._closeBtn = this._btnGen("CLOSE");
    this._minBtn = this._btnGen("MIN");
    this._maxBtn = this._btnGen("MAX");
    this._btnGroup = this._btnGroupGen(
      this._closeBtn,
      this._minBtn,
      this._maxBtn
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
    const window = new DomElement("div").setStyle(this._windowStyle).get();
    window.innerHTML = `
          <div style="height: 20px; text-align: center;">${this.title}</div>
          <div style="height: 100%; margin: 10px; display: flex; border: 0.5px solid rgba(0, 0, 0, 0.1); flex-flow: row wrap;">
              ${this.bodyHtml}
          </div>
      `;
    window.appendChild(this._btnGroup);
    return window;
  }
  _btnGen(btnType) {
    let style;
    if (btnType === "CLOSE") {
      style = closeBtnStyle;
    } else if (btnType === "MIN") {
      style = minBtnStyle;
    } else {
      style = maxBtnStyle;
    }
    return new DomElement("i")
      .workOnClassList(x => {
        x.add(fa.fa);
        x.add(fa["fa-circle"]);
        x.add(`cicero-popup-window-btn-${btnType.toLowerCase()}`);
      })
      .set("aria-hidden", "true")
      .setStyle(style)
      .get();
  }
  _btnGroupGen(...btns) {
    return new DomElement("div")
      .setStyle(btnGroupStyle)
      .append(...btns)
      .get();
  }
  _bindEvents() {
    const div = this._window;
    if (this.isOpen() && this._window) {
      this._closeBtn.addEventListener("click", this.close, false);
      this._minBtn.addEventListener(
        "click",
        e => {
          this._setStyle(div, this._windowMinStyle);
        },
        false
      );
      this._maxBtn.addEventListener(
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
          handles: "n, e, s, w, se, sw",
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
