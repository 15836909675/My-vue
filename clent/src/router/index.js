import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
// import laun from '../views/Homese/launched'
// import pend from '../views/Homese/pending'
// import procer from '../views/Homese/processed'
import seach from "../views/seach"
import loaging from "../views/loaging"
Vue.use(Router)

const Rout= new Router({
  routes: [
    {
      path: '/',
      redirect:"/home"
     
    },
    {
      path: '/seach',
      meta:"搜索",
      name: 'seach',
      component: seach
    },
    {
      path: '/loaging',
      meta:"搜索",
      name: 'loaging',
      component: loaging
    },
    {
      path: '/home',
      
      name: 'Home',
      // redirect:"/home/laun",
      component: Home,
      // children:[
      //   {
      //     path: '/home/laun',
      //     meta:"加班/休假",
      //     name: 'laun',
      //     component: laun
      //   },
      //   {
      //     path: '/home/pend',
      //     meta:"加班/休假",
      //     name: 'pend',
      //     component: pend
      //   },
      //   {
      //     path: '/home/proce',
      //     meta:"加班/休假",
      //     name: 'proce',
      //     // component: procer
      //   }
      // ]
    },
  
  ]
})
Rout.beforeEach((to,from,next)=>{
  // console.log(from)
  document.title=to.meta
  next()
})
export default Rout