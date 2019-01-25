<template>
    <el-menu default-active="2" unique-opened class="el-menu-vertical-demo">
      <router-link class="routerLink" to="./HomePage" >
        <el-menu-item index="0" @click="sendDotMsg()">
          <span>首页</span>
        </el-menu-item>
      </router-link>
      <el-submenu class="titleName" v-for="ad in asideDetail" :index="ad.ind" :key="ad.ind">
        <template slot="title">
          <span slot="title">{{ad.name}}</span>
        </template>
        <el-menu-item-group v-for="cad in ad.child" :key="cad.childIndex">
          <router-link class="routerLink" :to="cad.path"   @click.native="sendDotMsg()"><el-menu-item :index="cad.childIndex">{{cad.childName}}</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>

<script>
    export default {
      name: "Aside",
      data(){
          return{
            asideDetail:[
              {ind:"1",name:"大厅设置",child:[{childIndex:"1-1",childName:"游戏公告",path:"./Hall"}]},
              {ind:"2",name:"玩家管理",child:[{childIndex:"2-1",childName:"黑名单设置",path:"./Blacklist"},{childIndex:"2-2",childName:"超管设置",path:"./SuperManagement"},{childIndex:"2-3",childName:"查看所有代理",path:"./AllAgents"}]},
              {ind:"3",name:"在线数据统计",child:[{childIndex:"3-1",childName:"玩家使用房卡",path:"./UseRoomCard"}]},
              {ind:"4",name:"游戏管理",child:[{childIndex:"4-1",childName:"比赛记录",path:"./GameRecord"}]},
              {ind:"5",name:"系统配置",child:[{childIndex:"5-1",childName:"配置",path:"./SystemConfiguration"}]},
            ],
            curWidth:"",
          }
      },
      methods:{
        sendDotMsg:function () {
          if(this.curWidth < 1024){
            this.$emit("listenMsg","open");
          }

        }
      },
      mounted(){
        this.curWidth = document.documentElement.clientWidth || document.body.clientWidth;
      }
    }
</script>

<style scoped>
  .titleName,.el-menu-item{
    border-top: 1px solid #f5f5f5;
  }
  .routerLink .el-menu-item{
    color: #000;
  }
  .el-menu-item.is-active span,.el-menu-item.is-active{
    color: #409EFF;
  }

  @media screen and (max-width:1024px ){

  }
</style>
