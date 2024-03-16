import { authApi } from 'services/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useAuth = (onSuccess = () => {}, onError = () => {}) => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: authApi.logIn,
    onSuccess,
    onError,
    onSettled: async () => {
      await client.invalidateQueries(['log-in']);
    },
  });
};
