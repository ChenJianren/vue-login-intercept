import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/components/home'
import personal from '@/components/personal'
import login from '@/components/login'

import { getLogin } from '../assets/script/local.storage';
console.info('保存在本地的信息',getLogin().name,getLogin().phone)
import { MessageBox } from 'mint-ui';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/home',
      name: 'home',
      component: home,
      meta:{
        login:true
      }
    },{
      path: '/personal',
      name: 'personal',
      component: personal,
      meta:{
        login:true
      }
    },{
      path: '/login',
      name: 'login',
      component: login
    }
  ]

})


router.beforeEach((to, from, next) => {
  // console.info(22, window.location.href)
  //console.info(to,from,next)
  // 对路由变化作出响应...
  // console.log(router,to)
  // console.log(router,to.query, from)
  // console.log(to,$.param( to.query ),window.location.href)

  //全局拦截器的
  if (to.meta.login) {  // 判断该路由是否需要登录权限
    if (getLogin().name && getLogin().phone) {  // 通过store获取当前的token是否存在
      next();
    }
    else {
      MessageBox.alert('未登录，请先登录').then(()=>{ //promise
        next({
          path: '/login',
          query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      })

    }
  }
  else {
    next();
  }

})




export default router
