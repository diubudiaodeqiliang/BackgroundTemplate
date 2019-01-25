<template>
  <el-form class="form">
    <p class="form-p">登陆 <span>admin</span></p>
    <el-input type="text" class="form-userName" placeholder="请输入用户名" v-model="userName" onautocomplete="off"></el-input>
    <el-input type="password" class="form-pwd" placeholder="请输入密码" v-model="pwd" onautocomplete="off"></el-input>
    <el-button class="form-btn" @click="goIndex()">登陆</el-button>
  </el-form>
</template>

<script>
    export default {
        name: "index",
      data() {
        return {
          userName:"",
          pwd:""
        }
      },
      methods:{
        goIndex:function() {
          var _self = this;
          _self.$router.push('/Index')
        }
      },
      mounted(){

      }
    }
</script>

<style scoped>
  .form{
    position: absolute;
    width: 300px;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    margin-left: -150px;
    background: #fff;
    padding-bottom: 20px;
  }
  .form-p{
    width: 260px;
    margin-left: 20px;
    font-size: 24px;
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .form-p span{
    color: #5B93D3;
    font-weight: normal;
    letter-spacing: 0px;
  }
  .form-userName,.form-pwd,.form-btn{
    width: 260px;
    margin-left: 20px;
    margin-top: 20px;
  }
  .form-btn{
    background: #5B93D3;
    color: #fff;
    letter-spacing: 2px;
    font-size: 18px;
  }
</style>
