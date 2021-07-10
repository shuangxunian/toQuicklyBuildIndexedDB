<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/heima.png" alt="">
        <span>系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu v-if="flag == 0" :default-active="active" class="el-menu-vertical-demo" router>
          <el-menu-item index="addsql" @click="saveNav('addsql')">
            <i class="el-icon-menu"></i>
            <span v-if="!isCollapse" slot="title">添加表</span>
          </el-menu-item>
          <el-menu-item index="fixsql" @click="saveNav('fixsql')">
            <i class="el-icon-menu"></i>
            <span v-if="!isCollapse" slot="title">修改表</span>
          </el-menu-item>
          <el-menu-item index="addmsg" @click="saveNav('addmsg')">
            <i class="el-icon-document"></i>
            <span v-if="!isCollapse" slot="title">添加内容</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      // 是否折叠
      isCollapse: false,
      // flag 0为老师 1为学生
      flag: -1,
      // 激活的链接
      active: ''
    }
  },
  created () {
    this.getData()
    this.active = window.sessionStorage.getItem('active')
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 获取所有的菜单
    async getMenuList () {
    },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    // 获取数据
    getData () {
      this.flag = window.sessionStorage.getItem('flag')
      if (this.flag === 0) {
        this.$router.push('/addsql')
        this.active = 'addsql'
      }
      // this.$router.push('/users')
      // this.flag = 1
      // console.log(this.flag)
    },
    // 保持高亮
    saveNav (name) {
      // console.log(name)
      window.sessionStorage.setItem('active', name)
      this.active = name
    }
  }
}
</script>

<style scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.el-header div {
  display: flex;
  align-items: center;
}

.el-header div span {
  color: black;
  margin-left: 15px;
}

.el-aside {
  background-color: #f5f5f5;
}

.el-aside .el-menu {
  border-right: none;
}

.el-main {
  background-color: #eaedf1;
}

.iconfont {
  margin-right: 10px;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
