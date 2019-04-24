<template>
    <div></div>
</template>

<script>
  export default {
    name: "Login",
    methods: {
      login() {
        const access_token = this.$route.query.access_token;

        this.$cookies.set('access_token', access_token);
        this.$ajax.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
        this.getUserInfo(access_token);
        //this.$router.push('/salary')
      },
      getUserInfo(access_token) {
        let self = this;
        this.$ajax.post('/api/v1/user/info').then(res => {
          //this.$cookies.set('user', res.data.data)
          localStorage.setItem('user', JSON.stringify(res.data.data))
          this.$cookies.set('user_id', res.data.data.id);
          this.$cookies.set('user', res.data.data);
          self.getAgents(res.data.data.id);
        })
      },
      getAgents(user_id) {
        let query = `?user_id=${user_id}&status=0`
        this.$ajax.get('/api/v1/agent' + query).then(res => {
          if (res.data.data) {
            let agents  = res.data.data.map(function (agent) {
              return {
                id: agent.id,
                brand_id: agent.brand_id
              }
            })
            this.$cookies.set('agents', JSON.stringify(agents))
            localStorage.setItem('agents', JSON.stringify(agents))
          }
        })

      }
    },
    created() {
      this.login()
    }
  }
</script>

<style scoped>

</style>
