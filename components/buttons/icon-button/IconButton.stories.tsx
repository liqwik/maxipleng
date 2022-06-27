import { HomeIcon } from '@heroicons/react/outline';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import IconButton, { IIconButtonProps } from './IconButton';
import { mockIconButtonProps } from './IconButton.mocks';

export default {
  title: 'buttons/IconButton',
  component: IconButton,
  argTypes: {},
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  return (
    <>
      <IconButton {...args}>
        <HomeIcon className="stroke-1" />
      </IconButton>
      <IconButton {...args} variant="secondary">
        <HomeIcon className="stroke-1" />
      </IconButton>
      <IconButton {...args} variant="danger">
        <HomeIcon className="stroke-1" />
      </IconButton>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  ...mockIconButtonProps.params,
  children: <HomeIcon />,
} as IIconButtonProps;
