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
      <a class="button is-link is-rounded right">В КОРЗИНУ</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    description: String,
    price: String,
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
