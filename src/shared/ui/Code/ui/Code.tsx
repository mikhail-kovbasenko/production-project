import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import CopyIcon from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/lib/classNames';

import styles from './Code.module.scss';
import { Button, ButtonTheme } from '../../Button';
import { Icon } from '../../Icon';

interface CodeProps {
  className?: string;
  text: string;
}

function Code(props: CodeProps) {
  const {
    className,
    text,
  } = props;

  const { t } = useTranslation();

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(styles.Code, {}, [className])}>
      <Button onClick={onCopy} className={styles.copyBtn} theme={ButtonTheme.CLEAR}>
        <Icon Svg={CopyIcon} clearFill />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
}

export default memo(Code);
