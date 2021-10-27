import { r as registerInstance, h } from './index-be9951dc.js';

const ratingStarsCss = ":host{display:block}.rating{color:orange}";

let RatingStars = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
RatingStars.style = ratingStarsCss;

export { RatingStars as rating_stars };
