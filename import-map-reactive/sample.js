import { reactive, watch } from 'vue'
import _ from 'lodash'
import { computed } from '@vue/reactivity'

//TODO, add more
//https://v3.vuejs.org/guide/reactivity-fundamentals.html#ref-unwrapping

console.log(_.uniq([2, 1, 2]))

// reactive state
const state = reactive({
  count: 0
})

const someoneStopMe = setInterval(() => {
  state.count++;
}, 500)

watch(state, (val) => {
  console.log(val.count)
})

const combined = computed(() => state.count + 42)

watch(combined, (val) => {
  console.log(val)
})

window.stop = () => {
  clearInterval(someoneStopMe);
}
