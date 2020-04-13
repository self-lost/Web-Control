<template>
  <div id="app">
    <Layout :style="{height: '100%'}">
      <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu :active-name="menu[0].name" theme="dark" width="auto" :class="menuitemClasses" @on-select="menuClick">
          <MenuItem v-for="(result, index) in menu" :key="index" :name="result.name" :to="result.path">
            <Icon :class="result.icon"></Icon>
            <span>{{result.title}}</span>
          </MenuItem>
        </Menu>
        <div slot="trigger"></div>
      </Sider>
      <Layout>
        <Header class="layout-header-bar">{{header}}</Header>
        <Content :style="{margin: '5px', background: '#fff'}">
          <keep-alive include="charts">
            <router-view></router-view>
          </keep-alive>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isCollapsed: false,
      header: '',
      menu: [
        {name: 'one', title: '首页', header: 'Home Page', path: '/', icon: 'iconfont iconshouye'},
        {name: 'two', title: '资讯列表', header: '资讯列表', path: '/hello', icon: 'iconfont iconzixunliebiao'},
        {name: 'three', title: 'dataCharts', header: 'dataCharts', path: '/charts', icon: 'iconfont iconweibiaoti--'}
        ]
    };
  },

  mounted() {
    this.header = this.menu[0].header;
    let User = sessionStorage.getItem('User')
    if(User == null) {
      this.$router.push('/login')
    }
  },

  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },

  methods: {
    menuClick(name) {
      for(let i = 0; i < this.menu.length; i++) {
        if(this.menu[i].name == name) {
          this.header = this.menu[i].header;
        }
      }
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
}

.ivu-menu {
  z-index: 100 !important;
}

.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}

.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}

.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}

.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
