<template>
  <div class="home-box">
    主页
    <br>
    <a-button>按钮</a-button>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    created() {
      console.log('home');
    },
  };
</script>

<style scoped lang="less">
  .home-box {}
</style>
