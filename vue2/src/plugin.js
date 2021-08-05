const MyPlugin = {};
MyPlugin.install = function (Vue, options) {
    Vue.prototype.myMethod = function (methodOptions) {
        console.log('to be implemented')
      }
}

export default MyPlugin;