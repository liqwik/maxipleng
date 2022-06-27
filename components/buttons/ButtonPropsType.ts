type LooseAutoComplete<T extends string> = T | Omit<string, T>;

export type BtnType = 'button' | 'submit' | 'reset';
export type BtnVariant = 'primary' | 'secondary' | 'danger';
export type BtnSize = 'sm' | 'md' | 'lg';
export type TextColor = LooseAutoComplete<'text-white' | 'text-black'>;
