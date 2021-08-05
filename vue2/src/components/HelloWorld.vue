<template>
  <div class="hello">
    <app-toolip text="Help text here" />

    <Child :list="list" staticList="search" @changeUpdate="onChildUpdate" />

    {{ userReadableTime }}

    <br /><br /><br />
    <template v-if="false">
      <h1>{{ msg }}</h1>
      <p>text</p>
    </template>

    <section v-show="false">
      <h1>{{ msg }}</h1>
      <p>text</p>
    </section>

    <!-- <div class="form-element" :class="">
    <input v-model.trim="search"/>
</div> -->

    <button v-show="searchLengthLongEnough">search</button>

    {{ searchReverse }}

    <br />
    <br />
    <li v-for="(item, index) in filterBySearch(list)" :key="`list1-${index}`">
      {{ index + 1 }} {{ item.msg }}
    </li>

    <!-- <li v-for="(item, index) in [1,2,3,4,5]" :key="index">
     {{item}}
    </li> -->

    <button @click="changedArrayState">call changedArrayState</button>
    <button @click="kickElementFromEnd">call kickElementFromEnd</button>

    <br /><br /><br /><br />
    <button @mouseenter="changedState">call changedState</button>

    <p :class="classObject" v-text-highlight.blinking="'red'">
      For a guide and recipes on how to configure / customize this project,<br />
    </p>
  </div>
</template>

<script>
//v2 Object.defineProperty
//v3 Proxes
// !!!! 2 version !!!
import Vue from "vue";
import Child from "./Child.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    Child,
  },

  filters: {
    textLength(value) {
      return value.length;
    },
  },
  computed: {
    userReadableTime: function () {
      return this.date.split(" ")[4];
    },
    searchReverse: function () {
      return this.search.split("").reverse().join("");
    },
    // searchLengthLongEnough: function() {
    //    return this.search.length > 3
    // }
    // passwordContainsA: function() {
    // passwordContainsNumers: function() {
    // passwordContainsEnoughLength: function() {
  },

  watch: {
    search: "searchChangeCB",
    "classObject.active": "onClassObjectChange",
    classObject: {
      deep: true,
      handler: "onClassObjectChange",
    },
  },

  //this.state = {}
  data: () => ({
    search: "",
    classObject: {
      active: false,
      changed: true,
    },
    list: [
      {
        msg: "test",
      },
      {
        msg: "configure",
      },
      {
        msg: "classObject",
      },
      {
        msg: "attribute",
      },
    ],
    date: "",
    //userReadableTime: ''
    searchLengthLongEnough: false,
  }),

  mounted() {
    setInterval(() => {
      this.date = Date();
    }, 300);

    this.$watch("", () => {});
  },

  methods: {
    searchChangeCB: function (val, oldVal) {
      this.searchLengthLongEnough = val.length > 3;
    },
    onClassObjectChange(val) {
      console.log(val);
    },
    onChildUpdate(data) {
      console.log(data);
    },
    changedState() {
      this.classObject.active = true;
      this.classObject.used = true;
    },
    filterBySearch(list) {
      if (!this.searchLengthLongEnough) return list;

      return list.filter((el) => el.msg.indexOf(this.search) > -1);
    },
    changedArrayState() {
      //this.list[0] = 'tomorrow it\'s friday'
      // !!!! 2 version !!!
      //this.$set
      Vue.set(this.list, 0, {
        msg: "tomorrow it's friday",
      });
    },
    kickElementFromEnd() {
      // !!!! 2 version !!!
      Vue.delete(this.list, this.list.length - 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.active {
  background: #fc0;
}
.changed {
  font-weight: 700;
}

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
