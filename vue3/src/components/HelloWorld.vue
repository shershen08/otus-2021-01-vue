<template>
    <h1>{{ msg }}</h1>
    <input v-model="name"/>

    
    <!-- <Portal target=".widget">
      <div>
        23456sdfghjk
      </div>
    </Portal> -->

    <button @click="doStuff">doStuff</button>
    <button @click="getData">getData</button>

    <button @click="changeName('Ivan')">changeName</button>
    <hr>
      "{{name}}" + 
      "{{lastname}}" = 
      <br>
      {{fullName}}
      <br><br><br><br>
      <!-- length:{{newFullNameLength}} -->
      <ToDosDisplay/>
</template>



<script>
// Vue3 doesn't support
//  - mixin
//  - filters
import ToDosDisplay from './ToDosDisplay.vue';

import {ref, computed, watch} from 'vue';
import nameHook from '../hooks/name-hook';
import useFetcher from '../hooks/fetcher';
import {users} from '../services/user';
import { useTitle } from '@vueuse/core'
import { RouterLink, useLink } from 'vue-router'

export default {
  name: "HelloWorld",
  components: {
    ToDosDisplay
  },
  props: {
    msg: String,
  },
  setup(props){
    console.log(props.msg);

    const { data, loading, error, getData } = useFetcher(users);
    const {name, lastname, fullName, changeName} = nameHook(props.msg);

    // const title = useTitle()
    // //document.title
    // console.log(title.value)

    // setTimeout(() => {
    //   title.value = 'Do you like Vue3'
    // }, 1500)


  
    //const { route, href, isActive, isExactActive, navigate } = useLink(props)


    // RO -> .value
    return {
      name,
      lastname,
      fullName,
      changeName,
      //////
      data,
      loading,
      error,
      getData
    }
  },
  methods: {
    doStuff(){
      console.log('')
      //
      this.$router.push('/about/Vue')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
