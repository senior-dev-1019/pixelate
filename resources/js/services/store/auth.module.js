import Cookies from 'js-cookie';

export const LOGIN = 'login';
export const LOGOUT = 'logout';
export const SET_AUTH = 'setAuth';
export const UPDATE_AUTH = 'updateAUth';
export const PURGE_AUTH = 'removeAuth';

const userc = localStorage.getItem('user');

const state = {
  user:
    'undefined' === typeof userc
      ? null
      : JSON.parse(localStorage.getItem('user')),
  token: Cookies.get('token')
};

const getters = {
  currentUser: state => state.user,
  token: state => state.token,
  check: state => state.user !== null
};

const actions = {
  [LOGIN](context, user) {
    context.commit(SET_AUTH, user);
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [UPDATE_AUTH](context, user) {
    context.commit(UPDATE_AUTH, user);
  }
};

const mutations = {
  [SET_AUTH](state, data) {
    state.user = data.user;
    localStorage.setItem('user', JSON.stringify(data.user));
    Cookies.set('token', data.access_token, { expires: data.expires_in });
  },
  [PURGE_AUTH](state) {
    state.user = null;
    state.token = null;
    localStorage.removeItem('user');
    Cookies.remove('user');
  },
  [UPDATE_AUTH](state, data) {
    state.user = data;
    localStorage.setItem('user', JSON.stringify(data));
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
