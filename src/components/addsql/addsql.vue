<!--
 * @Author: yuelin.wang
 * @Date: 2021-07-09 14:22:10
 * @LastEditors: yuelin.wang
 * @LastEditTime: 2021-07-10 16:38:02
 * @Description: 新加表
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
      <el-button type="primary" @click="addsql">添加</el-button>
    </el-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      db: ''
    }
  },
  created () {
    this.buildsql()
  },
  methods: {
    // 创建数据库
    buildsql () {
      const dbname = 'shuangxu20_table'
      const request = indexedDB.open(dbname)
      request.onerror = event => {
        console.log('数据库打开/创建报错', event)
      }
      request.onupgradeneeded = event => {
        console.log('数据库打开/创建成功', event)
      }
    },
    addsql () {
      // 当仅当触发 onupgradeneeded 时 可以对 IDBObjectStore 也就是表进行增、删、改。
      // 下次需要做的：往localstorage存个数组：数组为
      // [
      //   {
      //     name: '表名',
      //     v: '版本',
      //     des: '描述'
      //   }, {}
      // ]
      // 关于版本：创建完表就为1，然后每次操作(新增表，新增属性等)要+1
      if (!this.input) return
      const dbname = 'shuangxu20_table'
      const request = indexedDB.open(dbname)
      request.onerror = event => {
        console.log('数据库打开/创建报错', event)
      }
      request.onsuccess = event => {
        const db = event.target.result
        console.log(db)
        const tableName = this.input
        const store = db.createObjectStore(tableName, {
          keyPath: 'id',
          autoIncrement: true
        })
        console.log(store)
      }

      // // 升级后自动触发success
      // request.onupgradeneeded = event => {
      //   const db = event.target.result
      //   console.log(db)
      //   // 建表 名为person,主键为id
      //   const tableName = this.input
      //   console.log(tableName)
      //   const store = db.createObjectStore(tableName, {
      //     keyPath: 'id'
      //   })
      //   console.log(store)
      //   // 新建索引名称、索引所在的属性、配置对象（说明该属性是否允许有重复的值）
      //   // store.createIndex('name', 'name', {
      //   //   unique: false
      //   // })
      //   // store.createIndex('age', 'age', {
      //   //   unique: false
      //   // })
      //   // store.createIndex('height', 'height', {
      //   //   unique: false
      //   // })
      // }

      // // success
      // request.onsuccess = event => {
      //   this.db = event.target.result
      //   console.log('数据库打开/创建成功', event)
      // }
    },
    dbInit () {
    }

  }
}
</script>

<style lang="less" scoped>
</style>
