import { newE2EPage } from '@stencil/core/testing';

describe('rating-stars', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rating-stars></rating-stars>');

    const element = await page.find('rating-stars');
    expect(element).toHaveClass('hydrated');
  });
});
