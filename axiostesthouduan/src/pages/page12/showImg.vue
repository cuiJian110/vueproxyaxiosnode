<template>
    <div>
        'vue 后缀'
        {{url}}
        <!-- <img src="https://avatars3.githubusercontent.com/u/6128107?v=4&s=200" alt=""> -->
        <img :src="url" alt="">
    </div>
</template>
<script>
export default {
    props: ["url"],
}
</script>