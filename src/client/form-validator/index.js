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
   * @param {array} results
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
    this._results = this.evUnits.map(x => x.validator(x.element));
    this._init();
    this.triggerCallback();
  }
  _init = () => {
    this.evUnits.forEach((x, i) =>
      x.element.addEventListener(
        "input",
        () => {
          this._results[i] = x.validator(x.element);
          this.triggerCallback();
        },
        false
      )
    );
  };
  isValid = () => this.options.validate(this._results);
  triggerCallback = () => {
    this.isValid()
      ? this.options.validCallback()
      : this.options.invalidCallback();
  };
}
