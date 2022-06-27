import { BtnSize, BtnType, BtnVariant, TextColor } from '../ButtonPropsType';

export interface IIconButtonProps {
  type?: BtnType;
  variant?: BtnVariant;
  size?: BtnSize;
  color?: TextColor;
  children?: any;
  onClick?: () => void;
}

const attributes = {
  variants: {
    primary: 'bg-pink-400 hover:bg-pink-600 text-white',
    secondary:
      'bg-white hover:bg-pink-200 text-pink-400 border border-pink-400',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  },
  sizes: {
    sm: 'w-6 h-6 rounded-md',
    md: 'w-8 h-8 rounded-md',
    lg: 'w-12 h-12 rounded-lg',
  },
  iconsSize: {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  },
};

const IconButton: React.FC<IIconButtonProps> = ({
  type = 'button',
  variant = 'primary',
  size = 'md',
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
        'inline-flex items-center justify-center box-border',
      ].join(' ')}
      {...props}
    >
      <span className={[attributes.iconsSize[size], 'storke-1'].join(' ')}>
        {children}
      </span>
    </button>
  );
};

export default IconButton;
