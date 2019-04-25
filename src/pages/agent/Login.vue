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
          this.$cookies.set('user_id', res.data.data.id);
          localStorage.setItem('user', res.data.data);
          self.getAgents(res.data.data.id);
        })
      },
      getAgents() {
        this.$ajax.get('/api/v1/agent').then(res => {
          if (res.data.data.data) {
            // let agents  = res.data.data.data.map(function (agent) {
            //   return {
            //     id: agent.id,
            //     brand_id: agent.brand_id,
            //     phone: agent.phone
            //   }
            // })
            localStorage.setItem('agents', JSON.stringify(res.data.data.data))
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
