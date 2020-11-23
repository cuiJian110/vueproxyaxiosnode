<template>
    <div>
        page3
        <button @click="handleToPage2">to page2</button>
        <div>
            <button @click="handleEmit">test emit</button>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
import {vm} from "@/utils/index";
export default {
    methods: {
        handleToPage2() {
            // this.$router.push({path: "/page2"})
            const { href } = this.$router.resolve({
                path: "page2",
                // query: query
            });
            window.open(href, "_blank");
        },
        handleEmit() {
            vm.$emit("test",{name: "zs"})
        }
    }
}
</script>
<style scoped>

</style>