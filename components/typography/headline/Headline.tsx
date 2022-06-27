export interface IHeadlineProps {
  label: string;
}

const Headline: React.FC<IHeadlineProps> = ({ label, ...props }) => {
  return (
    <h1 className="text-3xl text-slate-900" {...props}>
      {label}
    </h1>
  );
};

export default Headline;
