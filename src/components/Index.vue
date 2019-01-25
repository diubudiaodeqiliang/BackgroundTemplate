<template>
    <el-container class="container">
      <el-header class="el-header">
        <myHeader></myHeader>
      </el-header>
      <el-container class="el-container-asideMain">
        <el-aside class="el-aside" :style="{width:width}">
          <myAside v-on:listenMsg="showMsg"></myAside>
        </el-aside>
        <el-main class="el-main">
          <router-view class="routerView"></router-view>
        </el-main>
      </el-container>
      <div class="asideDot" @click="showAside()"><i :class="icon"></i></div>
    </el-container>
</template>

<script>
  import myHeader from '@/components/Header'//头部
  import myAside from '@/components/Aside'//侧边导航栏
    export default {
        name: "Index",
      components:{
        myHeader,
        myAside
      },
      data(){
          return{
            display:"",
            curWidth:"",
            switch:"close",
            width:"",
            icon:"el-icon-arrow-right"
          }
      },
      methods:{
        showAside:function () {
          if(this.switch == "close"){
            this.width = "200px !important";
            this.icon = "el-icon-arrow-left";
            this.switch = "open";
          }else if(this.switch == "open"){
            this.width = "0px !important";
            this.icon = "el-icon-arrow-right";
            this.switch = "close";
          }
        },
        showMsg:function (data) {
          if(data == "open"){
            this.width = "0px !important";
            this.icon = "el-icon-arrow-right";
            this.switch = "close";
          }
        }
      },
      mounted(){
        this.curWidth = document.documentElement.clientWidth || document.body.clientWidth;
      }
    }
</script>

<style scoped>
  .container{
    background: #f5f5f5;
    height: 100%;
  }
  .el-header{
    background: #2b333e;
    width: 100%;
    position: fixed;
    padding: 0px;
    z-index: 1999;
  }
  .el-container-asideMain{
    width: 100%;
    margin-top: 60px;
    padding: 0;
  }
  .el-aside{
    width: 260px !important;
    height: 100%;
    background: #fff;
    position: fixed;
  }
  .el-main{
    height: auto;
    padding: 0px;
    margin-left: 260px;
  }
  .routerView{
    width: 100%;
    z-index: 2000;
    background: #f5f5f5;
  }
  .asideDot{
    position: fixed;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    bottom: 20px;
    left: 20px;
    background: #1E9FFF;
    color: #fff;
    cursor: pointer;
    display: none;
  }
  @media screen and (max-width:1024px ){
    .container{
      background: #fff;
      height: 100%;
      width: 100%;
    }
    .el-aside{
      width: 0px !important;
      z-index: 1999;
    }
    .el-main{
      width: 100%;
      background: #f5f5f5;
      margin-left: 0px;
    }
    .asideDot{
      display: block;
      z-index: 1999;
    }
  }
</style>
