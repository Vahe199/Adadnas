import { useQuery } from '@tanstack/react-query';
import { notificationApi } from 'services';

export const useGetNotification = params => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['notification-list', params],
    queryFn: () => notificationApi.fetchNotificationList(params),
    select: ({ data }) => data,
  });
  return { notificationList: data?.data, meta: data?.meta, isLoading, refetch };
};
