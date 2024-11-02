import { classNames } from 'shared/lib/classNames';
import { InputHTMLAttributes, memo } from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

function Input(props: InputProps) {
  const {
    className,
    value,
    onChange,
    type = 'text',
    ...otherProps
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={classNames(styles.Input, {}, [className])}>
      <input type={type} value={value} onChange={handleChange} {...otherProps} />
    </div>
  );
}

export default memo(Input);
