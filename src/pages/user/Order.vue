<template>
  <div style="height: 100%" >
    <Header :title="title" to="/user"></Header>
    <Empty v-show="show_empty"></Empty>
    <div class="wrapper" v-show="!show_empty">
      <ul class="quote-item">
        <li @click="handleRoute(item)" v-for="item in order_list">
          <div class="order-title border-bottom">
            <span class="title">{{item.title}}</span>
            <span class="price">￥{{item.order.price}}</span>
          </div>
          <div class="people">
            <span class="order-date">{{item.order.created_at}}</span>
            <span class="goto-price">{{action_name}}
                <img src="@/assets/img/arrow_right.png" alt="">
              </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Header from '../common/Header'
  import Empty from '../common/Empty'
  export default {
    name: "UserOrder",
    components: {
      Header,
      Empty
    },
    data() {
      return {
        action_name: '去付款',
        action_url: '/user/order',
        url_map: {
          wait: '/user/order/pay',
          doing: '/user/item_info/doing',
          done: '/user/item_info/complete'
        },
        name_map: {
          wait: '去付款',
          doing: '查看详情',
          done: '查看详情',
        },
        title: '待报价  ',
        title_map: {
          wait: '待付款',
          doing: '进行中',
          done: '完成的'
        },
        show_empty: false,
        order_list: [],
        status_map: {
          2: 'wait',
          4: 'doing',
          5: 'done'
        },
        status: ''
      }
    },
    methods: {
      handleRoute(item) {

        if (this.status == 2) {

          this.$router.push(`/user/order/${item.order.id}/pay` + `?title=${item.title}&price=${item.order.price}`)
        } else  {
          this.$router.push(this.action_url + `?title=${item.title}&price=${item.order.price}`)
        }
      },
      init(){
        this.status = this.$route.query.status;
        let status = this.status_map[this.status];
        if (this.url_map[status]) {
          this.action_url = this.url_map[status]
        }

        if (this.name_map[status]) {
          this.action_name = this.name_map[status]
        }

        if (this.title_map[status]) {
          this.title = this.title_map[status]
        }
      },
      getItem() {
        let page = 1;
        let status = this.status;
        let config = {
          headers: {
            Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI5NWI5MTY3NmM0MjBlNDZiNzM0ODhlYjMzMzk1ZDljODg3NWY4OGU0Njg4NTM1MTJmMjZmMThkZmZhODE1ZjVkNWQ2NzU1ZjU3ODJjZDMzIn0.eyJhdWQiOiI0IiwianRpIjoiMjk1YjkxNjc2YzQyMGU0NmI3MzQ4OGViMzMzOTVkOWM4ODc1Zjg4ZTQ2ODg1MzUxMmYyNmYxOGRmZmE4MTVmNWQ1ZDY3NTVmNTc4MmNkMzMiLCJpYXQiOjE1NTUyOTgyNDgsIm5iZiI6MTU1NTI5ODI0OCwiZXhwIjoxNTU2NTk0MjQ4LCJzdWIiOiI5MTQwMTkyMy1jM2M2LTRlYmYtOTYyMS1hOTliOGI5MGU0YjEiLCJzY29wZXMiOltdfQ.HN4ZEs80DZqGYOqSbwW8J8KvgXCTIio0bQJxWiR6_O8qr-cxnMs1Zd-xq-H2fWLcGswmEivb3CJXP9jj1sbdEsQ1u3x6kor4R7Cp18YkdsR60QIjyf54tjZWk0ibzjmM4RyoOA64m82-1Q8uRSjbFssP4YS8-UNjxN3Qj2t5sSjqG-JHIWGUyyoxwD5W9-Pd0bhU6SfJDlugtVTOkZYxoTO2fT0AKQX-9Nwnv9uQZTRStjCH-Bqm8O6s732ezDKgFX6OE6MTfgQSpyIG-kthFeX5MRML-Fv8xuTZNPVhyNEKtXIAM2Nn0o3YQRduq7OVNh7kaW6YMt0tZKjQzP8Qbwv8MqIVkQIVk6_KT-DghTEH_MRmQs_5EwU3M2VDqWOTYwEwNjSNm1uUp91WOHYX00lM1j2oZi68_dUMF5FmXlS18FiQmUC8GruakeTR114ZaZDUG9VYlviVZUGGWGMo7lX3OpkCaD8l5J4NFg-ir4X_1_MllTFTwiFxUza9Sg6W99N4tIdQfSqK1h2eflPzZhAX3bM1_kTfS7QuROiwuYT-gAaJJb7AhTQShGB6T7Y83nWvpL4RoMBZg1D8qi1l3FPyYaGXF69WkmZpi8X_f_tP5RrnBOOVWUM0lVm12S-lIk8ChsSeUZgC--R_pZz47CR3X75OfFL6db1SFRfBH7c'
          }
        };
        let self = this;
        this.$ajax.get('http://web.chuangxu.com/api/project' + `?status=${status}`, config).then(function (response) {
          //console.log(response.data)
          if (response.data.data.length !== 0) {
            self.order_list = response.data.data;
            self.title  = self.title + `（${self.order_list.length})`
          } else  {
            self.show_empty = true;
          }

        })
      }
    },
    mounted() {
      this.init();
      this.getItem()
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    background: #F8F8F8;
    padding-left: .32rem;
    padding-right: .32rem;
    padding-top: .2rem;
    text-align: center;
  }
  .quote-item {

  }
  .quote-item li {
    height: 1.73rem;
    margin-bottom: .2rem;
    background: #ffffff;
    border-radius: .1rem;
  }
  .order-title {
    height: .96rem;
    line-height: .96rem;
    padding-left: .2rem;
    padding-right: .2rem;
  }
  .order-title, .people {
    border-radius: .2rem;
  }
  .order-title .title {
    display: inline-block;
    float: left;
    font-size: .3rem;
    color: #515151;
  }
  .order-title .price {
    display: inline-block;
    float: right;
    color: #28B2FE;
    font-size: .36rem;
  }
  .people {
    height: .76rem;
    line-height: .76rem;
    padding-left: .2rem;
    padding-right: .2rem;
    text-align: left;
  }
  .people img {
    height: .4rem;
    width: .4rem;
  }
  .people .order-date {
    font-size: .24rem;
    color: #B5B5B5;
  }
  .people .goto-price {
    display: inline-block;
    float: right;
    font-size: .24rem;
    color: #28B2FE;
  }
  .goto-price img {
    margin-left: .23rem;
    width: .31rem;
    height: .26rem;
  }
  .complete-content {
    display: inline-block;
    float: right;
    color: #B5B5B5;
    font-size: .24rem;
    font-weight: 500;
  }
</style>
