import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArtistCard from './ArtistCard';
import { mockArtistCardProps } from './ArtistCard.mocks';

export default {
  title: 'templates/ArtistCard',
  component: ArtistCard,
  argTypes: {},
} as ComponentMeta<typeof ArtistCard>;

const Template: ComponentStory<typeof ArtistCard> = (args) => (
  <ArtistCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockArtistCardProps.params,
};
