<template>
    <div>
        page10
        <!-- <button @click="handleToPage2">to page2</button> -->
        <div>
            <!-- <button @click="handleEmit">test emit</button> -->
            {{$mStore.count}}
            <button @click="$mStore.count++">chang count</button>
        </div>
        <div>
            <page101></page101>
        </div>
    </div>
</template>
<script>
import page10_1 from "./page10/page10_1"
export default {
    components: {
        page101: page10_1
    },
    methods: {
        
    }
}
</script>
<style scoped>

</style>