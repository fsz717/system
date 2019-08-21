<template>
    <el-aside :style="{width:!isCollapse?'300px':'64px'}" >
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu :default-active="this.$route.path"  router :unique-opened="false" :collapse="isCollapse">
                <nav-item :item="item" v-for="(item,ind) in this.routes" :key="item.label"></nav-item>
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>

<script>
    import { mapState } from 'vuex'
    import navItem from '@/components/common/navAside/navItem.vue';
    export default {
        name: "navAside",
        components:{
            navItem
        },
        data(){
            return{
                routes:[
                    {label: "home",path: "/home",children:[],icon:true},
                    {label: "父",path: "/fsz4",
                        icon:true,
                        children:[
                            {label: "fsz1",path: "/fsz/fsz17",
                                children:[
                                    {label: "用户",path: "/fsz/fsz12",children:[]},
                                    {label: "系统",path: "/fsz/fsz22",children:[]},
                                    {label: "管理",path: "/fsz/fsz32",children:[]}
                                ]
                            },
                            {label: "fsz2",path: "/fsz/fsz23",children:[]},
                            {label: "fsz3",path: "/fsz/fsz23",children:[]}
                        ]
                    },
                    {label: "fsz",path: "/fsz",icon:true,
                        children:[
                            {label: "fsz1",path: "/fsz/fsz1",children:[]},
                            {label: "fsz2",path: "/fsz/fsz2",children:[]},
                            {label: "fsz3",path: "/fsz/fsz3",children:[]}
                        ]
                    },
                    {label: "fsz4",path: "/fsz4",children:[],icon:true},
                ]
            }
        },
        computed: {
            ...mapState({
                isCollapse: state => state.settings.isCollapse,
            })
        }
    }
</script>

<style scoped>

</style>

