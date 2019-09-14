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
  btnGroupStyle,
  defaultDraggableOptions,
  defaultResizableOptions
} from "./configs";

export default class PopupWindow {
  constructor(props = {}) {
    const {
      windowStyle,
      windowMaxStyle,
      windowMinStyle,
      title = "",
      bodyHTML = "",
      events = {},
      draggableOptions,
      resizableOptions
    } = props;
    this._opened = false;
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
    this._draggableOptions = Object.assign(
      {},
      defaultDraggableOptions,
      draggableOptions
    );
    this._resizableOptions = Object.assign(
      {},
      defaultResizableOptions,
      resizableOptions
    );
    this.title = title;
    this.bodyHtml = bodyHTML;
    this.events = events;
    this._closeBtn = this._btnGen("CLOSE");
    this._minBtn = this._btnGen("MIN");
    this._maxBtn = this._btnGen("MAX");
    this._btnGroup = this._btnGroupGen(
      this._closeBtn,
      this._minBtn,
      this._maxBtn
    );
    this._window = this._windowGen();
  }
  isOpen = () => this._opened;
  _windowGen = () => {
    const window = new DomElement("div")
      .workOnClassList(x => x.add("cicero-popup-window"))
      .setStyle(this._windowStyle)
      .get();
    window.innerHTML = `
          <div class="cicero-popup-window-title" style="height: 20px; text-align: center;">${this.title}</div>
          <div class="cicero-popup-window-body" style="height: 100%; margin: 10px; display: flex; border: 0.5px solid rgba(0, 0, 0, 0.1); flex-flow: row wrap;">
              ${this.bodyHtml}
          </div>
      `;
    window.appendChild(this._btnGroup);
    return window;
  };
  _btnGen = btnType => {
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
  };
  _btnGroupGen = (...btns) => {
    return new DomElement("div")
      .setStyle(btnGroupStyle)
      .append(...btns)
      .get();
  };
  _bindEvents = () => {
    if (this.isOpen() && this._window) {
      const {
        beforeClose,
        afterClose,
        beforeMinimize,
        afterMinimize,
        beforeMaximize,
        afterMaximize
      } = this.events;
      this._closeBtn.addEventListener(
        "click",
        e => this.close(e, beforeClose, afterClose),
        false
      );
      this._minBtn.addEventListener(
        "click",
        e => this.minimize(e, beforeMinimize, afterMinimize),
        false
      );
      this._maxBtn.addEventListener(
        "click",
        e => this.maximize(e, beforeMaximize, afterMaximize),
        false
      );
    }
  };
  open = () => {
    if (!this.isOpen() && this._window) {
      const { beforeOpen, afterOpen } = this.events;
      typeof beforeOpen === "function" && beforeOpen();
      document.body.appendChild(this._window);
      this._opened = true;
      this._bindEvents();
      $(this._window)
        .draggable(this._draggableOptions)
        .resizable(this._resizableOptions);
      typeof afterOpen === "function" && afterOpen();
    }
  };
  close = (e, beforeClose, afterClose) => {
    if (this.isOpen() && this._window) {
      typeof beforeClose === "function" && beforeClose(e);
      document.body.removeChild(this._window);
      this._opened = false;
      typeof afterClose === "function" && afterClose(e);
    }
  };
  minimize = (e, beforeMinimize, afterMinimize) => {
    typeof beforeMinimize === "function" && beforeMinimize(e);
    this._window = new DomElement(this._window)
      .setStyle(this._windowMinStyle)
      .get();
    typeof afterMinimize === "function" && afterMinimize(e);
  };
  maximize = (e, beforeMaximize, afterMaximize) => {
    typeof beforeMaximize === "function" && beforeMaximize(e);
    this._window = new DomElement(this._window)
      .setStyle(this._windowMaxStyle)
      .get();
    typeof afterMaximize === "function" && afterMaximize(e);
  };
}
