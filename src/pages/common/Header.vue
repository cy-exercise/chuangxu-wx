<template>
  <div class="header-wrapper">
    <header class="header">
      <h1>{{title}}</h1>
      <i @click="back" class="cubeic-back"></i>
    </header>
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
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .header-wrapper
    height .8rem
  .header
    position: fixed
    top 0
    left 0
    height .8rem
    width 100%
    line-height: .8rem
    text-align: center
    background-color: #F8F8F8
    /*box-shadow: 0 1px 6px #ccc*/
    -webkit-backface-visibility: hidden
    backface-visibility: hidden
    z-index: 5
    h1
      font-size .36rem
      font-weight 500
      color #515151
    .cubeic-back
      position: absolute
      top: 0
      left: 0
      padding: 0 15px
      font-size .5rem
      color: #515151
</style>
