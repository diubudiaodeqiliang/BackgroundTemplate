<template>
  <div>
    <div style="padding: 20px">
      <p class="blackListTitle">比赛记录</p>
      <div class="blackListContent">
        <div class="listContent">
          <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#409eff',color:'#fff'}">
            <el-table-column v-for="(tdt,index) in tableDataTitle" :prop="tdt.prop" :label="tdt.label" :width="tdt.width" :key="index" align="center">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100" align="center">
              <template slot-scope="scope">
                <router-link :to="{name:'GameRecordDetail',params:{gameId:scope.row.gameId}}"><el-button size="small">查询</el-button></router-link>
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
      return {
        currentPage: 1,
        pageTotal: 50,
        pageSize: 10,
        tableDataTitle: [
          {prop: "gameId", label: "比赛ID", minWidth: "125"},
          {prop: "gameName", label: "比赛场名称", minWidth: "125"},
          {prop: "gameNum", label: "比赛场编号", minWidth: "125"},
          {prop: "userNum", label: "参加人数", minWidth: "125"},
          {prop: "startTime", label: "开始时间", minWidth: "125"}
        ],
        tableData: [{gameId: "1", gameName: "2", gameNum: "3", userNum: "4", startTime: "1"},
          {gameId: "1", gameName: "2", gameNum: "3", userNum: "4", startTime: "1"},
          {gameId: "1", gameName: "2", gameNum: "3", userNum: "4", startTime: "1"},
          {gameId: "1", gameName: "2", gameNum: "3", userNum: "4", startTime: "1"},
          {gameId: "1", gameName: "2", gameNum: "3", userNum: "4", startTime: "1"},
          {gameId: "1", gameName: "2", gameNum: "3", userNum: "4", startTime: "1"},
          {gameId: "1", gameName: "2", gameNum: "3", userNum: "4", startTime: "1"},
          {gameId: "1", gameName: "2", gameNum: "3", userNum: "4", startTime: "1"},
          {gameId: "1", gameName: "2", gameNum: "3", userNum: "4", startTime: "1"},
          {gameId: "1", gameName: "2", gameNum: "3", userNum: "4", startTime: "1"}
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
  .page{
    text-align: center;
    margin-top: 10px;
    padding-bottom: 10px;
  }
</style>
