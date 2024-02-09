import $axios from 'libs/axios';

export const authApi = {
  async logIn(data) {
    return await $axios.post('login-api', data);
  },
};
