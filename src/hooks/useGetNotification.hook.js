import { useQuery } from '@tanstack/react-query';
import { notificationApi } from 'services';

export const useGetNotification = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['notification-list'],
    queryFn: () => notificationApi.fetchNotificationList('80', '1'),
    select: ({ data }) => data,
  });
  return { notificationList: data?.data, meta: data?.meta, isLoading, refetch };
};
