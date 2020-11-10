import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

const store = createStore({
  modules: {
    cart: cartModule,
    product: productModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});
