<template>
    <div v-if="isShow">
        <div>{{msg}}</div>
        <div>
            <button @click="fun1">btn</button>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            msg: "tipssss",
            isShow: false,
        }
    },
    methods: {
        fun1() {
            console.log("fun1")
        }
    }
}
</script>