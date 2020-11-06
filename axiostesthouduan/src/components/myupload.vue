<template>
    <div style="display: inline-block;">
        <div class="myBtn" @click="handleUpload">上传文件</div>
        <input type="file" id="myFile" hidden @change="handleChange">
    </div>
</template>
<script>
export default {
    methods: {
        handleUpload() {
            document.querySelector("#myFile").value = null;
            document.querySelector("#myFile").click();
        },
        handleChange(e) {
            // console.log(e)
            this.$emit("commitFile",e)
        }
    }
}
</script>
<style scoped>
    .myBtn {
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        background: lightskyblue;
        color: #fff;
        border-radius: 10px;
    }
</style>