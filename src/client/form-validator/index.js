export class EVUnit {
  /**
   * @description form element validator unit used to wrap element and its validator function
   * @param {object}    element: a form element
   * @param {function}  validator: a validate function that will take the `element` as parameter, and return `boolean` value
   */
  constructor(element, validator) {
    this.element = element;
    this.validator = validator;
  }
}
const defaultOptions = {
  /**
   * validate function to validate the eternal result of those elements, default is requesting all `true` to `true`,
   * the results array order is the same as the elements order
   * @param {array} results an array of boolean value show valid status of each sub form element
   * @returns boolean
   */
  validate(results) {
    return results.every(x => !!x);
  },
  validCallback() {},
  invalidCallback() {}
};
export class FormValidator {
  /**
   * @description validate the timely result of a group of form elements
   * @param {array}   evUnits: array<EVUnit>, the elements and validators within this group
   * @param {object}  options: validator options
   */
  constructor(evUnits, options = {}) {
    this.evUnits = evUnits;
    this.options = Object.assign({}, defaultOptions, options);
    this._applied = false;
    this._results = this.evUnits.map(x => x.validator(x.element));  // array<boolean>
    this._listeners = new WeakMap();  // WeakMap<Element, ListenerFunction>
  }
  apply = () => {
    if (!this._applied) {
      this._init();
      this._triggerCallback();
      this._applied = true;
    }
  };
  unapply = () => {
    if (this._applied) {
      // TODO: once unapplied, needs to reset styles of recipient?
      this.evUnits.forEach(x => {
        x.element.removeEventListener("input", this._listeners.get(x.element), false);
        this._listeners.delete(x.element);
      });
      this._applied = false;
    }
  };
  _init = () => {
    this.evUnits.forEach((x, i) => {
      const listener = function() {
        this._results[i] = x.validator(x.element);
        this._triggerCallback();
      };
      x.element.addEventListener("input", listener, false);
      this._listeners.set(x.element, listener);
    });
  };
  isValid = () => this.options.validate(this._results);
  _triggerCallback = () => {
    this.isValid()
      ? this.options.validCallback()
      : this.options.invalidCallback();
  };
}
