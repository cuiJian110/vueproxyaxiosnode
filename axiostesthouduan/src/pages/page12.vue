<template>
    <div>
        page12
        <div>
            <button @click="changeSon('son1')">son1</button>
            <button @click="changeSon('son2')">son2</button>
            <button @click="changeSon('son3')">son3</button>
        </div>
        <div>
            <hei ></hei>
        </div>
    </div>
</template>
<script>
import hei from "./page12/heightFunction"
export default {
    components: {
        hei,
    },
    data() {
        return {
            currentSon: "son1"
        }
    },
    methods: {
        changeSon(cs) {
            this.currentSon = cs
        }
    }
}
</script>
<style scoped>

</style>