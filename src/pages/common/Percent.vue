<template>
  <div style="height: 100%;">
    <!-- 遮盖层 -->
    <transition name="fade">
      <div class="cover-layer" v-if="show"></div>
    </transition>
    <transition name="move">
    <div class="percent-wrapper" v-if="show">
      <div class="percent-head border-bottom">
        <div class="percent-title">设置项目的加价提成</div>
        <div class="percent-close" @click="handleClose">取消</div>
      </div>
      <ul class="percent-block">
        <li v-for="(percent, index) in percents" :class="{selected: percent.selected}" @click="handleSelect(index)">
          <div class="percent-item border-bottom">
            <div class="percent-number">{{percent.num}}</div>
            <div style="height: .96rem;line-height: .96rem; float: right;">
              <img  class="selected-icon" src="/static/images/gou.png" alt="" v-show="percent.selected">
            </div>
          </div>
        </li>
      </ul>
    </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Percent",
    props: {
      show: {
        default: false
      }
    },
    data() {
      return {
        percents: [
          {
            num: '10%',
            selected: false
          },    {
            num: '20%',
            selected: false
          },    {
            num: '30%',
            selected: false
          },    {
            num: '40%',
            selected: false
          },    {
            num: '50%',
            selected: false
          }
        ]
      }
    },
    methods: {
      handleSelect(index) {
        let before = this.percents.findIndex(item => {
          return item.selected === true
        });
        if (this.percents[before]) {
          this.percents[before].selected = false;
        }
        this.percents[index].selected = true;
        // 把选择的值传给父组件
        this.$emit('addSelectEvent', this.percents[index].num)
      },
      handleClose() {
        this.$emit('closeEvent')
      }
    }
  }
</script>

<style scoped>
  .cover-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,0.4);
    z-index: 1;
  }
  .percent-wrapper {
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 2;
    background: #ffffff;
  }
  .percent-head {
    height: .75rem;
    width: 100%;
    line-height: .75rem;
    padding-left: .32rem;
    padding-right: .32rem;
    box-sizing: border-box;
  }

  .percent-title {
    float: left;
    color: #B5B5B5;
    font-size: .24rem;
    font-weight: 500;
  }
  .percent-close {
    float: right;
    font-size: .3rem;
    font-weight: 400;
    color: #B5B5B5;
  }
  .percent-block {
    padding-left: .32rem;
  }
  .percent-block li {
    height: .96rem;
    line-height: .96rem;
  }
  .percent-item {
    /*height: .96rem;*/
    /*line-height: .96rem;*/
    padding-right: .32rem;
  }
  .percent-number {
    float: left;
    color: #515151;
    font-size: .3rem;
    font-weight: 400;
  }
  .selected .percent-number {
    color: #28B2FE;
  }
  .selected-icon {

    height: .3rem;
    width: .36rem;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .move-enter-active, .move-leave-active {
    transition:all .3s linear;
    transform: translate3d(0,0,0);
  }
  .move-enter, .move-leave-to {
    transform: translate3d(0,100%,0);
  }
  .move-transition{
    transition:all 1.8s linear;
    transform: translate3d(0,0,0);
  }
  .move-enter,.move-leave-to{
    transform: translate3d(0,100%,0);
  }
</style>
