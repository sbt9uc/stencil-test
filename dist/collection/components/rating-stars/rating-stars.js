import { Component, Prop, State, h } from '@stencil/core';
export class RatingStars {
  constructor() {
    this.maxValue = 5;
    this.value = 0;
    this.starList = [];
  }
  setValue(newValue) {
    this.internalValue = newValue;
    this.createStarList(this.internalValue);
  }
  componentWillLoad() {
    this.createStarList(this.value);
  }
  createStarList(numberOfStars) {
    let starList = [];
    for (let i = 1; i <= this.maxValue; i++) {
      if (i <= numberOfStars) {
        starList.push(h("span", { class: "rating", onMouseOver: () => this.createStarList(i), onMouseOut: () => this.createStarList(this.value), onClick: () => this.setValue(i) }, "\u2605"));
      }
      else {
        starList.push(h("span", { class: "rating", onMouseOver: () => this.createStarList(i), onMouseOut: () => this.createStarList(this.value), onClick: () => this.setValue(i) }, "\u2606"));
      }
    }
    this.starList = starList;
  }
  render() {
    return (h("div", null, this.starList));
  }
  static get is() { return "rating-stars"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["rating-stars.css"]
  }; }
  static get styleUrls() { return {
    "$": ["rating-stars.css"]
  }; }
  static get properties() { return {
    "maxValue": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "max-value",
      "reflect": false,
      "defaultValue": "5"
    },
    "value": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
  static get states() { return {
    "starList": {},
    "internalValue": {}
  }; }
}
