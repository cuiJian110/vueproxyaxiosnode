import Vue from "vue";
const vm = new Vue({
    data: {
        count: 8,
        mname: "cuijian"
    },
})
export default {
    install(Vue) {
        Vue.prototype.$mStore = vm;
    }
}