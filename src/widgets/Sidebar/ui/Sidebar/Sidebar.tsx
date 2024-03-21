import { useState } from "react";
import styles from "./Sidebar.module.scss";

import { classNames } from "shared/lib/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

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
      </div>
    </div>
  );
}

export default Sidebar;
