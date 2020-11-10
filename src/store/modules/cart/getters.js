export default {
  products(state) {
    return state.items;
  },
  totalSum(state) {
    return state.total.toFixed(2);
  },
  quantity(state) {
    return state.qty;
  }
};
