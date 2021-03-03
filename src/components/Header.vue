<template>
  <b-navbar class="header" fixed-top>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <b-icon
            icon="food-fork-drink"
            size="is-medium"
            type="is-primary"/>
        <h1 class="title">Shawarma</h1>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#">
        Главная
      </b-navbar-item>
      <b-navbar-item href="#shawarma">
        Шаурма
      </b-navbar-item>
      <b-navbar-item href="#drinks">
        Напитки
      </b-navbar-item>
      <b-navbar-item href="#combo">
        Комбо
      </b-navbar-item>
      <b-navbar-item href="#contacts">
        Контакты
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-link is-rounded" href="/cart">
            Корзина
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header {
  padding: 10px 3em 20px 3em;
}

.title {
  padding-left: 10px;
}
</style>
