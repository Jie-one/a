import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import login from '@/components/login'
import main from '@/components/main.vue'
import p1 from '@/components/p1'
import p2 from '@/components/p2'
import p3 from '@/components/p3'
import p4 from '@/components/p4'
import p5 from '@/components/p5'
export default new Router({
  routes: [
    {
      path: '/',
      // name: 'login',
      component: login
    },
    {
      path: '/main',
      // name: 'main',
      component: main,
      children:[
        {
          path:'/main/p1',
          component:p1
        },
        {
          path:'/main/p2',
          component:p2
        },
        {
          path:'/main/p3',
          component:p3
        },
        {
          path:'/main/p4',
          component:p4
        },
        {
          path:'/main/p5',
          component:p5
        }
      ]
    }
  ]
})
