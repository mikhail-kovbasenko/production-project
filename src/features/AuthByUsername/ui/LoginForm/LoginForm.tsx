import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { useAppDispatch } from 'shared/lib/hooks';
import { loginByUsername } from
  '../../../AuthByUsername/model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

function LoginForm(props: LoginFormProps) {
  const {
    className,
    onSuccess,
  } = props;
  const dispatch = useAppDispatch();

  // const loginForm = useSelector(getLoginState);

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handleChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handleLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [username, password, dispatch, onSuccess]);

  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterOnMount>
      <div className={classNames(styles.LoginForm, {}, [className])}>
        <Text title={t('Authorization')} />
        {
          error && (
            <Text text={t('Incorrect login or password')} theme={TextTheme.ERROR} />
          )
        }
        <Input
          type="text"
          className={styles.input}
          placeholder={t('Enter name')}
          autoFocus
          onChange={handleChangeUsername}
          value={username}
        />
        <Input
          type="text"
          className={styles.input}
          placeholder={t('Enter password')}
          onChange={handleChangePassword}
          value={password}
        />
        <Button
          className={styles.loginBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={handleLoginClick}
          disabled={isLoading}
        >
          {t('SignIn')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
}

export default memo(LoginForm);
