<template>
<div>
    <section>
        <h1>404</h1>
        <p>抱歉，你访问的页面不存在</p>
        <el-button type="primary" @click="$router.replace('/home')">返回首页</el-button>
    </section>
</div>
</template>

<script>
    export default {
        name: "notFound"
    }
</script>

<style scoped>

</style>
