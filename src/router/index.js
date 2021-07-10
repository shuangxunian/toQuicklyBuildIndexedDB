/*
 * @Author: yuelin.wang
 * @Date: 2021-07-09 14:05:19
 * @LastEditors: yuelin.wang
 * @LastEditTime: 2021-07-10 16:00:24
 * @Description: 修改拦截器
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import All from '../components/all/All.vue'
import Add from '../components/add/Add.vue'
import addsql from '../components/addsql/addsql.vue'
import fixsql from '../components/fixsql/fixsql.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users },
        { path: '/all', component: All },
        { path: '/add', component: Add },
        { path: '/addsql', component: addsql },
        { path: '/fixsql', component: fixsql }
      ]
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  强制跳转

  if (to.path === '/login') return next()
  // 获取token
  const flag = window.sessionStorage.getItem('flag')
  if (!flag) return next('/login')
  next()
})

export default router
