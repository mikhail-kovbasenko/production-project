export interface GetProfileRatingArg {
  userId: string;
  profileId: string;
}

export interface RateProfileArg extends GetProfileRatingArg {
  rate: number;
  feedback?: string;
}
