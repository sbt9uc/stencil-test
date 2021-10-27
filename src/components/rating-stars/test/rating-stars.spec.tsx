import { newSpecPage } from '@stencil/core/testing';
import { RatingStars } from '../rating-stars';

describe('rating-stars', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RatingStars],
      html: `<rating-stars></rating-stars>`,
    });
    expect(page.root).toEqualHtml(`
      <rating-stars>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rating-stars>
    `);
  });
});
