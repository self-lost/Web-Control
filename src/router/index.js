import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import initlist from '@/components/initList'
import ChartsList from '@/components/ChartsList'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'initlist',
      component: initlist
    },
    {
      path: '/charts',
      name: 'charts',
      component: ChartsList
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
