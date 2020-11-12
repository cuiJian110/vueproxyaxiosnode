<template>
    <div v-if="isShow">
        <div>queding</div>
        <div>
            <button @click="sure()">sure</button>
            <button @click="cancel()">cancel</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        // sure() {
        //     console.log("sure")
        // }
    }
}
</script>
