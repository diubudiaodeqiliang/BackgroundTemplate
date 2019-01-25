<template>
  <div>
    <div style="padding: 20px">
      <p class="blackListTitle">玩家使用房卡明细</p>
      <div class="blackListContent">
        <el-input v-model="input" class="searchInput" placeholder="请输入玩家ID"></el-input>
        <el-button class="search" type="primary">搜索</el-button>
        <el-button class="back">返回</el-button>
        <div class="listContent">
          <el-table :data="tableData1" style="width: 100%" :header-cell-style="{background:'#409eff',color:'#fff'}">
            <el-table-column v-for="(tdt1,index) in tableDataTitle1" :prop="tdt1.prop" :label="tdt1.label" :width="tdt1.width" :key="index" align="center">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100" align="center">
              <template slot-scope="scope">
                <el-button size="mini" @click="dialogFormVisible = true">战绩</el-button>
                <el-dialog title="玩家战绩" width="90%" :visible.sync="dialogFormVisible" center :before-close="closeDialog" append-to-body>
                  <el-table :data="tableData2" style="width: 100%" height="500" >
                    <el-table-column v-for="(tdt2,index) in tableDataTitle2" :prop="tdt2.prop" :label="tdt2.label" :width="tdt2.width" :key="index" align="center">
                    </el-table-column>
                  </el-table>
                </el-dialog>
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
        currentPage:1,
        pageTotal:50,
        pageSize:10,
        input: "",//输入框
        dialogFormVisible: false,
        tableDataTitle1:[//列表头部
          {prop:"userId",label:"玩家ID",minWidth:"125"},
          {prop:"headPortrait",label:"头像",minWidth:"125"},
          {prop:"nickName",label:"昵称",minWidth:"125"},
          {prop:"roomCardNum",label:"房卡数量",minWidth:"125"},
        ],
        tableData1:[//列表数据
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
        ],
        tableDataTitle2:[//战绩头部
          {prop:"createUser",label:"创建玩家",minWidth:"125"},
          {prop:"useGold",label:"消耗金币",minWidth:"125"},
          {prop:"useRoomCard",label:"消耗房卡",minWidth:"125"},
          {prop:"roomType",label:"房间类别",minWidth:"125"},
          {prop:"gameNum",label:"局数",minWidth:"125"},
          {prop:"userNum",label:"玩家数量",minWidth:"125"},
          {prop:"time",label:"时间",minWidth:"125"},
          {prop:"userDetail",label:"玩家详情",minWidth:"125"}
        ],
        tableData2:[//战绩数据
          {createUser:"1",useGold:"2",useRoomCard:"3",roomType:"4",gameNum:"5",userNum:"6",time:"7",userDetail:"8"},
          {createUser:"1",useGold:"2",useRoomCard:"3",roomType:"4",gameNum:"5",userNum:"6",time:"7",userDetail:"8"},
          {createUser:"1",useGold:"2",useRoomCard:"3",roomType:"4",gameNum:"5",userNum:"6",time:"7",userDetail:"8"},
          {createUser:"1",useGold:"2",useRoomCard:"3",roomType:"4",gameNum:"5",userNum:"6",time:"7",userDetail:"8"},
          {createUser:"1",useGold:"2",useRoomCard:"3",roomType:"4",gameNum:"5",userNum:"6",time:"7",userDetail:"8"},
          {createUser:"1",useGold:"2",useRoomCard:"3",roomType:"4",gameNum:"5",userNum:"6",time:"7",userDetail:"8"},
          {createUser:"1",useGold:"2",useRoomCard:"3",roomType:"4",gameNum:"5",userNum:"6",time:"7",userDetail:"8"},
          {createUser:"1",useGold:"2",useRoomCard:"3",roomType:"4",gameNum:"5",userNum:"6",time:"7",userDetail:"8"},
          {createUser:"1",useGold:"2",useRoomCard:"3",roomType:"4",gameNum:"5",userNum:"6",time:"7",userDetail:"8"},
          {createUser:"1",useGold:"2",useRoomCard:"3",roomType:"4",gameNum:"5",userNum:"6",time:"7",userDetail:"8"},
          {createUser:"1",useGold:"2",useRoomCard:"3",roomType:"4",gameNum:"5",userNum:"6",time:"7",userDetail:"8"},
          {createUser:"1",useGold:"2",useRoomCard:"3",roomType:"4",gameNum:"5",userNum:"6",time:"7",userDetail:"8"}
        ]
      }
    },
    methods:{
      subId:function () {
        this.dialogFormVisible = false;
      },
      closeDialog:function () {
        this.dialogFormVisible = false;
      }
    },
    mounted(){
      this.pageTotal = this.tableData1.length;
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
  .searchInput{
    width: 200px;
    margin-left: 4%;
  }
  .back{
    float: right;
    margin-right: 4%;
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
  @media screen and (max-width:1024px ){
    .searchInput{
      width: 150px;
    }
  }
  @media screen  and (max-width:374px ){
    .searchInput{
      width: 100px;
    }
  }
</style>
