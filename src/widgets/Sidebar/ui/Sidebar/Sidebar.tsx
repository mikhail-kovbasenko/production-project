import { useState } from "react";
import styles from "./Sidebar.module.scss";

import { classNames } from "shared/lib/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher";

interface SidebarProps {
  className?: string;
}

function Sidebar(props: SidebarProps) {
  const [collapsed, setCollpased] = useState(false);
  const onToggle = () => setCollpased((prev) => !prev);
  return (
    <div
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        props.className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default Sidebar;
