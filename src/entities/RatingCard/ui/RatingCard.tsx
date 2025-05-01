import { useTranslation } from 'react-i18next';
import { Fragment, useCallback, useState } from 'react';
import styles from './RatingCard.module.scss';
import { classNames } from '@/shared/lib/classNames';
import { Card } from '@/shared/ui/Card';
import { HorizontalStack, VerticalStack } from '@/shared/ui/Stack';
import { Text } from '../../../shared/ui/Text';
import { StarRating } from '../../../shared/ui/StarRating';
import { Modal } from '../../../shared/ui/Modal';
import { Input } from '../../../shared/ui/Input';
import { Button, ButtonTheme } from '../../../shared/ui/Button';
import { useDevice } from '@/shared/lib/hooks';
import { Drawer } from '../../../shared/ui/Drawer';
import { ButtonSize } from '../../../shared/ui/Button/ui/Button';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedBackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedBack?: string) => void;
}

function RatingCard(props: RatingCardProps) {
  const {
    className,
    title,
    feedBackTitle,
    hasFeedback,
    onCancel,
    onAccept,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');

  const isMobile = useDevice();

  const { t } = useTranslation();

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);

    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept]);

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [onAccept, starsCount, feedback]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <Fragment>
      <Text title={feedBackTitle} />
      <Input placeholder={t('your review')} value={feedback} onChange={setFeedback} />
    </Fragment>
  );

  return (
    <Card className={classNames(styles.RatingCard, {}, [className])}>
      <VerticalStack align="center" gap="8">
        <Text title={title} />
        <StarRating size={40} onSelect={onSelectStars} />
      </VerticalStack>
      {
        isMobile ? (
          <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
            <VerticalStack gap="32" fullWidth>
              {modalContent}
              <HorizontalStack fullWidth gap="16" justify="end">
                <Button onClick={acceptHandle} fullWidth size={ButtonSize.L}>
                  {t('send')}
                </Button>
              </HorizontalStack>
            </VerticalStack>
          </Drawer>
        )
          : (
            <Modal isOpen={isModalOpen} lazy>
              <VerticalStack gap="32" fullWidth>
                {modalContent}
                <HorizontalStack fullWidth gap="16" justify="end">
                  <Button theme={ButtonTheme.OUTLINE_RED} onClick={cancelHandle}>
                    {t('close')}
                  </Button>
                  <Button onClick={acceptHandle}>
                    {t('send')}
                  </Button>
                </HorizontalStack>
              </VerticalStack>
            </Modal>
          )
      }
    </Card>
  );
}

export default RatingCard;
