<template>
    <div>
        page11
        <div>
            <button @click="changeSon('son1')">son1</button>
            <button @click="changeSon('son2')">son2</button>
            <button @click="changeSon('son3')">son3</button>
        </div>
        <div>
            <ccc :currentSon="currentSon"></ccc>
        </div>
    </div>
</template>
<script>
import son1 from "./page11/son1.js";
import son2 from "./page11/son2.js";
import son3 from "./page11/son3.js";
import ccc from "./page11/ccc.js"
export default {
    components: {
        son1,
        son2,
        son3,
        ccc
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