const defaultOptions4EVUnit = {
  validStyle: {
    border: "1px solid green",
    boxShadow: "0 0 3px green"
  },
  invalidStyle: {
    border: "1px solid red",
    boxShadow: "0 0 3px red"
  }
};

export default class EVUnit {
  /**
   * @description form element validator unit used to wrap element and its validator function
   * @param {object}    element: a form element
   * @param {function}  validator: a validate function that will take the `element` as parameter, and return `boolean` value
   * @param {object}    options: an object contains `validStyle`, `invalidStyle` for the element's validity itself
   */
  constructor(element, validator, options = defaultOptions4EVUnit) {
    this.element = element;
    this.validator = validator;
    this.options = options;
  }
}
