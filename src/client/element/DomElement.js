class DomElement {
  constructor(name) {
    if (typeof name === "object" && name !== null) {
      this.ele = name;
    } else {
      this.ele = document.createElement(name);
    }
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
  innerHTML(html) {
    this.ele.innerHTML = html;
    return this;
  }
  get() {
    return this.ele;
  }
  append(...eles) {
    eles.forEach(ele => this.ele.appendChild(ele));
    return this;
  }
  toString(ele = this.ele) {
    const div = document.createElement("div");
    div.appendChild(ele);
    return div.innerHTML;
  }
}
export default DomElement;
