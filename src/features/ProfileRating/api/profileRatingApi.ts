import { RatingType } from '@/entities/RatingCard';
import { rtkApi } from '@/shared/api/rtk';

import { GetProfileRatingArg, RateProfileArg } from '../model/types/types';

const profileRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileRating: build.query<RatingType[], GetProfileRatingArg>({
      query: ({ userId, profileId }) => ({
        url: '/profile-ratings',
        params: { userId, profileId },
      }),
    }),
    rateProfile: build.mutation<void, RateProfileArg>({
      query: (arg) => ({
        url: '/profile-ratings',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
});

export const { useGetProfileRatingQuery, useRateProfileMutation } = profileRatingApi;
