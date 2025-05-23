import { rtkApi } from '@/shared/api/rtk';

import { Notification } from '../model/types/types';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationApi;
