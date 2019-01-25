<template>
  <el-form class="form">
    <p class="form-p">修改密码</p>
    <el-input type="password" class="form-oldPwd" placeholder="请输入旧密码" v-model="oldPassword" onautocomplete="off"></el-input>
    <el-input type="password" class="form-newPwd" placeholder="请输入新密码" v-model="newPassword" onautocomplete="off"></el-input>
    <el-input type="password" class="form-rNewPwd" placeholder="请重复新密码" v-model="rNewPassword" onautocomplete="off"></el-input>
    <el-button class="form-btn" @click="goLogin()">确定</el-button>
    <el-button class="form-btn btn-cancle" @click="goIndex()">取消</el-button>
  </el-form>
</template>

<script>
    export default {
        name: "Rpassword",
      data(){
          return{
            oldPassword:"",
            newPassword:"",
            rNewPassword:""
          }
      },
      methods:{
        goLogin:function () {
          var _self = this;
          _self.$router.push('/')
        },
        goIndex:function () {
          var _self = this;
          _self.$router.push('/Index')
        }
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
  .form-oldPwd,.form-newPwd,.form-rNewPwd{
    width: 260px;
    margin-left: 20px;
    margin-top: 20px;
  }
  .form-btn{
    width: 118px;
    margin-left: 20px;
    margin-top: 20px;
    background: #5B93D3;
    color: #fff;
    letter-spacing: 2px;
    font-size: 18px;
  }
  .btn-cancle{
    background: #999;
  }
</style>
