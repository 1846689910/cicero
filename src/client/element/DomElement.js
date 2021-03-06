class DomElement {
  constructor(name) {
    if (typeof name === "object" && name !== null) {
      this.ele = name;
    } else {
      this.ele = document.createElement(name);
    }
  }
  set = (attr, val) => {
    this.ele.setAttribute(attr, val);
    return this;
  };
  setStyle = (styles = {}) => {
    if (typeof styles === "object" && styles !== null) {
      Object.entries(styles).forEach(([k, v]) => (this.ele.style[k] = v));
    }
    return this;
  };
  unsetStyle = (...styles) =>
    this.setStyle(
      styles.reduce((p, k) => {
        p[k] = "unset";
        return p;
      }, {})
    );
  workOnClassList = callback => {
    if (typeof callback === "function") callback(this.ele.classList);
    return this;
  };
  remove = (...attrs) => {
    attrs.forEach(attr => this.ele.removeAttribute(attr));
    return this;
  };
  innerHTML = html => {
    this.ele.innerHTML = html;
    return this;
  };
  get = () => this.ele;
  /**
   * @param {array} eles: array of HtmlDomElement or this class DomElement
   */
  append = (...eles) => {
    this.ele.append(...eles.map(x => (x instanceof DomElement ? x.get() : x)));
    return this;
  };
  /**
  * @param {array} eles: array of HtmlDomElement or this class DomElement
  */
  prepend = (...eles) => {
    this.ele.prepend(...eles.map(x => (x instanceof DomElement ? x.get() : x)));
    return this;
  };
  addEvent = (...eventInfoArrs) => {
    eventInfoArrs.forEach(([type, listener, useCapture = false]) =>
      this.ele.addEventListener(type, listener, useCapture)
    );
    return this;
  };
  toString = (ele = this.ele) => {
    const div = document.createElement("div");
    div.appendChild(ele);
    return div.innerHTML;
  };
}
export default DomElement;
