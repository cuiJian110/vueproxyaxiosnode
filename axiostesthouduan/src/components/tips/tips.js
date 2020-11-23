import tips from "./tips.vue";
import Vue from "vue";
// 第一种方法
// 创建构造器
// const Tipinstance = Vue.extend(tips);
// 创建实例，并挂载到一个元素上。
// new Tipinstance().$mount("#app");
// 第二种方法
// 2. 调用
/*第一种调用方式 main.js
import tips from "@/components/tips/tips.js";
Vue.prototype.$mt = tips;
const Tipinstance = Vue.extend(tips);
function MyTips() {
    this.intance = new Tipinstance({
        el: document.createElement("div")
    })
    document.body.appendChild(this.intance.$el)
}
MyTips.prototype.showTips = function() {
    this.intance.isShow = true;
}
MyTips.prototype.hideTips = function() {
    this.intance.isShow = false;
}
export default new MyTips();
*/
/*第二种*/

// console.log("intance",intance)
export default {
    install(Vue) {
        // Vue.mixin({
        //     methods: {
        //         aaa(el) {
        //             console.log(el)
        //             const instance = Vue.extend(tips);
        //             const vm = new instance();
        //             vm.$mount()
        //             console.log(vm)
        //         }
        //     }
        // })
        const Tipinstance = Vue.extend(tips);
        const intance = new Tipinstance({
            // el: document.createElement("div")
            // el: document.body
        })
        // 在里面写 el: document.createElement("p") 跟在外面写intance.$mount()一个效果
        // intance.$mount()
        // document.body.appendChild(intance.$el);
        console.log(intance)
        intance.$mount();
        // console.log(intance.vm)
        document.body.appendChild(intance.$el);
        this.untils(Vue,intance)
    },
    untils(Vue,instance) {
        Vue.prototype.$mtShow = function(msg) {
            instance.isShow = true;
            instance.msg = msg;
        }
        Vue.prototype.$mtHide = function() {
            instance.isShow = false;
        }
    }
}

