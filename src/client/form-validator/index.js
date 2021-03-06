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
  invalidCallback() {},
  beforeApply() {},
  afterApply() {},
  beforeUnapply() {},
  afterUnapply() {}
};

export default class FormValidator {
  /**
   * @description validate the timely result of a group of form elements
   * @param {array}   evUnits: array<EVUnit>, the elements and validators within this group
   * @param {object}  options: validator options
   */
  constructor(evUnits, options = {}) {
    this.evUnits = evUnits;
    this.options = Object.assign({}, defaultOptions, options);
    this._applied = false;
    this._results = []; // array<boolean>
    this._listeners = new WeakMap(); // WeakMap<Element, ListenerFunction>
  }
  apply = () => {
    if (!this._applied) {
      this.options.beforeApply();
      this.evUnits.forEach((x, i) => {
        ((evUnit, idx) => {
          const listener = () => {
            this._validateSingleElement(evUnit, idx);
            this._triggerCallback();
          };
          evUnit.element.addEventListener("input", listener, false);
          this._listeners.set(evUnit.element, listener);
          this._validateSingleElement(evUnit, idx);
        })(x, i);
      });
      this._triggerCallback();
      this._applied = true;
      this.options.afterApply();
    }
    return this;
  };

  unapply = () => {
    if (this._applied) {
      this.options.beforeUnapply();
      this.evUnits.forEach(x => {
        const listener = this._listeners.get(x.element);
        x.element.removeEventListener("input", listener, false);
        this._listeners.delete(x.element);
        this._unsetSingleElementStyle(x);
      });
      this._applied = false;
      this._results = [];
      this.options.afterUnapply();
    }
    return this;
  };

  _setSingleElementStyle = (evUnit, i) => {
    Object.entries(
      this._results[i] ? evUnit.options.validStyle : evUnit.options.invalidStyle
    ).forEach(([k, v]) => (evUnit.element.style[k] = v));
  };

  _validateSingleElement = (evUnit, i) => {
    this._results[i] = evUnit.validator(evUnit.element);
    this._setSingleElementStyle(evUnit, i);
  };

  _unsetSingleElementStyle = evUnit => {
    Object.entries(evUnit.options._originalStyle).forEach(
      ([k, v]) => (evUnit.element.style[k] = v)
    );
  };

  isValid = () => this.options.validate(this._results);

  _triggerCallback = () => {
    this.isValid()
      ? this.options.validCallback()
      : this.options.invalidCallback();
  };
}
