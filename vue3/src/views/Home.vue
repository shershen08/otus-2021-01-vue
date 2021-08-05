<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
    {{todos.list}}
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Vue, { reactive, computed, watchEffect } from 'vue';

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  setup(){
    let todos = reactive({
      list: [1,2,3,4]
    });

    // REACTIVE
    // setInterval(() => {
    //   todos.list = [...todos.list.slice(0, todos.list.length-1)]
    // }, 1500)

    return {
      todos 
    }
  },
  //sample provide
   provide() {
    return {
      todoLength: computed(() => this.todos.list.length)
    }
  }
};
</script>
