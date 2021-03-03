<template>
  <div class="home">
    <p class="title is-4">Популярное</p>
    <b-carousel-list v-model="number" :data="top" :items-to-show="3" carousel-overlay-background="#000">
      <template #item="list">
        <SimpleCard :title="list.title" :price="list.price"/>
      </template>
    </b-carousel-list>

    <p id="shawarma" class="title is-4">Шаурма</p>
    <div class="columns" v-for="(shw, index) in shawarma" :key="index + 'shw_row'">
      <div class="column" v-for="(item, index) in shw" :key="index + 'shw'">
        <Card :title="item.title" :description="item.description" :price="item.price"/>
      </div>
    </div>

    <p id="drinks" class="title is-4">Напитки</p>
    <div class="columns" v-for="(dr, index) in drink" :key="index + 'drinks_row'">
      <div class="column" v-for="(item, index) in dr" :key="index + 'drink'">
        <Card :title="item.title" :description="item.description" :price="item.price"/>
      </div>
    </div>

    <p id="combo" class="title is-4">Комбо</p>
    <div class="columns" v-for="(cmb, index) in combos" :key="index + 'combos_row'">
      <div class="column" v-for="(item, index) in cmb" :key="index + 'combo'">
        <Card :title="item.title" :description="item.description" :price="item.price"/>
      </div>
    </div>

    <p id="contacts" class="title is-4">Контакты</p>
    <div class="columns">
      <div class="column">
        <p><b>Адрес: </b>город Энск, улица Ленина, дом 15, корпус 4</p>
        <b>Телефон: </b><a href="tel:+7 (999) 999 9999">+7 (999) 999 9999</a>
      </div>
      <div class="column">
        <div style="position:relative;overflow:hidden;"><a
            href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"
            style="color:#eee;font-size:12px;position:absolute;top:0px;">Яндекс.Карты</a><a
            href="https://yandex.ru/maps/?ll=37.754959%2C55.610342&utm_medium=mapframe&utm_source=maps&z=7.6"
            style="color:#eee;font-size:12px;position:absolute;top:14px;">Россия — Яндекс.Карты</a>
          <iframe src="https://yandex.ru/map-widget/v1/-/CCUQyNwK~A" width="560" height="400" frameborder="1"
                  allowfullscreen="true" style="position:relative;"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {food, top, drinks, combo} from "../plugins/data.js";

export default {
  name: "Home",
  components: {
    Card: () => import("../components/Card"),
    SimpleCard: () => import("../components/SimpleCard"),

  },
  data() {
    return {
      number: 0,
      top: top,
    }
  },
  computed: {
    shawarma() {
      const result = []
      for (let i = 0; i < food.length; i += 4)
        result.push(food.slice(i, i + 4))
      return result
    },
    drink() {
      const result = []
      for (let i = 0; i < drinks.length; i += 4)
        result.push(drinks.slice(i, i + 4))
      return result
    },
    combos() {
      const result = []
      for (let i = 0; i < combo.length; i += 4)
        result.push(combo.slice(i, i + 4))
      return result
    }
  }
}
</script>

<style scoped>
.home{
  padding-top: 100px;
}
</style>
