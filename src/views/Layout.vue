<template>
  <div class="home">
    <article :class="{'hidden-sidebar':this.$store.state.settings.isCollapse}">
        <nav-aside></nav-aside>
        <section style="flex: 1" class="main">
            <Header></Header>
            <el-main>
                <transition name="fade" mode="out-in" >
                    <router-view></router-view>
                </transition>
            </el-main>
        </section>
    </article>
  </div>
</template>

<script>
  import value from '@/assets/js/common.js';
  import navAside from '@/components/common/navAside/index.vue';
  import Header from '@/components/common/Head.vue';

export default {
    name: "home",
    components:{
        navAside,
        Header
    },
  data(){
    return{

      // originalStylesheetCount: -1,//记录当前已引入style数量
    }
  },
  computed:{
    // defaultRoute(){
    //   console.log(111)
    //   return this.$route.path
    // },
    // key() {
    //   //解决同一组件路由跳转，数据不刷新问题
    //   return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
    // }
  },

  mounted() {

    // this.$nextTick(() => {
    //   // 获取页面一共引入了多少个style 文件
    //   this.originalStylesheetCount = document.styleSheets.length;
    //   console.log(this.originalStylesheetCount)
    // });
  },
  methods:{
  //   colorChange(){
  //     this.colorValue=this.color
  //   if(document.all){ //可以判断浏览器是否是IE
  //     window.style=`.primaryColor{background-color:${this.color}`;
  //     document.createStyleSheet("javascript:style");
  //   }else{ //document.createElement(style)
  //     if (this.originalStylesheetCount === document.styleSheets.length) {
  //       // 如果之前没有插入就插入
  //       var style = document.createElement('style');
  //       // style.type = 'text/css';
  //       style.innerHTML=`.primaryColor{background-color:${this.color}`;
  //       document.getElementsByTagName('HEAD').item(0).appendChild(style);
  //     } else {
  //       // 如果之前有插入就修改
  //       document.head.lastChild.innerHTML = `.primaryColor{background-color:${this.color}`
  //     }
  //   }
  // },
  //  themeChange(val) {
  //     this.$store.dispatch('changeSetting', {
  //         key: 'theme',
  //         value: val
  //     })
  //   },

  }
};
</script>
<style lang="scss">

    .el-menu:not(.el-menu--collapse) {
        width: 300px;
    }
  .home {
      height: 100%;
      .el-container{
          height: 100%;
      }
      .main{
          margin-left: 300px;
          transition: .3s;
          box-sizing: border-box;
      }
      .hidden-sidebar .main{
          transition: .3s;
          margin-left: 64px;
      }
      .el-breadcrumb{
          line-height: 35px;
      }
  }

</style>
