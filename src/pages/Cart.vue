<template>
  <div class="cart">
    <p class="title is-4">Корзина</p>
    <div v-if="cart.length > 0">
      <div v-for="(item, index) in cart" :key="index">
        <Card :id="item.id" :title="item.title" :price="item.price" :count="item.count"/>
      </div>
      <p><b>Итого: </b>{{ totalPrice }}</p>
    </div>
    <div v-else>
      <p class="title is-4">Похоже, корзина пока пуста :(</p>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: "Cart",
  components: {
    Card: () => import("../components/CartCard"),
  },
  computed: {
    ...mapState("cart", ["cart"]),
    totalPrice() {
      let total = 0;
      this.cart.forEach((item) => total += (item.price * item.count))
      return total;
    }
  },
}
</script>

<style scoped>
.cart {
  width: 700px;
  padding-top: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto

}
</style>
