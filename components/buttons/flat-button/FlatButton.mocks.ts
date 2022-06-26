import { IFlatButton } from './FlatButton';

const args: IFlatButton = {
  type: 'button',
  variant: 'primary',
  size: 'default',
  loading: false,
  children: 'Hello World',
  onClick: () => {},
};

export const mockFlatButtonProps = {
  args,
};
