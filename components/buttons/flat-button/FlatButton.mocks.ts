import { IFlatButton } from './FlatButton';

const parameters: IFlatButton = {
  type: 'button',
  variant: 'primary',
  size: 'default',
  loading: false,
  children: 'Hello World',
  onClick: () => {},
};

export const mockFlatButtonProps = {
  parameters,
};
