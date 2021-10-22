import configure from '@storybook/html'

const loatStoreis = () => {
    require('../src/stories/CheckboxBold.stories');
}

configure(loatStoreis, module);