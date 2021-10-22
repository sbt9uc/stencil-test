import { Component, State, h, Prop, Host, Watch } from '@stencil/core';
export class CheckboxBold {
  constructor() {
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
    return (h(Host, { class: "test-div" },
      h("input", { type: "checkbox", name: "", id: this.id, checked: this.checked, disabled: this.disabled, onClick: (e) => this.handleClick(e) }),
      h("div", { class: this.isChecked ? 'checked-bold' : '' },
        h("slot", null),
        " ",
        this.id,
        " SAR")));
  }
  static get is() { return "checkbox-bold"; }
  static get originalStyleUrls() { return {
    "$": ["checkbox-bold.css"]
  }; }
  static get styleUrls() { return {
    "$": ["checkbox-bold.css"]
  }; }
  static get properties() { return {
    "id": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The unique Id"
      },
      "attribute": "id",
      "reflect": false
    },
    "checked": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "If the box is checked by default"
      },
      "attribute": "checked",
      "reflect": false,
      "defaultValue": "false"
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "If the box box should be disabled"
      },
      "attribute": "disabled",
      "reflect": false
    }
  }; }
  static get states() { return {
    "isChecked": {}
  }; }
  static get watchers() { return [{
      "propName": "checked",
      "methodName": "watchHandlerForValue"
    }]; }
}
