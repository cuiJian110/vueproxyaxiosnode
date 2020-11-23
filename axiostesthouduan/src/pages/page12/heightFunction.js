import avator from "./showImg.vue";
export default {
    data() {
        return {
            username: "zhangsan",
            url: ""
        }
    },
    created () {
        this.fetchURL(this.username, url => {
            this.url = url
        })
    },
    methods: {
        fetchURL(name,cb) {
            console.log(name)
            setTimeout(() => {
                cb('https://avatars3.githubusercontent.com/u/6128107?v=4&s=200')
            },2000)
        }
    },
    render(h) {
        return h(avator,{
            props: {
                url: this.url,
            }
        })
    }
}