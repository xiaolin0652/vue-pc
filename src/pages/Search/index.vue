<template>
  <div>
    <h2>params结果为: {{this.$route.params.keyword}}</h2>
    <h2>query参数结果为: {{this.$route.query.keyword2}}</h2>
    <h2>query参数结果为: {{keyword3}}</h2>
    <h2>query参数结果为: {{keyword4}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props:['keyword3','keyword4']
}
</script>

<style lang="less" scoped>

</style>
