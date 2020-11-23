const obj = {
    store: {
        count: 8,
        mname: "cuijian"
    }
}
export default {
    install(Vue) {
        // Vue.prototype.$mStore = vm;
        // this.$mStore.commit('increment', 10)
        Vue.mixin({
            beforeCreate() {
                Vue.util.defineReactive(this,"$mStore",obj.store)
            }
        })
    }
}