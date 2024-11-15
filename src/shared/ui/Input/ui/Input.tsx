import { classNames, Mods } from 'shared/lib/classNames';
import { InputHTMLAttributes, memo } from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readonly?: boolean
}

function Input(props: InputProps) {
  const {
    className,
    value,
    onChange,
    type = 'text',
    readonly,
    ...otherProps
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const mods: Mods = {
    [styles.readonly]: readonly,
  };

  return (
    <div className={classNames(styles.Input, mods, [className])}>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
}

export default memo(Input);
