import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingCard } from '@/entities/RatingCard';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

import { useGetProfileRatingQuery, useRateProfileMutation } from '../api/profileRatingApi';

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

function ProfileRating(props: ProfileRatingProps) {
  const {
    className,
    profileId,
  } = props;

  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetProfileRatingQuery({
    userId: userData?.id ?? '',
    profileId,
  });

  const [rateProfileMutation] = useRateProfileMutation();

  const { t } = useTranslation('profile');

  const handleRateProfile = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateProfileMutation({
        userId: userData?.id || '',
        profileId,
        rate: starsCount,
        feedback,
      });
    } catch (error) {
      console.log(error);
    }
  }, [userData, profileId, rateProfileMutation]);

  const onCacnel = useCallback((starsCount: number) => {
    handleRateProfile(starsCount);
  }, [handleRateProfile]);
  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateProfile(starsCount, feedback);
  }, [handleRateProfile]);

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCacnel}
      rate={rating?.rate}
      className={className}
      title={t('review profile')}
      feedBackTitle={t('feedback profile')}
      hasFeedback
    />
  );
}

export default ProfileRating;
