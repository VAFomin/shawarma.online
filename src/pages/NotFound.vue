<template>
  <div>
    <p class="title">Похоже тут ничего нет...</p>
    <a class="button" href="/">
      <b-icon
          icon="arrow-left-bold"
          size="is-medium"
          type="is-grey-light"/>
      <p>Вернуться</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>
div {
  text-align: center;
  padding-top: 100px;
}
</style>
