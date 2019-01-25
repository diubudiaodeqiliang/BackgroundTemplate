<template>
  <div>
    <div style="padding: 20px">
      <p class="blackListTitle">比赛详情</p>
      <div class="blackListContent">
        <div class="listContent">
          <router-link to="./GameRecord"><el-button class="back" type="primary">返回</el-button></router-link>
          <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#409eff',color:'#fff'}">
            <el-table-column v-for="(tdt,index) in tableDataTitle" :prop="tdt.prop" :label="tdt.label" :width="tdt.width" :key="index" align="center">
            </el-table-column>
          </el-table>
        </div>
        <el-pagination class="page" background :current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize" layout="prev, pager, next, total" :total="pageTotal"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "GameRecordDetail",
      data(){
          return{
            id:"",
            currentPage:1,
            pageTotal:50,
            pageSize:10,
            tableDataTitle:[
              {prop:"userId",label:"玩家ID",minWidth:"125"},
              {prop:"gameRanking",label:"比赛名次",minWidth:"125"},
              {prop:"integral",label:"积分",minWidth:"125"}
            ],
            tableData:[{userId:"1",gameRanking:"2",integral:"3"},
              {userId:"1",gameRanking:"2",integral:"3"},
              {userId:"1",gameRanking:"2",integral:"3"},
              {userId:"1",gameRanking:"2",integral:"3"},
              {userId:"1",gameRanking:"2",integral:"3"},
              {userId:"1",gameRanking:"2",integral:"3"},
              {userId:"1",gameRanking:"2",integral:"3"},
              {userId:"1",gameRanking:"2",integral:"3"},
              {userId:"1",gameRanking:"2",integral:"3"},
              {userId:"1",gameRanking:"2",integral:"3"}
            ],
          }
      },
      methods:{

      },
      mounted(){
        this.pageTotal = this.tableData.length;
        this.id = this.$route.params.userId;
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
  .listContent{
    margin-left: 4%;
    width: 92%;
    height: auto;
    margin-top: 10px;
  }
  .back{
    float: right;
    margin-bottom: 20px;
  }
  .page{
    text-align: center;
    margin-top: 10px;
    padding-bottom: 10px;
  }
</style>
