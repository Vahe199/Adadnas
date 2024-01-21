import $axios from 'libs/axios';

export const notificationApi = {
  async fetchNotificationList(id = '80', page = '1') {
    return await $axios.get(`notifications?user_id=${id}&page=${page}`);
  },
};
