import { createStore } from "vuex";

const myPlugin = (store) => {
  store.subscribe((mutation, state) => {

    localStorage.myApp = JSON.stringify(state);
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
  })
}

export default createStore({
  plugins: [myPlugin],
  state: JSON.parse(localStorage.myApp),
  //simple, sync
  mutations: {
    setUser(state, user){
      state.user = user
    },
    setUserLoading(){},
    clearProducts(){
      state.products = []
    }
  },
  //complex, can have multiple mutiations
  actions: {
    loadUserData(context){
      context.commit('setUserLoading', true)
      axios.get('/api/user').then(data => {
        context.commit('setUser', data);
        context.commit('setUserLoading', false);
      })
    }
  },
});
