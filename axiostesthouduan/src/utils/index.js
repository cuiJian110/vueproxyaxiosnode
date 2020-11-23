import Vue from "vue";
const vm = new Vue();
function setItem(key,value) {
    window.localStorage.setItem(key,value)
    console.log(vm)
    vm.$forceUpdate();
}
Vue.prototype.$setItem = setItem;
export {vm}