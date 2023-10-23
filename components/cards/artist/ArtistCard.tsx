export interface IArtistCardProps {
  sampleTextProp: string;
}

const ArtistCard: React.FC<IArtistCardProps> = ({ sampleTextProp }) => {
  return <div className="bg-white max-w-sm">
    <img />
  </div>;
};

export default ArtistCard;
