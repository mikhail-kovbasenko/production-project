import { useState } from 'react';

import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

function Sidebar(props: SidebarProps) {
  const [collapsed, setCollpased] = useState(false);
  const onToggle = () => setCollpased((prev) => !prev);
  return (
    <div
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        // eslint-disable-next-line react/destructuring-assignment
        props.className,
      ])}
    >
      <button type="button" onClick={onToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default Sidebar;
