<template>
    <div class="main-container">
        <mm-header></mm-header>
        <div class="main-content">
            <router-view></router-view>
        </div>
        <mm-side-nav></mm-side-nav>
    </div>
</template>

<script>
    import MmHeader from '../components/header';
    import MmSideNav from '../components/sideNav';

    export default {
      name: 'Modules',
      data() {
        return {};
      },
      components: {
        'mm-header': MmHeader,
        'mm-side-nav': MmSideNav,
      },
    };
</script>

<style>
    .main-container {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
    }
    .main-container .main-content {
        position: absolute;
        top: 65px;
        left: 200px;
        right: 0;
        bottom: 0;
    }
</style>
