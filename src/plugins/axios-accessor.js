import { initializeAxios } from '~/utils/api';

const accessor = ({ app, $axios, redirect }) => {
  initializeAxios($axios);

  $axios.onRequest((config) => {
    if (app && app.i18n && app.i18n.locale) {
      config.headers.common.lang = app.i18n.locale;
    }
  });

  $axios.onError((error) => {
    if (error.response.status === 500) {
      redirect('/sorry');
    }
  });

};

export default accessor;
