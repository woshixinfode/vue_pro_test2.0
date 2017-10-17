import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import VueResource from 'vue-resource';

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

//const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import secondcomponent from './component/secondcomponent.vue'
import routerthirdcomponent from './component/routertdirdcomponent.vue'
import formset from './component/form.vue'
import tab from './component/tab.vue'
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: routerthirdcomponent
    },
    {
      path: '/second',
      component: secondcomponent
    },
    {
      path: '/form',
      component: formset
    },
    {
      path: '/tab',
      component: tab
    }
  ]
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')


//new Vue({
//  el: '#app',
//  render: h => h(App)
//})
