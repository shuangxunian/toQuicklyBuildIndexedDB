<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>添加表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <el-input v-model="input" placeholder="请输入表名"></el-input>
      <el-button type="primary" @click="addsql">添加</el-button>
    </el-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  },
  created () {

  },
  methods: {
    addsql() {
      // console.log(1)
      if (!this.input) return
      let dbname = this.input
      let db
      let DBOpenRequest = window.indexedDB.open(dbname)
      DBOpenRequest.onerror()
    }
  }
}
</script>

<style lang="less" scoped>
</style>
