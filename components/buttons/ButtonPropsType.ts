type LooseAutoComplete<T extends string> = T | Omit<string, T>;

export type BtnType = 'button' | 'submit';
export type BtnVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success';
export type BtnSize = 'default' | 'sm' | 'lg';
export type TextColor = LooseAutoComplete<'text-white' | 'text-black'>;
