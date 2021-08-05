import Vue from "vue";
import App from "./App.vue";
import MyPlugin from './plugin';

Vue.config.productionTip = false;

Vue.component("app-toolip", {
  template: '<div :title="text">i</div>',
  data: () => ({
    show: false,
  }),
  props: ["text"],
});

Vue.use(MyPlugin)


Vue.directive('textHighlight', {
  inserted: function(el, binding){
    console.log(binding.modifiers);
    //el.style.backgroundColor = binding.value;
    setInterval(() => {
      el.style.backgroundColor = el.style.backgroundColor === 'rgb(255, 255, 255)' ? binding.value : 'rgb(255, 255, 255)';
    }, 300)
  }
})

new Vue({
  render: (h) => h(App),
}).$mount("#app");
