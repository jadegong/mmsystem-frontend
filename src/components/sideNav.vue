<template>
    <div class="main-side-nav">
        <el-menu defaultActive="1" class="mm-el-menu">
            <!--<el-submenu index="1">-->
                <!--<template slot="title"><i class="el-icon-message"></i>Dashboard</template>-->
            <!--</el-submenu>-->
            <el-menu-item index="2" :route="navs[0]" :disabled="false"><i class="el-icon-menu"></i>Dashboard</el-menu-item>
            <el-menu-item index="3" :route="navs[1]" :disabled="false"><i class="el-icon-setting"></i>Account</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
  import ElMenu from 'element-ui/packages/menu/src/menu';
  import ElSubmenu from 'element-ui/packages/menu/src/submenu';
  import ElMenuItem from 'element-ui/packages/menu/src/menu-item';

  export default {
    name: 'mm-side-nav',
    components: { ElMenuItem, ElSubmenu, ElMenu },
    data() {
      return {
        navs: [
          { name: 'Dashboard', path: '/module/dashboard' },
          { name: 'Account', path: '/module/account' }, // stile not working
        ],
      };
    },
    methods: {},
  };
</script>

<style>
    .main-side-nav {
        position: fixed;
        top: 65px;
        left: 0;
        width: 200px;
        bottom: 0;
    }
    .main-side-nav .mm-el-menu {
        width: 200px;
        height: 100%;
    }
</style>
