import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/Login.vue';
import MainBox from '@/views/MainBox.vue';
import RoutersConfig from './config'
import store from '@/store';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/mainbox',
    name: 'mainbox',
    component: MainBox
    // mainbox中有子路由，要嵌套路由,根据权限动态的添加
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 动态添加路由
  // 给名称为mainbox的路由添加子路由
function configRouter () {
  RoutersConfig.forEach(item => {
    router.addRoute('mainbox', item);
  })

  store.commit('setGetterRouter', true);
}


// 路由拦截，在路由跳转之前会先走这里
/**
 * to: 即将进入的目标路由对象
 * from: 当前导航正要离开的路由对象
 * next: 调用该方法后，才能进入下一个钩子，或者进入目标路由
 */
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if(to.path === '/login' && !token){
    // 如果是登录页面，直接放行，但是同时也要考虑已经登录过了再直接访问登录页面也要跳转首页
    next();
  }else{
    // 如果不是登录页面，就判断是否登录，如果登录了就放行，否则就跳转到登录页面
    
    if(!token){
      next('/login');
    }else {
      console.log('token::', store.state);
      if(!store.state.isGetterRouter){
        // 第一次登录后配置路由
        configRouter();
        next({
          path: to.fullPath
        });
      }else {
        // 如果已经配置过路由，就直接放行 
        next();
      }
      
    }
  }
})

export default router
