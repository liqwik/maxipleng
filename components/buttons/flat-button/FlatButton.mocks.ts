import { IFlatButtonProps } from './FlatButton';

const parameters: IFlatButtonProps = {
  type: 'button',
  variant: 'primary',
  size: 'md',
  loading: false,
  children: 'Flat Button',
  onClick: () => {},
};

export const mockFlatButtonProps = {
  parameters,
};
