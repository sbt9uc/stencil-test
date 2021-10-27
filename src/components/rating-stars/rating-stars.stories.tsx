export default {
    title: 'Components/rating-stars',
    component: 'rating-stars',
  };
  
  const defaultArgs = {
    maxValue: 7,
    value:5
    };
  
  const Template = ({maxValue, value}) => `<rating-stars max-value="${maxValue}" value="${value}"></rating-stars>`;
  
  export const RatingStars = Template.bind({});
  RatingStars.args = {...defaultArgs};
  
  