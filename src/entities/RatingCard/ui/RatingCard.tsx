import { Fragment, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { useDevice } from '@/shared/lib/hooks';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { ButtonSize } from '@/shared/ui/Button/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Drawer } from '@/shared/ui/Drawer';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { HorizontalStack, VerticalStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';

import styles from './RatingCard.module.scss';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedBackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedBack?: string) => void;
  rate?: number;
}

function RatingCard(props: RatingCardProps) {
  const {
    className,
    title,
    feedBackTitle,
    hasFeedback,
    onCancel,
    onAccept,
    rate,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState<number>(rate || 0);
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
      <Input
        placeholder={t('your review')}
        value={feedback}
        onChange={setFeedback}
        data-testid="RatingCard.Input"
      />
    </Fragment>
  );

  return (
    <Card
      className={classNames(styles.RatingCard, {}, [className])}
      fullWidth
      data-testid="RatingCard"
    >
      <VerticalStack align="center" gap="8" fullWidth>
        <Text title={starsCount ? t('Thank you for review') : title} />
        <StarRating size={40} onSelect={onSelectStars} selectedStars={starsCount} />
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
                  <Button
                    theme={ButtonTheme.OUTLINE_RED}
                    date-testid="RatingCard.CloseButton"
                    onClick={cancelHandle}
                  >
                    {t('close')}
                  </Button>
                  <Button onClick={acceptHandle} data-testid="RatingCard.SendButton">
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
