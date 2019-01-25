<template>
  <div class="title">
    <div class="logo"><span>后台管理</span></div>
    <div class="admin" @mouseenter="adminEnter()" @mouseleave="adminLeave()">
      <div class="admin_avater">
        <span>管理员</span>
        <img :src="userImg" alt="">
      </div>
      <div class="admin_modify">
        <p v-for="am in adminModify"><router-link class="admin_modify_a" :to="am.url">{{am.name}}</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header",
      data(){
          return{
            userImg:require("../assets/img/c.jpg"),
            adminModify:[
              {name:"修改密码",url:"../Rpassword"},
              {name:"退出",url:"/"}
            ]
          }
      },
      methods:{
          //鼠标进入管理员区域
          adminEnter:function () {
            var _self = this;
            var height = _self.adminModify.length * 30;
            $(".admin_modify").css("height",height+"px")
          },
          adminLeave:function () {
            $(".admin_modify").css("height","0px");
          }
      }
    }
</script>

<style scoped>
  .title{
    width: 100%;
    height: 100%;
  }
  .logo{
    width: 150px;
    height: 100%;
  }
  .logo span{
    display: inline-block;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #fff;
    font-size: 24px;
  }
  .admin{
    width: auto;
    height: 60px;
    float: right;
    margin-top: -60px;
    margin-right: 10px;
  }
  .admin_avater{
    width: auto;
    height: 60px;
    padding: 0 10px;
  }
  .admin_avater span{
    display: inline-block;
    width: auto;
    height: 60px;
    color: #fff;
    line-height: 60px;
    text-align: center;
    vertical-align: middle;
  }
  .admin_avater img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .admin_modify{
    position: fixed;
    background: #2f3844;
    height: 0px;
    z-index: 9999;
    right: 10px;
    overflow: hidden;
    transition: 1s;
  }
  .admin_modify p,.admin_modify p .admin_modify_a {
    color: #fff;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
</style>
