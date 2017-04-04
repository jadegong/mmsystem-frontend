<template>
  <!--<img src="./assets/logo.png"/>-->
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  html {
    height: 100%
  }

  body {
    width: 100%;
    font-family: "Helvetica Neue", Helvetica, "Microsoft YaHei", Arial, "宋体", "Hiragino Sans GB", STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif;
    color: #646464;
    background-color: #fff;
  }

  * {
    padding: 0;
    margin: 0;
  }

  .log-reg-container {
    background: url("./assets/img/logRegBack.jpg") no-repeat center / cover;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .log-reg-content {
    position: absolute;
    width: 320px;
    padding: 10px 0;
    background: rgba(255, 255, 255, .9);
    border-radius: 3px;
    box-shadow: 0 0 4px 4px rgba(255, 255, 255, .9);
    margin: -160px -160px 0 0;
    top: 50%;
    right: 50%;
  }
  @media (min-width: 321px) {
    .log-reg-content {
      padding: 10px 5px;
    }
  }
  .log-reg-content .log-reg-content-title {
    margin-bottom: 15px;
    text-align: center;
  }
  @media (min-width: 768px) {
    .log-reg-content {
      right: 320px;
      margin: -160px 0 0;
    }
    /*.log-reg-content .log-reg-content-title {*/
      /*text-align: left;*/
    /*}*/
  }

</style>
