import styles from "./Navbar.module.scss";

import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.Links}>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={"/"}
          className={styles.MainLink}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>
          О нас
        </AppLink>
      </div>
    </div>
  );
}
