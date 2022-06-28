export interface IBaseTemplateProps {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplateProps> = ({ sampleTextProp }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      {sampleTextProp}
    </div>
  );
};

export default BaseTemplate;
