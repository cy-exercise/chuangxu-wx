<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      loginCheck() {
        // 判断当前页页是否为登录页
        if (this.$route.path === '/login') return;
        const agents = localStorage.getItem('agents')
        const user = localStorage.getItem('user')
        if (!this.$cookies.get('access_token') || !agents || !user) {
          let path = this.$route.path
          window.location.href = window.baseURL + '/m/auth/weixin/login' + `?target_url=${path}`
        }
      }
    },
    created() {
      this.loginCheck()
    }
  }
</script>

<style>
#app {
  height: 100%;
}
body, html {
  width:100%;
  height:100%;
}
</style>
