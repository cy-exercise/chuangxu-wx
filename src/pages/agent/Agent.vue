<template>
  <div class="agent">
    <!--<Header title="我的代理" to="/agent"></Header>-->
    <div class="head-nav border-bottom">
      <!--<router-link to="/agent?type=nurse">-->
        <!--<div class="nav-item" :class="{is_selected: 'nurse'=== type}" @click="handleSwitch('nurse')">-->
          <!--<span class="item-content ">创序护考-->
            <!--<span class="bottom-line"></span>-->
          <!--</span>-->
        <!--</div>-->
      <!--</router-link>-->
      <!--<router-link to="/agent?type=medical">-->
        <!--<div class="nav-item" :class="{is_selected: 'medical'=== type}" @click="handleSwitch('medical')">-->

          <!--<span class="item-content ">创序医考-->
            <!--<span class="bottom-line"></span>-->
          <!--</span>-->
        <!--</div>-->
      <!--</router-link>-->
      <router-link to="/agent?type=bao">
        <div class="nav-item" :class="{is_selected: 'bao'=== type}" @click="handleSwitch('bao')">

          <span class="item-content ">创序医考宝
            <span class="bottom-line"></span>
          </span>
        </div>
      </router-link>
    </div>
    <AgentInfo :agent="agent" :brand="type" v-show="show"></AgentInfo>
  </div>
</template>

<script>
  // import Header from '../common/Header'
  import AgentInfo from '../agent/AgentInfo'
  import {getAgents} from '../../assets/js/api';
  export default {
    name: "Agent",
    components: {
      AgentInfo
    },
    data() {
      return {
        type: 'bao',
        brand_ids: {
          'nurse': '5946661e-d8a2-49be-9202-b231ca907739',
          'bao': '53b7715b-95cd-4d18-bc88-0f48dc5b4623',
          'medical': '23f2efa5-2cbe-4060-bbbb-79bc8a64481a'
        },
        ids_brand: {
          "5946661e-d8a2-49be-9202-b231ca907739": 'nurse',
          "53b7715b-95cd-4d18-bc88-0f48dc5b4623": 'bao',
          "23f2efa5-2cbe-4060-bbbb-79bc8a64481a": 'medical'
        },
        brand_id: '53b7715b-95cd-4d18-bc88-0f48dc5b4623',
        agent: {},
        agents: [],
        show: false
      }
    },
    methods: {
      handleSwitch(type) {
        this.type = type
        this.brand_id = this.brand_ids[type]
        let _agent = this.agents.find(agent => {
          return agent.brand_id === this.brand_id
        })
        if (_agent) {
          this.agent = _agent
        } else {
          this.agent = {}
        }
      },
      getAgents() {
        let user_id = this.$cookies.get('user_id');

        this.$ajax.get('/api/v1/agent').then(res => {
          if (res.data.data.data.length > 0) {
            this.agents = res.data.data.data;
            localStorage.setItem('agents', JSON.stringify(this.agents))
            this.setAgent();
          } else {

          }
          this.show = true
        }).catch(error => {

        })

        console.log(this.agent)
        console.log(this.agents)
      },
      //
      setAgent() {
        let agent = this.agents.find(agent => {
          return agent.brand_id === this.brand_id
        })

        if (agent) {
          this.agent = agent
        } else {
          this.agent =this.agents[0]
          this.brand_id = this.agent.brand_id
          this.type = this.ids_brand[this.brand_id]
        }
      }
    },
    mounted() {

    },
    created() {
      this.getAgents()
      // this.init()
    },
    watch:{
      $route(to,from){
        // console.log(to.path);
        // this.init()
      }
    },
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
  }
</style>
