import { r as registerInstance, h, H as Host } from './index-be9951dc.js';

const checkboxBoldCss = ".test-div{display:flex;flex-direction:row;border:1px solid grey;background-color:rgb(243, 180, 151);width:200px;padding:5px}.checked-bold{margin:30px;background-color:hotpink;font-weight:900;font-size:40px;line-height:48px}";

let CheckboxBold = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * If the box is checked by default
     */
    this.checked = false;
    /**
     * Whether the checkbox is currently checked
     */
    this.isChecked = this.checked;
  }
  watchHandlerForValue() {
    this.isChecked = this.checked;
  }
  componentWillLoad() {
    this.watchHandlerForValue();
  }
  handleClick(cb) {
    var _a;
    this.isChecked = (_a = cb === null || cb === void 0 ? void 0 : cb.target) === null || _a === void 0 ? void 0 : _a.checked;
  }
  render() {
    return (h(Host, { class: "test-div" }, h("input", { type: "checkbox", name: "", id: this.id, checked: this.checked, disabled: this.disabled, onClick: (e) => this.handleClick(e) }), h("div", { class: this.isChecked ? 'checked-bold' : '' }, h("slot", null), " ", this.id, " SAR")));
  }
  static get watchers() { return {
    "checked": ["watchHandlerForValue"]
  }; }
};
CheckboxBold.style = checkboxBoldCss;

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

let MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

export { CheckboxBold as checkbox_bold, MyComponent as my_component };
