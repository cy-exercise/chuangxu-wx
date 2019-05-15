<template>
    <div class="empty">
      <div class="empty-wrapper">
        <img :src="icon.url" alt="" class="empty-icon">
      </div>
      <div class="empty-title">{{info}}</div>
    </div>
</template>

<script>
  export default {
    name: "Empty",
    props: {
      info: {
        default: '暂无消息'
      },
      icon: {
        url: require('@/assets/img/empty.png')
      }
    },
    data() {
      return {
      }
    },
   mounted() {
   }
  }
</script>

<style scoped>
  .empty {
    height: 12.66rem;
    background: #ffffff;
  }
  .empty-wrapper {
    padding-top: 4.57rem;
    text-align: center;

    z-index: 1;
  }
  .empty-icon {
    width: .88rem;
    height: 1.01rem;
  }
  .empty-title {
    height: .5rem;
    line-height: .5rem;
    font-size: .36rem;
    font-weight: 500;
    color: #B5B5B5;
    margin-top: .22rem;
    text-align: center;
  }
</style>
