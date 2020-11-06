import upload from "./myupload.vue";
const uploadObj = {
    install(Vue) {
        Vue.component("my-upload",upload);
    }
}
export default uploadObj;