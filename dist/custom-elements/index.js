import { h, Host, attachShadow, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const checkboxBoldCss = ".test-div{display:flex;flex-direction:row;border:1px solid grey;background-color:rgb(243, 180, 151);width:200px;padding:5px}.checked-bold{margin:30px;background-color:hotpink;font-weight:900;font-size:40px;line-height:48px}";

let CheckboxBold$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  static get style() { return checkboxBoldCss; }
};

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

let MyComponent$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
  static get style() { return myComponentCss; }
};

const CheckboxBold = /*@__PURE__*/proxyCustomElement(CheckboxBold$1, [4,"checkbox-bold",{"id":[1],"checked":[4],"disabled":[4],"isChecked":[32]}]);
const MyComponent = /*@__PURE__*/proxyCustomElement(MyComponent$1, [1,"my-component",{"first":[1],"middle":[1],"last":[1]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      CheckboxBold,
  MyComponent
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { CheckboxBold, MyComponent, defineCustomElements };
