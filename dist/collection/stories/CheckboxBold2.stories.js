export default {
  title: 'Components/checkbox-bold',
  component: 'checkbox-bold',
};
const defaultArgs = {
  id: 'CHECKBOX label',
  checked: true,
  disabled: true,
};
const Template = ({ id, checked, disabled }) => `<checkbox-bold id="${id}" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''} />`;
export const PrimaryButton = Template.bind({});
PrimaryButton.args = Object.assign({}, defaultArgs);
