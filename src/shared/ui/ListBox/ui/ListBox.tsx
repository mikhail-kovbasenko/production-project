import { Listbox as HListBox } from '@headlessui/react';
import {
  Fragment, memo, ReactNode,
} from 'react';
import { classNames } from '../../../lib/classNames';
import { Button } from '../../Button';
import { HorizontalStack } from '../../Stack';
import styles from './ListBox.module.scss';
import { DropdownDirection } from '../../../types/ui';

interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection
  label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': styles.optionBottomLeft,
  'bottom right': styles.optionBottomRight,
  'top right': styles.optionTopRight,
  'top left': styles.optionTopLeft,
};

function ListBox(props: ListBoxProps) {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom right',
    label,
  } = props;
  return (
    <HorizontalStack gap="4">
      { label && <span>{`${label}>`}</span> }
      <HListBox
        disabled={readonly}
        value={value}
        onChange={onChange}
        as="div"
        className={classNames(styles.ListBox, {}, [className])}
      >
        <HListBox.Button className={styles.triggerBtn}>
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(styles.options, {}, [mapDirectionClass[direction]])}>
          {items?.map((item: ListBoxItem) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {
                ({ active, selected }) => (
                  <li className={classNames(styles.item, {
                    [styles.active]: active,
                    [styles.disabled]: item.disabled,
                  })}
                  >
                    {selected && '!!!'}
                    {item.content}
                  </li>
                )
              }
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HorizontalStack>
  );
}

export default memo(ListBox);
