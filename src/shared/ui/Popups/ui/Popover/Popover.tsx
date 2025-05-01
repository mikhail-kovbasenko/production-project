import { Popover as UiPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import styles from './Popover.module.scss';
import { classNames } from '../../../../lib/classNames';
import { DropdownDirection } from '../../../../types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupStyles from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode
}

function Popover(props: PopoverProps) {
  const {
    className,
    direction = 'bottom right',
    trigger,
    children,
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <UiPopover className={classNames(styles.Popover, {}, [className, popupStyles.popup])}>
      <UiPopover.Button className={popupStyles.trigger} as="div">
        {trigger}
      </UiPopover.Button>

      <UiPopover.Panel className={classNames(styles.panel, {}, menuClasses)}>
        {children}
      </UiPopover.Panel>
    </UiPopover>
  );
}

export default Popover;
