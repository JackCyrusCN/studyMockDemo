<template>
  <div id="app">
    <h1>学习 MockJs</h1>
    <hr />
    <button @click="getGoodsList">getGoodsList</button>
    <button @click="addGoods">AddGoods</button>
    <button @click="getGoods1(4)">getGoods1</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  methods: {
    async getGoodsList () {
      const { data: res } = await this.$http.get('/api/goodslist')
      console.log(res)
    },
    async addGoods () {
      const { data: res } = await this.$http.post('/api/addgoods', {
        name: 'apple',
        price: 8
      })
      console.log(res)
    },
    async getGoods1 (id) {
      const { data: res } = await this.$http.get(`/api/getgoodslist/${id}`)
      console.log(res)
    }
  }
}
</script>

<style>
</style>
