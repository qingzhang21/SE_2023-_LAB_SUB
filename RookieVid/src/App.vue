<template>
  <div id="app">
    <!--主页导航栏 链接-->
    <div id="home_router">
      <span id="logo">
        <img alt="web logo" src="./assets/web_logo.png" height="80px">
      </span>

      <el-row type="flex" justify="end">
        <el-menu :default-active="activeIndex1" class="el-menu-demo" mode="horizontal" @select="handleSelect"
          active-text-color="#409EFF">

          <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
          <el-submenu index="2">
            <template slot="title">个人中心</template>
            <el-menu-item index="2-1"><router-link to="/person">用户主页</router-link></el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">    
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3"><router-link to="/">创作中心</router-link></el-menu-item>
          <el-menu-item index="4"><router-link to="/">消息</router-link></el-menu-item>
        </el-menu>
      </el-row>
    </div>
    <br>


    <!-- <div class="nav">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/person">个人中心</router-link>
            <router-link to="/creation">创作中心</router-link>
            <router-link to="/message">消息</router-link>
            <div class="nav-box"></div>
        </nav>
      </div> -->

    <!--搜索框-->
    <div>
      <div id="sreach_div" >
     <el-input placeholder="请输入内容" v-model="input" id="input" size="medium " clearable> 
        </el-input>
      </div>
      <router-view />
    </div>

    
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#7bbfea"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-row type="flex" justify="center">
  <el-menu-item index="1">首页</el-menu-item>
  <el-menu-item index="2">娱乐</el-menu-item>
  <el-menu-item index="3">生活</el-menu-item>
  <el-menu-item index="4"><router-link to="/person" >学习</router-link> </el-menu-item>
  <el-menu-item index="5"><router-link to="/person" >游戏</router-link> </el-menu-item>
  <el-menu-item index="6"><router-link to="/person" >运动</router-link> </el-menu-item>
  <el-menu-item index="7"><router-link to="/person" >美食</router-link> </el-menu-item>
  <el-menu-item index="8"><router-link to="/person" >音乐</router-link> </el-menu-item>
  <el-menu-item index="9"><router-link to="/person" >影视</router-link> </el-menu-item>
  <el-menu-item index="10"><router-link to="/person" >科技</router-link> </el-menu-item>
</el-row>
</el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
    return {
        input: ''
      }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  text-align: right;
  align-items: right;
}

#logo {
  position: absolute;
  left: 100px;
}
#input{
  width:600px;
}
</style>
