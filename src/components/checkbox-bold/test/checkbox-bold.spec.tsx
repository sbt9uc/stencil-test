import { newSpecPage } from '@stencil/core/testing';
import { CheckboxBold } from '../checkbox-bold';

describe('checkbox-bold', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckboxBold],
      html: `<checkbox-bold></checkbox-bold>`,
    });
    expect(page.root).toEqualHtml(`
      <checkbox-bold>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkbox-bold>
    `);
  });
});
