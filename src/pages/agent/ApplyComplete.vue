<template>
  <div class="apply-complete">
    <div class="apply-complete-head">代理申请</div>
    <div class="step-block border-bottom">
      <StepWithdraw :step_end_name="step_name" :status="status"></StepWithdraw>
    </div>
    <div class="apply-foot">
      <div class="apply-title">代理申请</div>
      <div class="apply-date">2019/3/27 9:50</div>
    </div>
    <router-link to="/agent">
      <div class="button">完成</div>
    </router-link>
  </div>
</template>

<script>
  import StepWithdraw from  "../common/StepWithdraw"
  export default {
    name: "ApplyComplete",
    components: {
      StepWithdraw
    },
    data() {
      return {
        agents: {},
        status: 'doing',
        step_name: '我们会在两小时内为您解决'
      }
    },
    methods: {
      getAgents() {
        let user_id = localStorage.getItem('user_id')
        let query = `?user_id=${user_id}&status=3`
        this.$ajax.get('/api/v1/agent' + query).then(res => {
          console.log(res.data.data.length)
          if (res.data.data.length === 0) {
            this.status = 'doing'
          } else {
            this.status = 'done'
            this.step_name = '申请成功'
          }
        }).catch(error => {

        })
      }
    },
    created() {
      // this.getAgents()
    }
  }
</script>

<style scoped>
  .apply-complete-head {
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    font-size: .36rem;
    font-weight: 500;
  }
  .step-block {
    padding-top: .6rem;
    margin-left: .32rem;
    margin-right: .32rem;
  }
  .apply-foot {
    margin: .47rem .32rem;
  }
  .apply-title {
    float: left;
    color: #515151;
    font-size: .28rem;
    font-weight: 400;
  }
  .apply-date {
    float: right;
    color: #B5B5B5;
    font-size: .2rem;
    font-weight: 400;
  }
  .button {
    position: fixed;
    bottom: 1rem;
    height: .76rem;
    line-height: .76rem;
    border: 1px solid #448EF6;
    width: 4rem;
    text-align: center;
    left: 1.75rem;
    border-radius: .08rem;
    color: #448EF6;
    font-size: .28rem;
    font-weight: 400;
  }
</style>
