<template>
  <div class="agent">
    <Header title="我的代理" to="/agent"></Header>
    <div class="head-nav border-bottom">
      <router-link to="/agent/1/agent_info">
        <div class="nav-item" :class="{is_selected: 'nurse'=== type}" @click="handleSwitch('nurse')">
          <span class="item-content ">创序护考
            <span class="bottom-line"></span>
          </span>
        </div>
      </router-link>
      <router-link to="/agent/2/agent_info">
        <div class="nav-item" :class="{is_selected: 'medical'=== type}" @click="handleSwitch('medical')">

          <span class="item-content ">创序医考
            <span class="bottom-line"></span>
          </span>
        </div>
      </router-link>
      <router-link to="/agent/3/agent_info">
        <div class="nav-item" :class="{is_selected: 'bao'=== type}" @click="handleSwitch('bao')">

          <span class="item-content ">创序医考宝
            <span class="bottom-line"></span>
          </span>
        </div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '../common/Header'
  export default {
    name: "Agent",
    components: {
      Header
    },
    data() {
      return {
        type: 'nurse'
      }
    },
    methods: {
      handleSwitch(type) {
        this.type = type
      }
    }
  }
</script>

<style scoped>
  .agent {
    height: 100%;
    background: #F8F8F8;
  }
  .head-nav {
    height: .93rem;
    line-height: .93rem;
    display: flex;
    background: #ffffff;
  }
  .head-nav a {
    flex: 1;
  }
  .nav-item {
    text-align: center;
    color: #B5B5B5;
    font-size: .24rem;
    font-weight: 500;
  }
  .item-content {
    display: inline-block;
    position: relative;
    height: .93rem;
    box-sizing: border-box;
    /*margin-bottom: 2px;*/
    text-align: center;
  }
  /*.item-content:after{*/
    /*content: "";*/
    /*position: absolute;*/
    /*display: inline-block;*/
    /*width: 1rem;*/
    /*bottom: 1;*/
    /*height: 1px;*/
    /*background: rebeccapurple;*/
  /*}*/
  .nav-item.is_selected {
    color: #448EF6;
  }
  .is_selected .item-content {
    /*border-bottom: 2px solid #448EF6;*/

  }
  .is_selected .bottom-line {
    position: absolute;
    display: inline-block;
    width: .4rem;
    left: 50%;
    margin-left: -.2rem;
    bottom: 0;
    height: 2px;
    background: #448EF6;
    /*border-bottom: 2px solid #448EF6;*/
  }
</style>
