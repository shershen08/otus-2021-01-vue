<template>
  <div class="about">
    <h1>This is an about {{ name }} page</h1>
    {{ globalStore.state.count }}
    <button @click="globalStore.increment">Increment</button>
  </div>
</template>
<script>
export default {
  inject: ["globalStore"],
  setup(props) {
    console.log(props.name);
  },
  props: {
    name: {
      type: String,
      default: "...",
    },
  },
  beforeRouteEnter() {
    //ajax loading
  },
  beforeRouteUpdate(to, from) {
    //
    // /user/23 -> /user/34
    // ajax loading
  },
  beforeRouteLeave(to, from) {},
};
</script>
