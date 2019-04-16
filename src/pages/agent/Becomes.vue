<template>
  <div class="becomes">
    <Header title="申请成为代理" to="/user"></Header>
    <div class="becomes-wrapper">
      <div class="block">
        <div class="item-title border-bottom">选择您想代理的产品</div>
        <div class="item-box">
          <div class="item">
            <label style="height: 100%;width: 100%;">
              <div class="item-check">
                <span class="checkbox__inner"></span>
                <input type="checkbox" class="checkbox__original" v-model="cc">
              </div>
              <div class="item-content border-bottom">
                <div class="item-text">创序护考代理</div>
                <div class="item-logo"></div>
              </div>
            </label>

          </div>
          <div class="item">
            <div class="item-check">
              <input type="checkbox" v-model="abc" @click="a">
            </div>
            <div class="item-content border-bottom">
              <div class="item-text">创序护考代理</div>
              <div class="item-logo"></div>
            </div>
          </div>
        </div>
      </div>
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
        abc: false,
        cc: ''
      }
    },
    methods: {
      a() {
        console.log(this.abc)
        console.log(this.cc)
      }
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
  }
  .checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
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
</style>
