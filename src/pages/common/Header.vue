<template>
    <!--<div class="header" :class="{is_white: is_white}">-->
      <!--&lt;!&ndash;<mt-header fixed :title="title">&ndash;&gt;-->
        <!--&lt;!&ndash;<router-link :to="to" slot="left">&ndash;&gt;-->
          <!--&lt;!&ndash;<mt-button icon="back"></mt-button>&ndash;&gt;-->
        <!--&lt;!&ndash;</router-link>&ndash;&gt;-->
      <!--&lt;!&ndash;</mt-header>&ndash;&gt;-->
      <!--<i class="cubeic-back"></i>-->
    <!--</div>-->
  <div class="cube-item border-bottom-1px" >
    <router-link class="link" to="component.path"><i
      class="cubeic-arrow"></i>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props: {
      title: {
        default: '个人中心'
      },
      to: {
        default: '/agent'
      },
      is_white: {
        default: false
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .header {
    display: flex;
    height: .8rem;
    padding-left: .39rem;
  }
  .is_white .mint-header {
    background: #ffffff;
  }
  .mint-header {
    background: #F8F8F8;
    color: #515151;
    font-size: .36rem;
  }

  >>> .mintui {
    font-size: .4rem;
  }
  .icon-return {
    display: inline-block;
    /*background: url("/static/images/return_normal.png");*/
    color: rebeccapurple;
    height: .36rem;
    width: .21rem;
    /*background-size: 100% 100%;*/
  }
  .cubeic-back {
    font-size: .28rem;
  }
</style>
