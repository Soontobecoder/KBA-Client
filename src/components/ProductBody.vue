<template>
  <div class="mb-5">
    <b-col>
      <md-tabs md-alignment="centered">
        <md-tab id="tab-home" md-label="Cub">
          <b-row class="mx-auto Bikes" style="max-width:70%; justify-content: center;">
            <Card
              v-for="cub in cubs"
              :key="cub.id"
              :Product="cub"
            />
          </b-row>
        </md-tab>
        <md-tab id="tab-pages" md-label="Matic">
          <b-row class="mx-auto Bikes" style="max-width:70%; justify-content: center;">
            <Card
              v-for="matic in matics"
              :key="matic.id"
              :Product="matic"
            />
          </b-row>
        </md-tab>
        <md-tab id="tab-posts" md-label="Sport">
          <b-row class="mx-auto Bikes" style="max-width:70%; justify-content: center;">
            <Card
              v-for="sport in sports"
              :key="sport.id"
              :Product="sport"
            />
          </b-row>
        </md-tab>
        <md-tab id="tab-favorites" md-label="Premium">
          <b-row class="mx-auto Bikes" style="max-width:70%; justify-content: center;">
            <Card
              v-for="premium in premiums"
              :key="premium.id"
              :Product="premium"
            />
          </b-row>
        </md-tab>
      </md-tabs>
    </b-col>
  </div>
</template>

<script>
import Card from './PCard.vue'

export default {
  name: 'productBody',
  methods: {
    fetchProducts () {
      this.$store.dispatch('getProducts')
    }
  },
  components: {
    Card
  },
  computed: {
    matics () {
      return this.$store.getters.matic
    },
    premiums () {
      return this.$store.getters.premium
    },
    cubs () {
      return this.$store.getters.cub
    },
    sports () {
      return this.$store.getters.sport
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style scoped>

.md-active {
  color: red;
}

@media only screen and (max-width: 1200px) {
  .Bikes {
    max-width: 100% !important;
  }
}
</style>
