export interface IMenuItemProps {
  sampleTextProp: string;
}

const MenuItem: React.FC<IMenuItemProps> = ({ sampleTextProp }) => {
  return (
    <li className="bg-gradient-to-r from-cyan-500 to-blue-500">
      {sampleTextProp}
    </li>
  );
};

export default MenuItem;
