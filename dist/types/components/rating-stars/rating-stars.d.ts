export declare class RatingStars {
  maxValue: number;
  value: number;
  starList: Array<object>;
  internalValue: number;
  setValue(newValue: any): void;
  componentWillLoad(): void;
  createStarList(numberOfStars: number): void;
  render(): any;
}
