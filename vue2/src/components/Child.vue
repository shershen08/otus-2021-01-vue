<template>
  <div>
    some child component
    {{ list }}
    <br />
    {{ staticList }}

    <br />
    <button @click="change">change</button>
  </div>
</template>

<script>
export default {
  name: "Child",

  //props: ['list', 'staticList']

  // props: {
  //     list: String,
  //     staticList: String
  // }

  props: {
    list: {
      type: Array,
      required: true,
      default: [1, 2, 3],
    },
    staticList: {
      type: String,
      required: true,
      default: ".....",
    },
  },
  data: () => ({}),
  //v3
  //emits: ['changeUpdate'],
  methods: {
    change() {
      //this.list = [];
      this.$emit("changeUpdate", this.list);
      this.myMethod()
    },
  },
};
</script>

<style scoped>
div {
  padding: 1em;
  border: 1px solid #333;
}
</style>
