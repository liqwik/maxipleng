import { ComponentMeta, ComponentStory } from '@storybook/react';
import Headline from './Headline';
import { mockHeadlineProps } from './Headline.mocks';

export default {
  title: 'typography/Headline',
  component: Headline,
  argTypes: {},
} as ComponentMeta<typeof Headline>;

const Template: ComponentStory<typeof Headline> = (args) => {
  return <Headline {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  ...mockHeadlineProps.parameters,
};
