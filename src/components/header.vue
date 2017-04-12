<template>
    <div class="main-header">
        <div class="mm-header-icon">
            <span class="logo">材料管理系统</span>
        </div>
        <div class="mm-header-content">
            <div class="header-content-block">
                <!--<el-dropdown trigger="click" @command="handleCommand">-->
                    <!--<span class="el-dropdown-link">-->
                        <!--<i class="el-icon-settings"></i>-->
                    <!--</span>-->
                    <!--<el-dropdown-menu slot="dropdown">-->
                        <!--<el-dropdown-item command="account">账户详情</el-dropdown-item>-->
                        <!--<el-dropdown-item command="logout">退出登陆</el-dropdown-item>-->
                    <!--</el-dropdown-menu>-->
                <!--</el-dropdown>-->
            </div>
        </div>
    </div>
</template>

<script>
//  import ElDropdown from "element-ui/packages/dropdown/src/dropdown";
//  import ElDropdownItem from "element-ui/packages/dropdown/src/dropdown-item";
//  import ElDropdownMenu from "element-ui/packages/dropdown/src/dropdown-menu";
  export default {
    name: 'mm-header',
//    components: { ElDropdownMenu, ElDropdownItem, ElDropdown },
    methods: {
      handleCommand(action) {
        switch (action) {
          case 'account':
            this.$router.push('/modules/account');
            break;
          case 'logout':
            // todo logout
            break;
          default:
            break;
        }
      },
    },
  };
</script>

<style>
    .main-header {
        position: fixed;
        top: 0;
        width: 100%;
        left: 0;
        height: 65px;
        -webkit-box-shadow: 0 2px 2px #000;
        -moz-box-shadow: 0 2px 2px #000;
        box-shadow: 0 2px 2px #000;
        padding: 0 15px;
        z-index: 1;
    }
    .main-header .mm-header-icon {
        float: left;
        height: 100%;
    }
    .main-header .mm-header-icon .logo {
        display: block;
        width: 130px;
        height: 100%;
        font-size: 16px;
        font-weight: bold;
        line-height: 65px;
    }
    .main-header .mm-header-content {
        float: right;
        height: 100%;
    }
    .main-header .mm-header-content .header-content-block {}
    .main-header .mm-header-content .el-dropdown-link {
        font-size: 20px;
    }
</style>
