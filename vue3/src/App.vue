<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="reactRouterLink">React</router-link>

    <button @click="add">add user data</button>

    {{userData}}
  </div>

  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
//Vue3 to replace Vuex
import globalStore from "./hooks/store-replacement.js";

import { useStore } from 'vuex'
import { computed } from 'vue';

export default {
  provide: {
    globalStore,
  },
  setup(){
    const store = useStore();
    return {
      userData: computed(() => store.state.user)
    }
  },
  methods: {
    add(){
      this.$store.commit('setUser', {
        email: 'aaa@gmail.com',
        id:42
      })
    }
  },
  data: () => ({
    reactRouterLink: {
      name: "About",
      params: {
        name: "React",
      },
    },
  }),
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
