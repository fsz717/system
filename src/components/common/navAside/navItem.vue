<template>
    <div>
        <el-submenu :index="item.path" v-if="item.children.length">
                <template slot="title">
                    <i class="el-icon-s-fold" v-if="item.icon"></i>
                    <span slot="title">{{item.label}}</span>
                </template>
                <nav-item :item="it" v-for="(it,ind) in item.children" />
        </el-submenu>
        <el-menu-item v-else :index="item.path">
            <i class="el-icon-s-fold" v-if="item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
    </div>
</template>

<script>
    export default {
        name: "navItem",
        props:{
            isCollapse :{
                type: Boolean,
                default: false
            },
            item:{
                type: Object,
                default: {}
            },
        },
        data(){
            return{
            }
        },
        mounted() {
        }

    }
</script>

<style scoped>

</style>

