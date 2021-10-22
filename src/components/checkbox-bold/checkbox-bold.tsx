import { Component, State, h, Prop, Host, Watch } from '@stencil/core';

@Component({
  tag: 'checkbox-bold',
  styleUrl: 'checkbox-bold.css'
})
export class CheckboxBold {

  /**
   * The unique Id
   */
  @Prop() id: string;
  /**
   * If the box is checked by default
   */
  @Prop() checked?: boolean = false;
  /**
   * If the box box should be disabled
   */
   @Prop() disabled?: boolean;

  /**
   * Whether the checkbox is currently checked
   */
  @State() isChecked: boolean = this.checked;

  @Watch('checked')
    watchHandlerForValue() {
        this.isChecked = this.checked;
    }
    componentWillLoad() {
      this.watchHandlerForValue();
    }


  handleClick(cb) {
    this.isChecked = cb?.target?.checked;
  }

  render() {
    return (
      <Host class="test-div">
        <input type="checkbox" name="" id={this.id} checked={this.checked} disabled={this.disabled} onClick={(e) => this.handleClick(e)}/>
        <div class={this.isChecked? 'checked-bold' : ''}><slot /> {this.id} SAR</div>
      </Host>
    );
  }

}
