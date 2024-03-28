import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.scss";

import { classNames } from "shared/lib/classNames";
import { Button, ThemeButton } from "shared/ui/Button";

interface LanguageSwitcherProps {
  className?: string;
}

function LanguageSwitcher(props: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggle = async () =>
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");

  return (
    <Button
      onClick={toggle}
      theme={ThemeButton.CLEAR}
      className={classNames(styles.LangSwitcher, {}, [props.className])}
    >
      {t("language")}
    </Button>
  );
}

export default LanguageSwitcher;
