import { KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';

import { HorizontalStack, VerticalStack } from '@/shared/ui/Stack';
import { CountrySelect } from '../../../Country';
import { CurrencySelect, CurrencyType } from '../../../Currency';
import { Profile } from '../../model/types/types';
import styles from './ProfileCard.module.scss';
import { Country } from '../../../Country/model/types/types';

interface ProfileCardProps {
    className?: string;
    data?: Profile,
    error?: string,
    isLoading?: boolean,
    readonly?: boolean,
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onKeyDownAge?: (e: KeyboardEvent<HTMLInputElement>) => void;
    onChangeCity?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeCurrency?: (currency: CurrencyType) => void;
    onChangeCountry?: (country: Country) => void;
}

function ProfileCard(props: ProfileCardProps) {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onKeyDownAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HorizontalStack className={classNames(styles.ProfileCard, {}, [className, styles.loading])} justify="center" fullWidth>
        <Loader />
      </HorizontalStack>
    );
  }

  if (error) {
    return (
      <HorizontalStack className={classNames(styles.ProfileCard, {}, [className, styles.error])} justify="center" fullWidth>
        <Text
          theme={TextTheme.ERROR}
          title={t('profile error')}
          text={t('try refersh page')}
          align={TextAlign.CENTER}
        />
      </HorizontalStack>
    );
  }

  const mods: Mods = {
    [styles.editing]: !readonly,
  };

  return (
    <VerticalStack className={classNames(styles.ProfileCard, mods, [className])} gap="16" fullWidth>
      { data?.avatar && (
        <HorizontalStack justify="center" fullWidth className={styles.avatarWrapper}>
          <Avatar src={data?.avatar} alt="" />
        </HorizontalStack>
      ) }
      <Input
        value={data?.first}
        placeholder={t('your firstname')}
        className={styles.input}
        onChange={onChangeFirstname}
        readonly={readonly}
        disabled={readonly}
        data-testid="ProfileCard.FirstName"
      />
      <Input
        value={data?.lastname}
        placeholder={t('your lastname')}
        className={styles.input}
        onChange={onChangeLastname}
        readonly={readonly}
        disabled={readonly}
        data-testid="ProfileCard.LastName"
      />
      <Input
        value={data?.age}
        placeholder={t('your age')}
        className={styles.input}
        onChange={onChangeAge}
        onKeyDown={onKeyDownAge}
        readonly={readonly}
        disabled={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t('your city')}
        className={styles.input}
        onChange={onChangeCity}
        readonly={readonly}
        disabled={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('your username')}
        className={styles.input}
        onChange={onChangeUsername}
        readonly={readonly}
        disabled={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('your avatar')}
        className={styles.input}
        onChange={onChangeAvatar}
        readonly={readonly}
        disabled={readonly}
      />
      <CurrencySelect
        value={data?.currency}
        className={styles.input}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        value={data?.country}
        className={styles.input}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VerticalStack>
  );
}

export default ProfileCard;
