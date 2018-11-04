import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BulletinBoard from '@/components/BulletinBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/BulletinBoard',
      name: 'BulletinBoard',
      component: BulletinBoard
    },
  ]
})
