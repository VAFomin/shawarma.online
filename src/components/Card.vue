<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="../assets/placeholder.png" alt="Placeholder image">
      </figure>
    </div>

    <div class="card-content">
      <div class="content">
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
      </div>
    </div>
    <footer class="footer">
      <h1 class="title left">{{ price }} ₽</h1>
      <a class="button is-link is-rounded right" @click="addInCart">В КОРЗИНУ</a>
    </footer>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "Card",
  props: {
    id: String,
    title: String,
    description: String,
    price: String,
  },
  computed: {
    ...mapState("cart", ["cart"]),
  },
  methods: {
    ...mapMutations("cart", ["addItem", "setItem"]),

    addInCart() {
      const item = this.cart.find(item => item.id === this.id);
      if (item === undefined) {
        this.addItem({id: this.id, title: this.title, description: this.description, price: this.price, count: 1})
      } else {
        const newCount = item.count + 1;
        this.setItem({id: this.id, count: newCount})
      }
    }
  }
}
</script>

<style scoped>
.card-content {
  height: 220px;
}

.left {
  float: left;
}

.right {
  float: right;
}
</style>
