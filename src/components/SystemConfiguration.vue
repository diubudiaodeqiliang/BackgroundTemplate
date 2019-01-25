<template>
  <div>
    <div style="padding: 20px">
      <p class="blackListTitle">系统配置</p>
      <div class="blackListContent">
        <div class="detailTitle">
          <span>配置详情</span>
          <button class="el-icon-plus icon" @click="dialogFormVisible = true"></button>
          <el-dialog title="配置入口" width="300px" :visible.sync="dialogFormVisible" center :before-close="resetForm">
            <el-form :model="form" status-icon :rules="rule" ref="form" :style="{marginLeft:'-20px'}">
              <el-radio id="roomCard" v-model="radio" label="1"  @change="changeRadio" :style="{marginTop:'-10px',marginLeft:'40px'}">房卡配置</el-radio>
              <el-radio id="recharge" v-model="radio" label="2" @change="changeRadio">充值配置</el-radio>
              <el-form-item label="金额" :label-width="formLabelWidth" :style="{marginTop:'10px'}" prop="price">
                <el-input v-model="form.price" autocomplete="off" placeholder="请输入金额"></el-input>
              </el-form-item>
              <el-form-item label="房卡" :label-width="formLabelWidth" :style="{marginTop:'10px'}" prop="roomCard">
                <el-input v-model="form.roomCard" autocomplete="off" placeholder="请输入房卡"></el-input>
              </el-form-item>
              <el-form-item label="金币" :label-width="formLabelWidth" :style="{marginTop:'10px'}" prop="gold">
                <el-input v-model="form.gold" autocomplete="off" placeholder="请输入金币"></el-input>
              </el-form-item>
              <el-form-item label="游戏种类" :label-width="formLabelWidth" :style="{marginTop:'10px',display:gameValueDisplay}" prop="gameValue">
                <el-select v-model="form.gameValue" placeholder="请选择">
                  <el-option label="斗地主" value="dou"></el-option>
                  <el-option label="德州扑克" value="de"></el-option>
                  <el-option label="炸金花" value="zha"></el-option>
                  <el-option label="杭州麻将" value="hang"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="游戏局数" :label-width="formLabelWidth" :style="{marginTop:'10px',display:gameNumDisplay}" prop="gameNum">
                <el-input v-model="form.gameNum" autocomplete="off" placeholder="请输入游戏局数"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer" :style="{marginTop:'-30px'}">
              <el-button type="primary" @click="submitForm('form')">提 交</el-button>
              <el-button @click="resetForm('form')">关 闭</el-button>
            </div>
          </el-dialog>
        </div>
        <div class="listContent">
          <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#409eff',color:'#fff'}">
            <el-table-column v-for="(tdt,index) in tableDataTitle" :prop="tdt.prop" :label="tdt.label" :width="tdt.width" :key="index" align="center">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100" align="center">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="modify(scope.row)">修改</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-dialog title="配置修改" width="300px" :visible.sync="systemModifyDisplay" center append-to-body :before-close="modifyReset">
            <el-form :model="modifyForm" status-icon :rules="modifyRule" ref="modifyForm" :style="{marginLeft:'-20px'}">
              <el-form-item label="金额" :label-width="formLabelWidth" :style="{marginTop:'-10px'}" prop="modifyPrice">
                <el-input v-model="modifyForm.modifyPrice" autocomplete="off" placeholder="请输入金额"></el-input>
              </el-form-item>
              <el-form-item label="房卡" :label-width="formLabelWidth" :style="{marginTop:'10px'}" prop="modifyRoomCard">
                <el-input v-model="modifyForm.modifyRoomCard" autocomplete="off" placeholder="请输入房卡"></el-input>
              </el-form-item>
              <el-form-item label="金币" :label-width="formLabelWidth" :style="{marginTop:'10px'}" prop="modifyGold">
                <el-input v-model="modifyForm.modifyGold" autocomplete="off" placeholder="请输入金币"></el-input>
              </el-form-item>
              <el-form-item label="游戏种类" :label-width="formLabelWidth" :style="{marginTop:'10px',display:gameValueModifyDisplay}" prop="modifyGameValue">
                <el-select v-model="modifyForm.modifyGameValue" placeholder="请选择">
                  <el-option label="斗地主" value="dou"></el-option>
                  <el-option label="德州扑克" value="de"></el-option>
                  <el-option label="炸金花" value="zha"></el-option>
                  <el-option label="杭州麻将" value="hang"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="游戏局数" :label-width="formLabelWidth" :style="{marginTop:'10px',display:gameNumModifyDisplay}" prop="modifyGameNum">
                <el-input v-model="modifyForm.modifyGameNum" autocomplete="off" placeholder="请输入游戏局数"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer" :style="{marginTop:'-30px'}">
              <el-button type="primary" @click="modifySubmit('modifyForm')">提 交</el-button>
              <el-button @click="modifyReset('modifyForm')">关 闭</el-button>
            </div>
          </el-dialog>
        </div>
        <el-pagination class="page" background :current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize" layout="prev, pager, next, total" :total="pageTotal"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Blacklist",
    data(){
      //配置入口
      var price = (rule, value, callback) => {
        //金额
        var reg = /^[0-9]*$/;
        if (value === '') {
          this.form.price = "0";
          callback();
        } else {
          if(!reg.test(value)){
            callback(new Error('请输入数值'));
          }
          callback();
        }
      };
      var roomCard = (rule, value, callback) => {
        //房卡
        var reg = /^[0-9]*$/;
        if (value === '') {
          this.form.roomCard = "0";
          callback();
        } else {
          if(!reg.test(value)){
            callback(new Error('请输入数值'));
          }
          callback();
        }
      };
      var gold = (rule, value, callback) => {
        //金币
        var reg = /^[0-9]*$/;
        if (value === '') {
          this.form.gold = "0";
          callback();
        } else {
          if(!reg.test(value)){
            callback(new Error('请输入数值'));
          }
          callback();
        }
      };
      var gameNum = (rule, value, callback) => {
        //游戏局数
        var reg = /^[0-9]*$/;
        if (value === '') {
          this.form.gameNum = "0";
          callback();
        } else {
          if(!reg.test(value)){
            callback(new Error('请输入数值'));
          }
          callback();
        }
      };
      //配置修改
      var modifyPrice = (rule, value, callback) => {
        //金额
        var reg = /^[0-9]*$/;
        if (value === '') {
          this.modifyForm.modifyPrice = "0";
          callback();
        } else {
          if(!reg.test(value)){
            callback(new Error('请输入数值'));
          }
          callback();
        }
      };
      var modifyRoomCard = (rule, value, callback) => {
        //房卡
        var reg = /^[0-9]*$/;
        if (value === '') {
          this.modifyForm.modifyRoomCard = "0";
          callback();
        } else {
          if(!reg.test(value)){
            callback(new Error('请输入数值'));
          }
          callback();
        }
      };
      var modifyGold = (rule, value, callback) => {
        //金币
        var reg = /^[0-9]*$/;
        if (value === '') {
          this.modifyForm.modifyGold = "0";
          callback();
        } else {
          if(!reg.test(value)){
            callback(new Error('请输入数值'));
          }
          callback();
        }
      };
      var modifyGameNum = (rule, value, callback) => {
        //游戏局数
        var reg = /^[0-9]*$/;
        if (value === '') {
          this.modifyForm.modifyGameNum = "0";
          callback();
        } else {
          if(!reg.test(value)){
            callback(new Error('请输入数值'));
          }
          callback();
        }
      };
      return{
        radio:"1",
        currentPage:1,
        pageTotal:50,
        pageSize:10,
        input: "",
        formLabelWidth: '80px',
        //配置入口
        dialogFormVisible: false,
        form: {
          price: '',//金额
          roomCard: '',//饭卡
          gold: '',//金币
          gameValue: '',//游戏种类
          gameNum: ''//游戏数量
        },
        rule:{//验证规则
          price:[{validator: price, trigger: 'blur'}],
          roomCard:[{validator: roomCard, trigger: 'blur'}],
          gold:[{validator: gold, trigger: 'blur'}],
          gameValue: [{required: true,message: '请选择游戏类型', trigger: 'change' }],
          gameNum:[{validator: gameNum, trigger: 'blur'}],
        },
        item:"1",//被选中单选框
        gameValueDisplay:"block", //游戏类型是否显示
        gameNumDisplay:"block", //游戏数量显示
        //配置修改
        modifyForm: {
          modifyPrice: '',//金额
          modifyRoomCard: '',//饭卡
          modifyGold: '',//金币
          modifyGameValue: '',//游戏种类
          modifyGameNum: ''//游戏数量
        },
        modifyRule:{//验证规则
          modifyPrice:[{validator: modifyPrice, trigger: 'blur'}],
          modifyRoomCard:[{validator: modifyRoomCard, trigger: 'blur'}],
          modifyGold:[{validator: modifyGold, trigger: 'blur'}],
          modifyGameValue: [{required: true,message: '请选择游戏类型', trigger: 'change' }],
          modifyGameNum:[{validator: modifyGameNum, trigger: 'blur'}],
        },
        gameValueModifyDisplay:"block",//修改游戏类型是否显示
        gameNumModifyDisplay:"block",//修改游戏数量显示
        systemModifyDisplay:false,
        gameValueDisplay:"block", //游戏类型是否显示
        gameNumDisplay:"block", //游戏数量显示
        tableDataTitle:[
          {prop:"configure",label:"配置",minWidth:"125"},
          {prop:"price",label:"金额",minWidth:"125"},
          {prop:"roomCard",label:"房卡",minWidth:"125"},
          {prop:"gold",label:"金币",minWidth:"125"},
          {prop:"gameType",label:"游戏类型",minWidth:"125"},
          {prop:"playNum",label:"游戏局数",minWidth:"125"}
        ],
        tableData:[
          {configure:"房卡配置",price:"2",roomCard:"3",gold:"4",gameType:"斗地主",playNum:"1"},
          {configure:"充值配置",price:"2",roomCard:"3",gold:"4",gameType:"1",playNum:"1"},
          {configure:"充值配置",price:"2",roomCard:"3",gold:"4",gameType:"1",playNum:"1"},
          {configure:"充值配置",price:"2",roomCard:"3",gold:"4",gameType:"1",playNum:"1"},
          {configure:"房卡配置",price:"2",roomCard:"3",gold:"4",gameType:"德州扑克",playNum:"1"},
          {configure:"充值配置",price:"2",roomCard:"3",gold:"4",gameType:"1",playNum:"1"},
          {configure:"房卡配置",price:"2",roomCard:"3",gold:"4",gameType:"杭州麻将",playNum:"1"},
          {configure:"房卡配置",price:"2",roomCard:"3",gold:"4",gameType:"炸金花",playNum:"1"},
          {configure:"充值配置",price:"2",roomCard:"3",gold:"4",gameType:"1",playNum:"1"},
          {configure:"房卡配置",price:"2",roomCard:"3",gold:"4",gameType:"杭州麻将",playNum:"1"}
        ],

      }
    },
    methods:{
      changeRadio:function (item) {
        //获取被选中单选按钮
        var _self = this;
        _self.item = item;
        if(_self.item == 2){
          _self.gameValueDisplay = "none";
          _self.gameNumDisplay = "none";
        }else{
          _self.gameValueDisplay = "block";
          _self.gameNumDisplay = "block";
        }
        this.$refs.form.resetFields();//重置
      },
      submitForm(formName) {
        //提交按钮
        if(this.item == 2){
          this.form.gameValue = "/";
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.item,this.form.price,this.form.roomCard,this.form.gold,this.form.gameValue,this.form.gameNum);
            this.dialogFormVisible = false;//关闭dialog
            this.$refs[formName].resetFields();//重置
          } else {
            console.log('error submit!!');
            return false;
          }

        });
      },
      resetForm(formName) {
        this.dialogFormVisible = false;
        //取消按钮
        if (formName !== 'form'){
          formName = 'form';
        }
        this.$refs[formName].resetFields();//重置
      },
      //修改
      modify:function (val) {
        console.log(val);
        if(val.configure == "房卡配置"){
          this.gameValueModifyDisplay = "block";
          this.gameNumModifyDisplay = "block";
        }else if(val.configure == "充值配置"){
          this.gameValueModifyDisplay = "none";
          this.gameNumModifyDisplay = "none";
        }
        this.systemModifyDisplay = true;//打开dialog
        this.modifyForm.modifyPrice = val.price;
        this.modifyForm.modifyRoomCard = val.roomCard;
        this.modifyForm.modifyGold = val.gold;
        this.modifyForm.modifyGameValue = val.gameType;
        this.modifyForm.modifyGameNum = val.playNum;
      },
      modifySubmit(formName) {
        //修改提交按钮
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // console.log(this.modifyForm.price,this.modifyForm.roomCard,this.modifyForm.gold,this.modifyForm.gameValue,this.modifyForm.gameNum);
            this.systemModifyDisplay = false;//关闭dialog
            this.$refs[formName].resetFields();//重置
          } else {
            console.log('error submit!!');
            return false;
          }

        });

      },
      modifyReset(formName) {
        this.systemModifyDisplay = false;
        //修改取消按钮
        if (formName !== 'modifyForm'){
          formName = 'modifyForm';
        }
        this.$refs[formName].resetFields();//重置
      }
    },
    mounted(){
      var _self = this;
      _self.pageTotal = _self.tableData.length;
    }
  }
