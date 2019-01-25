<template>
  <div>
    <div style="padding: 20px">
      <p class="blackListTitle">所有代理</p>
      <div class="blackListContent">
        <el-radio id="gold" v-model="radio" label="1">按金币排序</el-radio>
        <el-radio id="roomCard" v-model="radio" label="2">按房卡排序</el-radio>
        <div class="listContent">
          <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#409eff',color:'#fff'}">
            <el-table-column v-for="(tdt,index) in tableDataTitle" :prop="tdt.prop" :label="tdt.label" :width="tdt.width" :key="index" align="center">
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
        currentPage:1,
        pageTotal:50,
        pageSize:10,
        radio: "1",
        tableDataTitle:[
          {prop:"userId",label:"玩家ID",minWidth:"125"},
          {prop:"headPortrait",label:"头像",minWidth:"125"},
          {prop:"nickName",label:"昵称",minWidth:"125"},
          {prop:"gold",label:"金币",minWidth:"125"},
          {prop:"roomCard",label:"房卡",minWidth:"125"},

        ],
        tableData:[{userId:"1",headPortrait:"2",nickName:"3",gold:"4",roomCard:"1"},
          {userId:"1",headPortrait:"2",nickName:"3",gold:"4",roomCard:"1"},
          {userId:"1",headPortrait:"2",nickName:"3",gold:"4",roomCard:"1"},
          {userId:"1",headPortrait:"2",nickName:"3",gold:"4",roomCard:"1"},
          {userId:"1",headPortrait:"2",nickName:"3",gold:"4",roomCard:"1"},
          {userId:"1",headPortrait:"2",nickName:"3",gold:"4",roomCard:"1"},
          {userId:"1",headPortrait:"2",nickName:"3",gold:"4",roomCard:"1"},
          {userId:"1",headPortrait:"2",nickName:"3",gold:"4",roomCard:"1"},
          {userId:"1",headPortrait:"2",nickName:"3",gold:"4",roomCard:"1"},
          {userId:"1",headPortrait:"2",nickName:"3",gold:"4",roomCard:"1"}
        ]
      }
    },
    methods:{

    },
    mounted(){
      this.pageTotal = this.tableData.length;
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
  #gold{
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
