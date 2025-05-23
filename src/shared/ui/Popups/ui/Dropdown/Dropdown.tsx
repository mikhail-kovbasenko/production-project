import { Fragment, memo, ReactNode } from 'react';

import { Menu } from '@headlessui/react';

import styles from './Dropdown.module.scss';
import { classNames } from '../../../../lib/classNames';
import { DropdownDirection } from '../../../../types/ui';
import { AppLink } from '../../../AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupStyles from '../../styles/popup.module.scss';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

function Dropdown(props: DropdownProps) {
  const {
    className, trigger, items, direction = 'bottom right',
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu
      as="div"
      className={classNames(styles.Dropdown, {}, [className, popupStyles.popup])}
    >
      <Menu.Button className={popupStyles.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(styles.menuItems, {}, menuClasses)}>
        {
          items.map((item, index) => {
            const content = ({ active }: {active: boolean}) => (
              <button
                type="button"
                disabled={item.disabled}
                onClick={item.onClick}
                className={classNames(styles.menuItem, {
                  [popupStyles.active]: active,
                })}
                // eslint-disable-next-line react/no-array-index-key
                key={`dropdown-key-${index}`}
              >
                {item.content}
              </button>
            );

            if (item.href) {
              return (
                <Menu.Item
                  as={AppLink}
                  disabled={item.disabled}
                  to={item.href}
                  key={item.href}
                >
                  {content}
                </Menu.Item>
              );
            }
            return (
              // eslint-disable-next-line react/no-array-index-key
              <Menu.Item as={Fragment} disabled={item.disabled} key={index}>
                {content}
              </Menu.Item>
            );
          })
        }
      </Menu.Items>
    </Menu>
  );
}

export default memo(Dropdown);
