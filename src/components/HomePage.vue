<template>
  <div>
    <div style="padding: 20px">
      <div class="hpTitle">
        <div class="hpTitle-1 hpt">
          <div class="hpTitle-position">
            <div class="position-title">
              <span>总注册人数/当日注册人数</span>
              <a href="" class="icon">···</a>
            </div>
            <div class="position-count">
              <div id="echarts1":style="{width:'60px',height:'50px'}"></div>
              <span class="countSpan">58/0</span>
            </div>
          </div>
        </div>
        <div class="hpTitle-2 hpt">
          <div class="hpTitle-position">
            <div class="position-title">
              <span>总注册人数/当日注册人数</span>
              <a href="" class="icon">···</a>
            </div>
            <div class="position-count">
              <div id="echarts2":style="{width:'60px',height:'50px'}"></div>
              <span class="countSpan">0</span>
            </div>
          </div>
        </div>
        <div class="hpTitle-3 hpt">
          <div class="hpTitle-position">
            <div class="position-title">
              <span>总注册人数/当日注册人数</span>
              <a href="" class="icon">···</a>
            </div>
            <div class="position-count">
              <div id="echarts3":style="{width:'60px',height:'50px'}"></div>
              <span class="countSpan">0</span>
            </div>
          </div>
        </div>
        <div class="hpTitle-4 hpt">
          <div class="hpTitle-position">
            <div class="position-title">
              <span>总注册人数/当日注册人数</span>
              <a href="" class="icon">···</a>
            </div>
            <div class="position-count">
              <div id="echarts4":style="{width:'60px',height:'50px'}"></div>
              <span class="countSpan">0</span>
            </div>
          </div>
         </div>
      </div>
      <div class="hpContent">
        <div class="searchDate">
          <el-date-picker v-model="value" type="date" placeholder="选择日期" :style="{width:'180px'}"></el-date-picker>
          <el-button type="primary">搜索</el-button>
        </div>
        <div id="charts" :style="{width:'100%',height:'600px'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts');
  // 引入柱状图组件
  require('echarts/lib/chart/bar');
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  require('echarts/lib/component/axis');
    export default {
        name: "HomePage",
      data(){
          return{
            value:"", //日期
            echartsData:[5,3,9,6,5,9,7,3,5,2] //canvas数组
          }
      },
      methods:{
        drawLine1:function (id) {
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById(id))
          // 绘制图表
          myChart.setOption({
            title: {
              text: '',
              left:'',
            },
            color:["#ffffff"],
            tooltip: {},
            xAxis: {
              show:false,
              data: ["","","","","","","","","",""]
            },
            yAxis: {
              show:false
            },
            series: [{
              name: '',
              type: 'bar',
              data: this.echartsData
            }]
          });
        },
          drawLine:function () {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('charts'))
            // 绘制图表
            myChart.setOption({
              title: {
                text: '今日消耗卡数：0\n今日开房数：0\n今日活跃人数：',
                left:'center',
              },
              tooltip: {
                trigger:'item',
                formatter:'{a} <br/>当前时间活跃人数 : {c}'

              },
              xAxis: {
                data: ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],
                axisLabel:{
                  rotate: "75"
                }
              },
              yAxis: {},
              series: [{
                name: '活跃人数',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20]
              }]
            });
          }
      },
      mounted(){
        this.drawLine1("echarts1");
        this.drawLine1("echarts2");
        this.drawLine1("echarts3");
        this.drawLine1("echarts4");
        this.drawLine();
      }
    }
</script>

<style scoped>
  .hpTitle{
    width: 100%;
    height: auto;
  }
  .hpTitle .hpt{
    width: 24%;
    height: 150px;
    position: relative;
  }
  .hpTitle .hpTitle-1{
    background: #0866C6;
  }
  .hpTitle .hpTitle-2{
    margin-left: 25%;
    margin-top: -150px;
    background: #5B93D3;
  }
  .hpTitle .hpTitle-3{
    margin-left: 50%;
    margin-top: -150px;
    background: #6f42c1;
  }
  .hpTitle .hpTitle-4{
    margin-left: 75%;
    margin-top: -150px;
    background: #2b333e;
  }
  .hpTitle-position{
    margin-left: 5%;
    padding: 5% 0px;
    width: 90%;
    border-bottom: 1px solid #f5f5f5;
  }
  .hpTitle-position .position-title{
    height: 20px;
    line-height: 20px;
  }
  .hpTitle-position .position-title span{
    color: #fff;
    font-size: 12px;
  }
  .hpTitle-position .position-title a.icon{
    color: #fff;
    float: right;
  }
  .hpTitle-position .position-count{
    margin-top: 20px;
    color: #fff;
    margin-bottom: 10px;
  }
  .countSpan{
    display: inline-block;
    float: right;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    margin-top: -50px;
  }
  .hpContent{
    width: 100%;
    height: auto;
    background: #fff;
    margin-top: 20px;
    padding-top: 20px;
  }
  .searchDate{
    margin-left: 10px;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 600px) and (max-width:1200px ){
    .hpTitle .hpt{
      width: 49%;
      height: 150px;
    }
    .hpTitle .hpTitle-2{
      margin-left: 51%;
      margin-top: -150px;
    }
    .hpTitle .hpTitle-3{
      margin-left: 0px;
      margin-top: 20px;
    }
    .hpTitle .hpTitle-4{
      margin-left: 51%;
      margin-top: -150px;
    }
  }
  @media screen and (min-width: 300px) and (max-width:600px ){
    .hpTitle .hpt{
      width: 100%;
      height: 150px;
    }
    .hpTitle .hpTitle-2{
      margin-left: 0%;
      margin-top: 20px;
    }
    .hpTitle .hpTitle-3{
      margin-left: 0px;
      margin-top: 20px;
    }
    .hpTitle .hpTitle-4{
      margin-left: 0;
      margin-top: 20px;
    }
  }
</style>
