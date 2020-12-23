<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/componens/Header'
import Footer from '@/componens/Footer'
//发送请求  首先引入封装的发送请求的函数
import {reqCategoryList} from './api'
//发送请求  在挂载之后使用

export default {
  name: '',
  components:{
    Header,
    Footer
  },
  mounted() {
    reqCategoryList().then(
      response => {console.log(response.data);},
      error => {}
    )
  }
}
</script>

<style lang="less" scoped>

</style>

