<template>
    <div>
        page2
        <button @click="handleToPage1">to page1</button>
        <div>
            <button @click="handleConfirm">confirm</button>
        </div>
        <div>
            <input type="file" @change="handleChange">
        </div>
    </div>
</template>
<script>
import $ from "jquery";
export default {
    methods: {
        handleChange(e) {
            console.log(e)
        },
        handleToPage1() {
            // this.$router.push({path: "/page1"})
            const aaa = this.$router.resolve({path: "/page1"})
            console.log(aaa)
            window.open(aaa.href,"_blank")
        },
        handleConfirm() {
            this.$confirm().then(res => {
                console.log(res)
                console.log("res11")
            }).catch(err => {
                console.log(err)
                console.log("err22")
            })
            // console.log(this.$confirm())
        }
    }
}
</script>
<style scoped>

</style>