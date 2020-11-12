<template>
    <div>
        page3
        <button @click="handleToPage2">to page2</button>
    </div>
</template>
<script>
import $ from "jquery";
export default {
    methods: {
        handleToPage2() {
            // this.$router.push({path: "/page2"})
            const { href } = this.$router.resolve({
                path: "page2",
                // query: query
            });
            window.open(href, "_blank");
        }
    }
}
</script>
<style scoped>

</style>