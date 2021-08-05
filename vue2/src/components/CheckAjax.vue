<template>
  <div class="wrapper">
    <div class="control" :class="{'is-loading': isLoading}">
      <input type="text" v-model="q" class="input" @input="loadData"/>
    </div>
    <div class="list is-hoverable" v-if="loaded">
      <a class="list-item" 
          v-for="(result, index) in results"
          @click="onClick(result)"
          :key="index">{{result}}</a>
    </div>
  </div>
</template>

<script>
// you should import `lodash` as a whole module
import lodash from 'lodash';
import axios from 'axios';
import Vue from 'vue';

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

const loadData = (q) => axios.get(`${ITEMS_API_URL}?q=${q}`);

const onLoadDataDebounced = lodash.debounce(loadData, DEBOUNCE_DELAY);

const Check =  {
  name: 'autocomplete',
  template: `<div class="wrapper">
    <div class="control" :class="{'is-loading': isLoading}">
      <input type="text" v-model="q" class="input" @input="loadData"/>
    </div>
    <div class="list is-hoverable" v-if="loaded">
      <a class="list-item" 
          v-for="(result, index) in results"
          @click="onClick(result)"
          :key="index">{{result}}</a>
    </div>
  </div>`,
  props: ['onSelectItem'],
  methods: {
    onClick(value){
      this.onSelectItem(value);
    },
    async loadData(){
      this.loaded = false;
      this.isLoading = true;
      const resp = await onLoadDataDebounced(this.q);
      const json = await resp.json();
      this.loaded = true;
      this.isLoading = false;
      this.results = json;
    }
  },
  data: () => ({
    isLoading: false,
    loaded:false,
    results: [],
    q: ''
  })
};


new Vue({
  render: (h) => h(Check),
}).$mount("#app");

export default Check;
</script>
