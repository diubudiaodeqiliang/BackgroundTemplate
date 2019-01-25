import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'//登陆
import Index from '@/components/Index'//主页
import Header from '@/components/Header'//头部
import Rpassword from '@/components/Rpassword'//修改密码
import Aside from '@/components/Aside'//侧边导航栏
import HomePage from '@/components/HomePage'//首页
import Hall from '@/components/Hall'//大厅
import Blacklist from '@/components/Blacklist'//黑名单
import SuperManagement from '@/components/SuperManagement'//超管
import AllAgents from '@/components/AllAgents'//所有代理
import UseRoomCard from '@/components/UseRoomCard'//w玩家适用房卡
import GameRecord from '@/components/GameRecord'//比赛记录
import SystemConfiguration from '@/components/SystemConfiguration'//系统配置
import GameRecordDetail from '@/components/GameRecordDetail'//系统配置

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: "/Index",
      name: "Index",
      component:Index,
      children:[
        {
          path: "/Header",
          name: "Header",
          component:Header,
        },
        {
          path: "/Aside",
          name: "Aside",
          component:Aside,
        },{
          path: "/HomePage",
          name: "HomePage",
          component:HomePage,
        },{
          path: "/Hall",
          name: "Hall",
          component:Hall
        },{
          path: "/Blacklist",
          name: "Blacklist",
          component:Blacklist
        },{
          path: "/SuperManagement",
          name: "SuperManagement",
          component:SuperManagement
        },{
          path: "/AllAgents",
          name: "AllAgents",
          component:AllAgents
        },{
          path: "/UseRoomCard",
          name: "UseRoomCard",
          component:UseRoomCard
        },{
          path: "/GameRecord",
          name: "GameRecord",
          component:GameRecord
        },{
          path: "/SystemConfiguration",
          name: "SystemConfiguration",
          component:SystemConfiguration
        },{
          path: "/GameRecordDetail",
          name: "GameRecordDetail",
          component:GameRecordDetail
        }
      ],
      redirect:"/HomePage"
    },
    {
      path: "/Rpassword",
      name: "Rpassword",
      component:Rpassword,
    }
  ]
})
