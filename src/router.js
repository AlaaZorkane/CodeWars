import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Shop from './views/Shop.vue'
import Teams from './views/Teams.vue'
import Actions from './views/Actions.vue'
import Scoreboard from './views/Scoreboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/connect',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Connect.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    },
    {
      path: '/actions',
      name: 'actions',
      component: Actions
    },
    {
      path: '/scoreboard',
      name: 'scoreboard',
      component: Scoreboard
    }
  ]
})
