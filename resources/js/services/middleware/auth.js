import store from '@/services/store';

export default async (to, from, next) => {
  if (!store.getters.check) {
    next({ name: 'login' });
  } else {
    next();
  }
};
