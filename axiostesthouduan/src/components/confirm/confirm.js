import confirm from "./confirm.vue";
export default {
    install(Vue) {
        const Gan = Vue.extend(confirm);
        const instance = new Gan({
            el: document.createElement("div")
        })
        document.body.appendChild(instance.$el)
        console.log(instance);
        Vue.prototype.$confirm = function() {
            console.log(instance);
            instance.isShow = true;
            return new Promise((resolve,reject) => {
                instance.sure = function() {
                    resolve();
                    instance.isShow = false;
                }
                instance.cancel = function() {
                    reject();
                    instance.isShow = false;
                }
            })
        }
    },
    methods: {
        
    }
}