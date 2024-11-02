import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

function LoginForm(props: LoginFormProps) {
  const {
    className,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Input type="text" className={styles.input} placeholder={t('Enter name')} autoFocus />
      <Input type="text" className={styles.input} placeholder={t('Enter password')} />
      <Button className={styles.loginBtn}>{t('SignIn')}</Button>
    </div>
  );
}

export default LoginForm;