</script>

<style scoped>
  li{
    float: left;
  }
  .el-dialog--center .el-dialog__body{
    padding-top: 0px;
  }
  .blackListTitle{
    font-size: 24px;
  }
  .blackListContent{
    background: #fff;
    margin-top: 20px;
    height: auto;
    padding-top: 20px;
  }
  .detailTitle{
    margin-left: 4%;
    width: 92%;
    height: 50px;
    background: #0866C6;
  }
  .detailTitle span{
    display: inline-block;
    height: 50px;
    line-height: 50px;
    margin-left: 20px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .detailTitle button.icon{
    float: right;
    font-weight: bold;
    width: 26px;
    height: 26px;
    line-height: 26px;
    margin-top: 12px;
    text-align: center;
    margin-right: 20px;
    background: #fff;
    border: none;
    border-radius: 50%;
    color: #000;
    font-size: 20px;
    cursor: pointer;
  }
  .listContent{
    margin-left: 4%;
    width: 92%;
    height: auto;
  }
  .listContent .contentTitle{
    width: 100%;
    height: 40px;
    background: #ccc;
  }
  .listContent .contentTitle li{
    width: 16.66%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    color: #000;
    font-size: 14px;
    font-weight: bold;
    outline: 1px solid #fff;
  }
  .listContent .content{
    width: 100%;
    height: auto;
  }
  .listContent .content .contentDetail{
    height: 40px;
  }
  .listContent .content .contentDetail li{
    width: 16.66%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    color: #000;
    font-size: 14px;
    font-weight: normal;
    background: #f5f5f5;
    outline: 1px solid #fff;
  }
  .page{
    text-align: center;
    margin-top: 10px;
    padding-bottom: 10px;
  }
</style>
