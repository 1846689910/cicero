class DomElement {
  constructor(name) {
    this.ele = document.createElement(name);
  }
  set(attr, val) {
    this.ele.setAttribute(attr, val);
    return this;
  }
  setStyle(styles = {}) {
    if (typeof styles === "object" && styles !== null) {
      Object.entries(styles).forEach(([k, v]) => (this.ele.style[k] = v));
    }
    return this;
  }
  workOnClassList(callback) {
    if (typeof callback === "function") callback(this.ele.classList);
    return this;
  }
  remove(attr) {
    this.ele.removeAttribute(attr);
    return this;
  }
  get() {
    return this.ele;
  }
}
export default DomElement;
