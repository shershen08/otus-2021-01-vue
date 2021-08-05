<template>
  <h1>todoLength: {{ todoLength.value }}</h1>
</template>

<script>
export default {
  name: "ToDosDisplay",
  inject: ["todoLength"],
};
</script>

<style></style>
