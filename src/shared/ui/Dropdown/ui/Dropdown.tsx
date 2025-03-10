import { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import styles from './Dropdown.module.scss';
import { classNames } from '../../../lib/classNames';
import { DropdownDirection } from '../../../types/ui';
import { AppLink } from '../../AppLink';

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

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': styles.optionBottomLeft,
  'bottom right': styles.optionBottomRight,
  'top right': styles.optionTopRight,
  'top left': styles.optionTopLeft,
};

function Dropdown(props: DropdownProps) {
  const {
    className, trigger, items, direction = 'bottom right',
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames(styles.Dropdown, {}, [className])}>
      <Menu.Button className={styles.menuBtn}>
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
                  [styles.active]: active,
                })}
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
