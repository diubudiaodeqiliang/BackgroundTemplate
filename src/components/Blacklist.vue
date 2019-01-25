<template>
  <div>
    <div style="padding: 20px">
      <p class="blackListTitle">黑名单设置</p>
      <div class="blackListContent">
        <el-button  class="addBlackList" type="primary" @click="dialogFormVisible = true">添加黑名单...</el-button>
        <el-dialog title="添加黑名单" width="300px" :visible.sync="dialogFormVisible" center :before-close="closeDialog">
          <el-form :model="form">
            <el-form-item label="玩家ID" :label-width="formLabelWidth" :style="{marginTop:'-10px'}">
              <el-input v-model="form.name" autocomplete="off" placeholder="请输入你要添加的玩家ID"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer" :style="{marginTop:'-30px'}">
            <el-button type="primary" @click="subId()">提 交</el-button>
            <el-button @click="closeDialog()">关 闭</el-button>
          </div>
        </el-dialog>
        <div class="listContent">
          <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#409eff',color:'#fff'}">
            <el-table-column v-for="(tdt,index) in tableDataTitle" :prop="tdt.prop" :label="tdt.label" :width="tdt.width" :key="index" align="center">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100" align="center">
              <template slot-scope="scope">
                <el-button type="text" size="small">解除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <el-pagination class="page"
          background
          :current-page="currentPage"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="pageSize"
          layout="prev, pager, next, total"
          :total="pageTotal">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Blacklist",
      data(){
          return{
            serverSrc:this.GLOBAL.serverSrc,
            currentPage:1,//显示第一页
            pageTotal:50,//总数量
            pageSize:10,//每页显示数量
            dialogFormVisible: false,//dialog是否显示 默认否
            form: { //form 表单内容
              name: ''
            },
            formLabelWidth: '60px',//表单label宽度
            tableDataTitle:[ //列表头部
              {prop:"userId",label:"玩家ID",minWidth:"125"},
              {prop:"headPortrait",label:"头像",minWidth:"125"},
              {prop:"nickName",label:"昵称",minWidth:"125"},
              {prop:"roomCardNum",label:"房卡数量",minWidth:"125"}
            ],
            tableData:[//列表数据
              {userId:"1",headPortrait:"2",nickName:"3",roomCardNum:"4"},
              {userId:"1",headPortrait:"2",nickName:"3",roomCardNum:"4"},
              {userId:"1",headPortrait:"2",nickName:"3",roomCardNum:"4"},
              {userId:"1",headPortrait:"2",nickName:"3",roomCardNum:"4"},
              {userId:"1",headPortrait:"2",nickName:"3",roomCardNum:"4"},
              {userId:"1",headPortrait:"2",nickName:"3",roomCardNum:"4"},
              {userId:"1",headPortrait:"2",nickName:"3",roomCardNum:"4"},
              {userId:"1",headPortrait:"2",nickName:"3",roomCardNum:"4"},
              {userId:"1",headPortrait:"2",nickName:"3",roomCardNum:"4"},
              {userId:"1",headPortrait:"2",nickName:"3",roomCardNum:"4"}
            ]
          }
      },
      inject:['reload'],//重新加载页面
      methods:{
        subId:function () {
          //提交黑名单
          console.log(this.form.name);
          this.dialogFormVisible = false;
          this.form.name = "";
          this.reload() // 调用加载页面
        },
        closeDialog:function () {
          //关闭dialog
          this.dialogFormVisible = false;
          this.form.name = "";
        }
      },
      mounted(){
          this.pageTotal = this.tableData.length; //获取数据总量
      }
    }
</script>

<style scoped>
  li{
    float: left;
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
  .addBlackList {
    margin-left: 4%;
  }
  .listContent{
    margin-left: 4%;
    width: 92%;
    height: auto;
    margin-top: 20px;
  }
  .page{
    text-align: center;
    margin-top: 10px;
    padding-bottom: 10px;
  }
</style>
