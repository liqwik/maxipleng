import { LoadingIcon } from '@/components/icons';
import { BtnSize, BtnType, BtnVariant, TextColor } from '../ButtonPropsType';

export interface IFlatButton {
  type: BtnType;
  variant: BtnVariant;
  size: BtnSize;
  textColor?: TextColor;
  loading?: boolean;
  children?: any;
  onClick?: () => void;
}

const attributes = {
  variants: {
    default: 'bg-blue-600',
    primary: 'bg-fuchsia-600',
    secondary: 'bg-fuchsia-400',
    danger: 'bg-red-600',
    success: 'bg-green-600',
  },
  sizes: {
    default: 'py-2 px-8',
    sm: 'py-1 px-4',
    lg: 'py-3 px-12',
  },
};

const FlatButton: React.FC<IFlatButton> = ({
  type = 'button',
  variant = 'primary',
  size = 'default',
  textColor = 'text-white',
  loading = false,
  children,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${attributes.variants[variant]} ${attributes.sizes[size]} ${textColor} rounded items-center`}
      disabled={loading}
      onClick={onClick}
    >
      {loading && <LoadingIcon />}
      {children}
    </button>
  );
};

export default FlatButton;
