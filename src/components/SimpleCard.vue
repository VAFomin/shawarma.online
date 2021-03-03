<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="../assets/placeholder.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-5">{{ title }}</p>
          <p class="subtitle is-6">{{ price }} ₽</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleCard",
  props: {
    title: String,
    price: String,
  }
}
</script>

<style scoped>
.card {
  margin: 0 10px 15px 10px;
}

.card-content {
  align-items: center;
  height: 100px;
}
</style>
