import store from '@/services/store';

export default (to, from, next) => {
  if (store.getters.check) {
    next({ name: 'welcome' });
  } else {
    next();
  }
};
