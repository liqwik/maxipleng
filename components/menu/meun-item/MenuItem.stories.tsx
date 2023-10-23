import { ComponentMeta, ComponentStory } from '@storybook/react';
import MenuItem from './MenuItem';
import { mockMenuItemProps } from './MenuItem.mocks';

export default {
  title: 'menu/MenuItem',
  component: MenuItem,
  argTypes: {},
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockMenuItemProps.params,
};
