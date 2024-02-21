import { useQuery } from '@tanstack/react-query';
import { notificationApi } from 'services';

export const useGetUnReadeNotification = params => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['notification-list', params],
    queryFn: () => notificationApi.fetchNotificationList(params),
    select: ({ data }) => data,
  });
  return {
    unReadeNotification: data?.data,
    meta: data?.meta,
    isLoading,
    refetch,
  };
};
