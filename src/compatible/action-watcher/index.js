class ActionWatcher {
  /**
   * @description: Watch the user actions
   * @param {object} options: including `onTime` and `delay`
   */
  constructor(options = { onTime: {}, delay: {} }) {
    /**
     * `onTime`: {timeout: number, onAction: function, afterAction: function}
     * when everytime the user action is triggered, the `onAction` method will be called
     * when `timeout` ms after the action is triggered, the `afterAction` method will be called
     */
    this._onTime = {
      timeout: 500,
      ...options.onTime,
      timer: null,
      event: null
    };
    /**
     * `delay`: {delay: number, afterDelay: function}
     * The user action is triggered first time. Then, within `delay` ms, the triggered user action
     * will be invalid. After delay ms, the triggered user action will also raise to call `afterDelay`
     */
    this._delay = {
      delay: 1000, // by default 1000ms delay
      ...options.delay,
      timer: null,
      ready: false
    };
  }
  watch = e => {
    this._watchOnTime(e);
    this._watchDelay();
  };
  _watchOnTime = e => {
    const that = this._onTime;
    that.event = e;
    const { timeout, onAction, afterAction } = that;
    if (e.presist) e.persist();
    typeof onAction === "function" && onAction(that.event);
    if (that.timer) {
      clearTimeout(that.timer);
      that.timer = null;
    }
    that.timer = setTimeout(() => {
      if (typeof afterAction === "function") {
        afterAction(that.event);
        that.event = null;
      }
    }, timeout);
  };
  _watchDelay = () => {
    const that = this._delay;
    if (!that.timer) {
      that.timer = setTimeout(() => {
        that.ready = true;
        clearTimeout(that.timer);
        that.timer = null;
      }, that.delay);
    }
    if (that.ready) {
      that.ready = false;
      if (that.timer) {
        clearTimeout(that.timer);
        that.timer = null;
      }
      typeof that.afterDelay === "function" && that.afterDelay();
    }
  };
}
module.exports = ActionWatcher;