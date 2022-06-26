import { ComponentMeta, ComponentStory } from '@storybook/react';
import FlatButton, { IFlatButton } from './FlatButton';
import { mockFlatButtonProps } from './FlatButton.mocks';

export default {
  title: 'buttons/FlatButton',
  component: FlatButton,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
      },
      options: ['default', 'primary', 'secondary', 'danger', 'success'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['default', 'sm', 'lg'],
    },
  },
} as ComponentMeta<typeof FlatButton>;

const Template: ComponentStory<typeof FlatButton> = (args) => {
  return <FlatButton {...args} />;
};

export const Default = Template.bind({});
export const Primary = Template.bind({});

Default.args = {
  ...mockFlatButtonProps.args,
  variant: 'default',
} as IFlatButton;

Primary.args = {
  ...mockFlatButtonProps.args,
  variant: 'primary',
} as IFlatButton;
