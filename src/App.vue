<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul class="nav_li">
      <li><router-link to="/first">点我跳转到第一页</router-link></li>
      <li><router-link to="/second">点我跳转到第二页</router-link></li>
      <li><router-link to="/form">点我跳转到form</router-link></li>
      <li><router-link to="/tab">点我跳转到tab</router-link></li>
    </ul>
    <!--<firstcomponent></firstcomponent>-->
    <!--<tab></tab>-->
    <!--<formset></formset>-->
    <!--<directiveDemo></directiveDemo>-->

    <router-view class="view"></router-view>
    <!--<ul>-->
      <!--<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>-->
      <!--<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>-->
      <!--<li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>-->
      <!--<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>-->
    <!--</ul>-->
    <!--<h2>Ecosystem</h2>-->
    <!--<ul>-->
      <!--<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>-->
      <!--<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>-->
      <!--<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>-->
      <!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>-->
    <!--</ul>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import firstcomponent from './component/firstcomponent.vue'
  import secondcomponent from './component/secondcomponent.vue'
  import tab from './component/tab.vue'
  import formset from './component/form.vue'
  import directiveDemo from './component/directiveDemo.vue'
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
  components: { firstcomponent, secondcomponent,tab,formset,directiveDemo }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

.nav_li>li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
