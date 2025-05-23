import {
  Fragment, memo, ReactNode,
} from 'react';

import { Listbox as HListBox } from '@headlessui/react';

import styles from './ListBox.module.scss';
import { classNames } from '../../../../lib/classNames';
import { DropdownDirection } from '../../../../types/ui';
import { Button } from '../../../Button';
import { HorizontalStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupStyles from '../../styles/popup.module.scss';

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
        className={classNames(styles.ListBox, {}, [className, popupStyles.popup])}
      >
        <HListBox.Button className={popupStyles.trigger} as="div">
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
                    [popupStyles.active]: active,
                    [popupStyles.disabled]: item.disabled,
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
