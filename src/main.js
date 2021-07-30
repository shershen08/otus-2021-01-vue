import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.component("app-toolip", {
  template: '<div :title="text">i</div>',
  data: () => ({
    show: false,
  }),
  props: ["text"],
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
