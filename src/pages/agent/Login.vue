<template>

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
        this.$router.push('/salary')
      },
      getUserInfo(access_token) {
        this.$ajax.post('/api/v1/user/info').then(res => {
          //console.log(res.data)
          this.$cookies.set('user', res.data.data)
        })
        //console.log(this.$cookies.get('user').phone)
      }
    },
    beforeMount() {
      this.login()
    }
  }
</script>

<style scoped>

</style>
