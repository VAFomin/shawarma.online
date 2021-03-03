<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img src="../assets/placeholder.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ title }}</p>
          <p class="subtitle is-6">{{ price }} ₽</p>
        </div>

        <div class="card-elements">
          <b-field>
            <b-numberinput v-model="number" min="0"></b-numberinput>
          </b-field>

          <p class="title is-4">{{ price * number }} ₽</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "CartCard",
  props: {
    id: String,
    title: String,
    price: String,
    count: Number
  },
  data() {
    return {
      num: this.count,
    }
  },
  computed: {
    number: {
      get() {
        return this.count;
      },
      set(val) {
        if (val === 0)
          this.delItem(this.id);
        else
          this.setItem({id: this.id, count: val});
      }
    }
  },
  methods: {
    ...mapMutations("cart", ["setItem", "delItem"]),
  }
}
</script>

<style scoped>
.card {
  height: 150px;
}

.card-elements {
  text-align: center;
}
</style>
