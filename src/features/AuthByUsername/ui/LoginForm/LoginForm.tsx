import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from
  'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

function LoginForm(props: LoginFormProps) {
  const {
    className,
  } = props;
  const dispatch = useDispatch();

  const loginForm = useSelector(getLoginState);

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handleChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handleLoginClick = useCallback(() => {
    const { username, password } = loginForm;
    dispatch(loginByUsername({ username, password }));
  }, [loginForm, dispatch]);

  const { t } = useTranslation();

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t('Authorization')} />
      {
        loginForm.error && (
          <Text text={t('Incorrect login or password')} theme={TextTheme.ERROR} />
        )
      }
      <Input
        type="text"
        className={styles.input}
        placeholder={t('Enter name')}
        autoFocus
        onChange={handleChangeUsername}
        value={loginForm.username}
      />
      <Input
        type="text"
        className={styles.input}
        placeholder={t('Enter password')}
        onChange={handleChangePassword}
        value={loginForm.password}
      />
      <Button
        className={styles.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={handleLoginClick}
        disabled={loginForm.isLoading}
      >
        {t('SignIn')}
      </Button>
    </div>
  );
}

export default memo(LoginForm);
