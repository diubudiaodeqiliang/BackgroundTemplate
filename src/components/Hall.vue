<template>
    <div id="hall">
      <div class="hall">
        <p class="hallTitle">发布公告</p>
        <div class="hallContent">
          <el-radio id="horseRaceLamp" v-model="radio" label="1"  @change="changeRadio">跑马灯</el-radio>
          <el-radio id="notice" v-model="radio" label="2" @change="changeRadio">公告</el-radio>
            <br>
            <textarea name="" id="content" cols="30" rows="10" style="resize: vertical" v-model="textValue">textValue</textarea>
            <br>
            <el-button class="btn" type="primary" :plain="true" @click="release()">发布</el-button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Hall",
      data(){
          return{
            radio:'1',//单选
            item: "1", //单选框被选择
            textValue:"本游戏仅提供休闲娱乐，禁止以任何形式赌博，一经发现将封号！", //文本框内容
          }
      },
      methods:{
        changeRadio:function (item) {
          //获取被选中单选按钮
            var _self = this;
            _self.item = item;
          },
        release:function () {
          //发布按钮
          var _self = this;
          console.log(_self.item,_self.textValue);
          if(_self.textValue !== ''){

          }else{
            // _self.$message({
            //   dangerouslyUseHTMLString: true,
            //   message: '<p>请输入文本</p>',
            //   type: 'warning'
            // });
          }
        }
      }
    }
</script>

<style scoped>
  #hall{
    height: 100%;
  }
  .hall{
    padding: 20px;
  }
  .hallTitle{
    font-size: 24px;
  }
  .hallContent{
    background: #fff;
    margin-top: 20px;
    height: auto;
    padding-top: 20px;
  }
  #horseRaceLamp,#notice{
    margin-left: 2%;
  }
  #content{
    margin-left: 2%;
    margin-top: 20px;
    width: 94%;
    height: 260px;
    padding: 1%;
  }
  .btn{
    margin-top: 10px;
    margin-left: 2%;
    margin-bottom: 20px;
  }
  @media screen and (max-width:1024px ){

  }
</style>
