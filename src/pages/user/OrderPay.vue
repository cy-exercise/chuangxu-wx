<template>
  <div class="wrapper">
    <Header title="我的订单" to="/user/order?status=wait"></Header>
    <div class="order-item">
      <img src="/static/images/logo.png" alt="" class="logo">
      <div class="order-title">{{project.title}}</div>
      <div class="price">￥{{project.price}}</div>
      <div>
        <div class="left">
          <div class="index">23%</div>
          <div class="index-title">抄袭指数</div>
        </div>
        <div class="right">
          <div class="word-number">1673</div>
          <div class="word">字数</div>
        </div>
      </div>
    </div>
    <div style="height: .8rem;"></div>
    <div class="button" @click="handlePay">立即支付</div>
  </div>
</template>

<script>
  import Header from '../common/Header';
  import { MessageBox } from 'mint-ui';
  export default {
    name: "OrderPay",
    data() {
      return {
        project: {},
        order_id: ''
      }
    },
    components: {
      Header
    },
    methods: {
      handlePay() {
        let config = {
          headers: {
            Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI5NWI5MTY3NmM0MjBlNDZiNzM0ODhlYjMzMzk1ZDljODg3NWY4OGU0Njg4NTM1MTJmMjZmMThkZmZhODE1ZjVkNWQ2NzU1ZjU3ODJjZDMzIn0.eyJhdWQiOiI0IiwianRpIjoiMjk1YjkxNjc2YzQyMGU0NmI3MzQ4OGViMzMzOTVkOWM4ODc1Zjg4ZTQ2ODg1MzUxMmYyNmYxOGRmZmE4MTVmNWQ1ZDY3NTVmNTc4MmNkMzMiLCJpYXQiOjE1NTUyOTgyNDgsIm5iZiI6MTU1NTI5ODI0OCwiZXhwIjoxNTU2NTk0MjQ4LCJzdWIiOiI5MTQwMTkyMy1jM2M2LTRlYmYtOTYyMS1hOTliOGI5MGU0YjEiLCJzY29wZXMiOltdfQ.HN4ZEs80DZqGYOqSbwW8J8KvgXCTIio0bQJxWiR6_O8qr-cxnMs1Zd-xq-H2fWLcGswmEivb3CJXP9jj1sbdEsQ1u3x6kor4R7Cp18YkdsR60QIjyf54tjZWk0ibzjmM4RyoOA64m82-1Q8uRSjbFssP4YS8-UNjxN3Qj2t5sSjqG-JHIWGUyyoxwD5W9-Pd0bhU6SfJDlugtVTOkZYxoTO2fT0AKQX-9Nwnv9uQZTRStjCH-Bqm8O6s732ezDKgFX6OE6MTfgQSpyIG-kthFeX5MRML-Fv8xuTZNPVhyNEKtXIAM2Nn0o3YQRduq7OVNh7kaW6YMt0tZKjQzP8Qbwv8MqIVkQIVk6_KT-DghTEH_MRmQs_5EwU3M2VDqWOTYwEwNjSNm1uUp91WOHYX00lM1j2oZi68_dUMF5FmXlS18FiQmUC8GruakeTR114ZaZDUG9VYlviVZUGGWGMo7lX3OpkCaD8l5J4NFg-ir4X_1_MllTFTwiFxUza9Sg6W99N4tIdQfSqK1h2eflPzZhAX3bM1_kTfS7QuROiwuYT-gAaJJb7AhTQShGB6T7Y83nWvpL4RoMBZg1D8qi1l3FPyYaGXF69WkmZpi8X_f_tP5RrnBOOVWUM0lVm12S-lIk8ChsSeUZgC--R_pZz47CR3X75OfFL6db1SFRfBH7c'
          }
        };
        let data = {
          pay_type: 21
        };
        this.$ajax.put('http://web.chuangxu.com/api/order/' + this.order_id + '/pay', data, config).then(function (response) {
          // console.log(response);
          //
          if (response.data.code === 200) {
            this.$router.push('/user/pay_success')
          } else  {

          }
        })
          .catch(function (error) {
            MessageBox.alert('支付失败')
          })
      },
      init() {
        let query = this.$route.query;
        this.project.title = query['title'];
        this.project.price = query['price'];
        this.order_id = this.$route.params.id
      }
    },
    mounted() {
      // this.init();
    },
    beforeMount() {
      this.init();
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    background: #F8F8F8;
  }
  .order-item {
    height: 5.69rem;
    position: relative;
    text-align: center;
    background: #ffffff;
  }
  .order-title {
    font-size: .24rem;
    margin-top: .2rem;
    font-weight: 500;
  }
  .price {
    font-size: .5rem;
    margin-top: .33rem;
  }
  .left {
    position: absolute;
    left: .32rem;
    bottom: .4rem;
    height: 1.28rem;
    width: 3.23rem;
    background: #F8F8F8;
    border-radius: .04rem;
  }
  .index {
    font-size: .38rem;
    margin-top: .23rem;
  }
  .index-title {
    font-size: .2rem;
    color: #B5B5B5;
    margin-top: .2rem;
  }
  .right {
    position: absolute;
    height: 1.28rem;
    width: 3.23rem;
    right: .32rem;
    bottom: .4rem;
    background: #F8F8F8;
    border-radius: .04rem;
  }
  .word-number {
    font-size: .38rem;
    margin-top: .23rem;
  }
  .word {
    font-size: .2rem;
    color: #B5B5B5;
    margin-top: .2rem;
  }
  .logo {
    width:60px;
    height:60px;
    margin-top: .6rem;
  }
  .button {
    height: .96rem;
    line-height: .96rem;
    text-align: center;
    color: #ffffff;
    background: #28B2FE;
    margin: 0 .32rem;
    border-radius: .1rem;
    font-weight: 500;
    font-size: .3rem;
  }
</style>
