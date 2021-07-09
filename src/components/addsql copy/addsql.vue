<!--
 * @Author: yuelin.wang
 * @Date: 2021-07-09 14:25:53
 * @LastEditors: yuelin.wang
 * @LastEditTime: 2021-07-09 14:29:57
 * @Description: 
-->
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

    </el-card>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
</style>
