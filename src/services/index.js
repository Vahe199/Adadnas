import $axios from 'libs/axios';

export const notificationApi = {
  async fetchNotificationList(params) {
    return await $axios.get('notifications', { params });
  },
};
