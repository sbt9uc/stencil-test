import {boolean} from '@storybook/addon-knobs';

export default {
    title: 'Checkbox Bold',
  };

export const DefaultChecked2 = () => `
  <checkbox-bold id="barr" defaultChecked={true}>TEST TEXT</checkbox-bold>
`;

export const DefaultChecked3 = () => `
  <checkbox-bold id="sara">TEST TEXT</checkbox-bold>
`;

export const MyComponent = () => {
  // const firstName = text('First name', 'Stencil');
  const defaultBool = boolean('test', true);
  return `<checkbox-bold id="tayloer" defaultChecked="${defaultBool}" >TEST SARA TEXT</checkbox-bold> `;
};


