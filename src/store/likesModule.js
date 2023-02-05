export const likesModule = {
  state: () => ({
    likedCocktails: [],
  }),
  mutations: {
    addLike(state, item) {
      if (!state.likedCocktails.includes(item)) {
        state.likedCocktails.push(item);
      }
    },
    removeLike(state, item) {
      state.likedCocktails = state.likedCocktails.filter(id => id !== item);
    },
  },
  namespaced: true,
};
