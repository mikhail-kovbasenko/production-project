import {
  ChangeEvent,
  useCallback, useMemo,
} from 'react';

import styles from './Select.module.scss';
import { classNames, Mods } from '../../../lib/classNames';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

function Select<T extends string>(props: SelectProps<T>) {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly,
  } = props;

  const handleSelectChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  }, [onChange]);

  const optionList = useMemo(() => options?.map((opt) => (
    <option value={opt.value} className={styles.option} key={opt.value}>
      {opt.content}
    </option>
  )), [options]);

  const mods: Mods = {};

  return (
    <div className={classNames(styles.wrapper, mods, [className])}>
      { label && <span className={styles.label}>{label}</span> }
      <select
        disabled={readonly}
        className={styles.Select}
        value={value}
        onChange={handleSelectChange}
      >
        {optionList}
      </select>
    </div>
  );
}

export default Select;
