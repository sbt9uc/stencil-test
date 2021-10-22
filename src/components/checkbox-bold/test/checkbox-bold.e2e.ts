import { newE2EPage } from '@stencil/core/testing';

describe('checkbox-bold', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<checkbox-bold></checkbox-bold>');

    const element = await page.find('checkbox-bold');
    expect(element).toHaveClass('hydrated');
  });
});
