export declare class CheckboxBold {
  /**
   * The unique Id
   */
  id: string;
  /**
   * If the box is checked by default
   */
  checked?: boolean;
  /**
   * If the box box should be disabled
   */
  disabled?: boolean;
  /**
   * Whether the checkbox is currently checked
   */
  isChecked: boolean;
  watchHandlerForValue(): void;
  componentWillLoad(): void;
  handleClick(cb: any): void;
  render(): any;
}
