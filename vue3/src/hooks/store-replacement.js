import { reactive, readonly } from "vue";

const state = reactive({
  count: 0,
});

const increment = function () {
  state.count++;
};

//use this in provide
export default { state: readonly(state), increment };
