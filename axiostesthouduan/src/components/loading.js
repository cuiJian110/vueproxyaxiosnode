import loading from "./loading.vue";
// 第一种 我们可以在这个对象上添加参数，最终Vue只会执行install方法，而其他方法可以作为封装install方法的辅助函数
export default {
    install(Vue) {
        Vue.component("aaa",loading);
        console.log(this)  // {install: ...,utils: ...}
        this.utils(Vue)    // 执行utils函数
        console.log(this.COUNT) // 0
    },
    utils(Vue) {
        console.dir(Vue)  // Vue
        Vue.prototype.$show = function() {
            alert("777")
        }
    },
    COUNT: 0 
}
// 
// 第二种 这种方式我们只能在一个函数中编写插件逻辑，可封装性就不是那么强了
// export default function(Vue) {
//     Vue.component("bbb",loading);
// }