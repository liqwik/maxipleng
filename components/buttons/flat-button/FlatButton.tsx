import { LoadingIcon } from '@/components/icons';
import { ReactNode } from 'react';
import { BtnSize, BtnType, BtnVariant, TextColor } from '../ButtonPropsType';

export interface IFlatButtonProps {
  type: BtnType;
  variant: BtnVariant;
  size: BtnSize;
  color?: TextColor;
  loading?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const attributes = {
  variants: {
    primary: 'bg-pink-500 hover:bg-pink-700 text-white',
    secondary:
      'bg-white hover:bg-pink-200 text-pink-500 border border-pink-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  },
  sizes: {
    sm: 'py-1 px-4 text-sm',
    md: 'py-1 px-4 md:py-2 md:px-8',
    lg: 'py-3 px-12',
  },
};

const FlatButton: React.FC<IFlatButtonProps> = ({
  type = 'button',
  variant = 'primary',
  size = 'md',
  loading = false,
  color,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={[
        attributes.variants[variant],
        attributes.sizes[size],
        color,
        'rounded flex justify-center items-center',
      ].join(' ')}
      disabled={loading}
      {...props}
    >
      {loading && <LoadingIcon />}
      {children}
    </button>
  );
};

export default FlatButton;
