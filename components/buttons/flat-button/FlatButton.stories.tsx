import { ComponentMeta, ComponentStory } from '@storybook/react';
import FlatButton from './FlatButton';
import { mockFlatButtonProps } from './FlatButton.mocks';

export default {
  title: 'buttons/FlatButton',
  component: FlatButton,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['sm', 'md', 'lg'],
    },
  },
} as ComponentMeta<typeof FlatButton>;

const Template: ComponentStory<typeof FlatButton> = (args) => {
  return <FlatButton {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  ...mockFlatButtonProps.parameters,
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...mockFlatButtonProps.parameters,
  variant: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  ...mockFlatButtonProps.parameters,
  variant: 'danger',
};
