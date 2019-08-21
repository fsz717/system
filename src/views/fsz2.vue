<template>
    <div>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
    </div>
</template>

<script>
    export default {
        name: "fsz2",
        mounted() {
            this.$http.get('/users').then(res=>{
                console.log(res.data.user)
            })
        }
    }
</script>

<style scoped>

</style>
