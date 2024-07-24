import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';

interface BugButtonProps {
    className?: string;
}

function BugButton(props: BugButtonProps) {
  const [error, setError] = useState(false);

  const { t } = useTranslation();

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return (
    <Button
      onClick={onThrow}
      className={classNames(null, {}, [props.className])}
    >
      {t('Throw Error')}
    </Button>
  );
}

export default BugButton;
