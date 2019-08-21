<template>
    <div :class="{'fixed-header':fixedHeader}">
        <header>
            <div class="header-l">
                <svg-icon iconClass="retract" class="icon-retract" @click.native="switchNav"
                          :style="`transform: rotate(${isCollapse ? 0 : 180}deg)`"></svg-icon>
            </div>

            <div class="header-r">
                <theme-picker></theme-picker>
                <el-button @click="fixedHeader=!fixedHeader" type="primary">固定头部</el-button>
            </div>
        </header>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>平台</el-breadcrumb-item>
            <el-breadcrumb-item v-if="$route.meta.parentPath" :to="$route.meta.parentPath">
                {{$route.meta.parentPath.slice(1)}}
            </el-breadcrumb-item>
            <el-breadcrumb-item >{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="text-align:left">
            <el-tag
                    :key="tag.name"
                    v-for="tag in dynamicTags"
                    :closable="dynamicTags.length!=1?true:false"
                    :disable-transitions="false"
                    @click="tagClick(tag)"
                    @close="handleClose(tag)">
                {{tag.label}}
            </el-tag>
        </div>
    </div>
</template>

<script>
    import themePicker from './themePicker/index.vue';
    export default {
        name: "Head",
        components:{
            themePicker,
        },
        data(){
            return{
                isCollapse:false,
                dynamicTags:[],
                fixedHeader:false
            }
        },
        watch:{
            $route:{
                handler(to,form){
                    if(this.dynamicTags.findIndex(item=>to.path==item.path)==-1){
                        let obj={
                            label:to.name,
                            path:to.path
                        }
                        this.dynamicTags.push(obj)
                    }
                },
                deep:true
            }
        },
        methods:{
            switchNav () {
                this.isCollapse = !this.isCollapse
                this.$store.dispatch('changeSetting', {
                                key: 'isCollapse',
                                value:  this.isCollapse
                            })
            },
            tagClick(tag){
                this.$router.push(tag.path)
            },
            handleClose(tag) {
                let ind=this.dynamicTags.indexOf(tag)
                if(tag.path==this.$route.path){
                    if(ind==0){
                        this.$router.push(this.dynamicTags[ind+1].path)
                    }else{
                        this.$router.push(this.dynamicTags[ind-1].path)
                    }
                }
                this.dynamicTags.splice(ind, 1);
            },
        },
        mounted() {
            if(!this.dynamicTags.length){
                this.dynamicTags.push({
                    label:this.$route.name,
                    path:this.$route.path
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .icon-retract {
        font-size: 30px;
        cursor: pointer;
    }
    .el-tag{
        cursor: pointer;
    }
    header{
        display: flex;
        min-height: 60px;
        border-bottom: 1px solid #ccc;
        justify-content: space-between;
        align-items: center;
        .header-l,.header-r{
            padding:  0 10px;
        }
    }
    .el-breadcrumb{
        box-shadow: 1px 2px 3px rgba(0,0,0,.5);
        margin-bottom: 10px;
    }
    .fixed-header{
        background: #fff;
        position: sticky;
        top: 0;
        right: 0;
        z-index: 2000;
        -webkit-transition: width 0.28s;
        transition: width 0.28s;
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
    }
</style>