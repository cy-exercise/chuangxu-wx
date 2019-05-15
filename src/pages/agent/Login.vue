<template>
    <div>
      <div class="login">登录中...</div>
    </div>
</template>

<script>
  export default {
    name: "Login",
    methods: {
      login() {
        const access_token = this.$route.query.access_token;

        this.$cookies.set('access_token', access_token);
        this.$ajax.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
        this.getUserInfo();
      },
      getUserInfo() {
        let self = this;
        this.$ajax.post('/api/v1/user/info').then(res => {
          this.$cookies.set('user_id', res.data.data.id);
          localStorage.setItem('user', JSON.stringify(res.data.data));
          self.getAgents(res.data.data.id);
        })
      },
      getAgents() {
        this.$ajax.get('/api/v1/agent').then(res => {
          if (res.data.data.data) {
            localStorage.setItem('agents', JSON.stringify(res.data.data.data))
          }
          let path = this.$route.query.target_url
          this.$router.push(`${path}`)
        })

      }
    },
    created() {
      this.login()
    }
  }
</script>

<style scoped>
  .login {
    position: fixed;
    bottom: 0;
    top: .8rem;
    left: 0;
    right: 0;
    text-align: center;
    font-size: .36rem;
  }
</style>
