<template>
  <div class="becomes">
    <Header title="申请成为代理" to="/bind_phone"></Header>
    <div class="becomes-wrapper">
      <div class="block">
        <div class="item-title border-bottom">选择您想代理的产品</div>
        <div class="item-box">
          <div class="item" v-if="nurse_checked">
            <label class="">
              <div class="item-check">
                <span class="checkbox__input" :class="{'is-checked': nurse}">
                  <span class="checkbox__inner"></span>
                  <input type="checkbox" class="checkbox__original" @click="handleCheck" v-model="nurse" value="nurse">
                </span>
              </div>
              <div class="item-content border-bottom">
                <div class="item-text">创序护考代理</div>
                <div class="item-logo">
                  <img src="/static/images/logo-nurse.png" alt="">
                </div>
              </div>
            </label>
          </div>
          <div class="item" v-if="medical_checked">
            <label class="">
              <div class="item-check">
                 <span class="checkbox__input" :class="{'is-checked': medical}">
                  <span class="checkbox__inner"></span>
                  <input type="checkbox" class="checkbox__original" v-model="medical"  value="medical">
                </span>
              </div>
              <div class="item-content border-bottom">
                <div class="item-text">创序护考代理</div>
                <div class="item-logo"></div>
              </div>
            </label>
          </div>
          <div class="item" v-if="bao_checked">
            <label class="">
              <div class="item-check">
                 <span class="checkbox__input" :class="{'is-checked': bao}">
                  <span class="checkbox__inner"></span>
                  <input type="checkbox" class="checkbox__original" v-model="bao" value="bao">
                </span>
              </div>
              <div class="item-content border-bottom">
                <div class="item-text">创序医考宝代理</div>
                <div class="item-logo">
                  <img src="/static/images/logo-bao.png" alt="">
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div style="height: 1.34rem;"></div>
      <div class="button" :class="{next: nurse || medical || bao}" @click="handleNext">下一步</div>
    </div>
  </div>
</template>

<script>
  import Header from '../common/Header'
  export default {
    name: "Becomes",
    components: {
      Header
    },
    data() {
      return {
        nurse: false,
        medical: false,
        bao: false,
        next_to: '/register',
        brand_id_map: {
          'nurse': '5946661e-d8a2-49be-9202-b231ca907739',
          'bao': '53b7715b-95cd-4d18-bc88-0f48dc5b4623',
          'medical': '23f2efa5-2cbe-4060-bbbb-79bc8a64481a'
        },
        id_brand: {

        },
        nurse_checked: true,
        medical_checked: true,
        bao_checked: true,
      }
    },
    methods: {
      handleCheck() {
        //alert(1)
        // console.log(this.abc)
      },
      handleNext() {
        if (this.nurse || this.medical || this.bao) {
          let phone = this.$route.query.phone
          this.$router.push({
            path: 'register',
            query: { brand_ids: this.getBrandIds(), phone: phone}
          })
        }
      },
      getBrandIds() {
        let brand_ids = [];
        if (this.medical) {
          brand_ids.push(this.brand_id_map['medical'])
        }
        if (this.nurse) {
          brand_ids.push(this.brand_id_map['nurse'])
        }
        if (this.bao){
          brand_ids.push(this.brand_id_map['bao'])
        }
        return brand_ids.join()
      },
      brandCheck() {
        // 判断之前是否已经选过
        let agents = JSON.parse(localStorage.getItem('agents'))
        agents.map(agent => {
          if (this.brand_id_map.nurse === agent.brand_id){
            this.nurse_checked = false
          }
          if (this.brand_id_map.bao === agent.brand_id){
            this.bao_checked = false
          }
          if (this.brand_id_map.medical === agent.brand_id){
            this.medical_checked = false
          }
        })
      },
    },
    created() {
      this.brandCheck()
    }
  }
</script>

<style scoped>
  .becomes {
    height: 100%;
  }
  .becomes-wrapper {
    background: #F8F8F8;
    width: 100%;
    position: absolute;
    top: .8rem;
    bottom: 0;
    left: 0;
    padding-left: .32rem;
    padding-right: .32rem;
    box-sizing: border-box;
  }
  .block {
    width: 100%;
    background: #FFFFFF;
    border-radius: .1rem;
  }
  .item-title {
    height: .75rem;
    line-height: .75rem;
    color: #B5B5B5;
    font-size: .24rem;
    padding-left: .2rem;
  }
  .item {
    height: .96rem;
  }
  .item-check {
    float: left;
    height: .96rem;
    line-height: .96rem;
    margin-left: .2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item-check input {
    background: #ffffff;
    border: 1px solid #28B2FE;
  }
  .item-content {
    float: right;
    width: 6.14rem;
    height: .96rem;
    line-height: .96rem;
  }
  .item-text {
    float: left;
    color: #515151;
    font-size: .3rem;
    font-weight: 400;
  }
  .item-logo {
    float: right;
    height: .6rem;
    width: .6rem;
    background: #E6E6E6;
    margin-right: .2rem;
    margin-top: .19rem;
    border-radius: .04rem;
    display: flex;
  }
  .item-logo img {
    height: .6rem;
    width: .6rem;
  }
  .checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: .32rem;
    height: .32rem;
    background-color: #fff;
    z-index: 1;
    transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
  }
  .checkbox__original {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
  }
  .checkbox__input ,.is-checked ,.checkbox__inner {
    /*background-color: #409eff;*/
    border-color: #409eff;
  }
  .checkbox__inner:after {
    box-sizing: content-box;
    content: "";
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 8px;
    left: 5px;
    position: absolute;
    top: 1px;
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;
    transform-origin: center;
  }

  .checkbox__input.is-checked .checkbox__inner {
    background-color: #409eff;
    border-color: #409eff;
  }

  .checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    /*display: inline-block;*/
    line-height: 1;
    position: relative;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .checkbox__input.is-checked .checkbox__inner:after {
    transform: rotate(45deg) scaleY(1);
  }

  .button {
    background: rgba(68,142,246,0.5);
    border-radius: .08rem;
    margin: 0 auto;
    color: #ffffff;
    height: .76rem;
    line-height: .76rem;
    text-align: center;
    width: 4.96rem;
    font-size: .28rem;
  }
  .next {
    background: rgba(68,142,246,1);
  }

</style>
