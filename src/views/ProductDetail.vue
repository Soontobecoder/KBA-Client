<template>
  <div>
    <b-row
      style="background-color: #e9ecef; text-align: center;"
      class="mx-auto"
    >
      <BreadCrumbs
        :items="bread"
        style="margin-left:20%"
      />
    </b-row>
    <b-row
      class="mt-5"
    >
      <b-col
        xl="2"
      >
      </b-col>
      <b-col
        xl="8"
      >
        <Order
          :name="product.name"
          :id="product.id"
          class="Jumbo"
        />
      </b-col>
      <b-col
        xl="2"
      >
      </b-col>
    </b-row>
    <b-row>
      <h1
        class="mt-4 mb-4"
        style='font-family: "Segoe UI"; font-size: 64px ; text-align:center'
      >
        {{ product.name }}
      </h1>
    </b-row>
    <b-row>
      <Carousel
        :product="product"
      />
    </b-row>
    <b-row style="background-color: #212529;">
      <p class="mb-0 mt-5" style='font-family: "Segoe UI"; color: white; text-align:center; font-size:32px'> Pilihan warna
      </p>
      <Header
        :Product="product"
        class="mt-1 mb-5"
      />
    </b-row>
    <b-row>
      <Body
        :Product="product"
      />
    </b-row>
    <b-row
      style="background-color: #212529"
      class="mt-5"
    >
      <b-col
        sm="12"
      >
        <Footer
          class="mx-auto"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Order from '../components/ProductDetail/OrderHere.vue'
import BreadCrumbs from '../components/BreadCrumbs.vue'
import Header from '../components/ProductDetail/DetailHead.vue'
import Carousel from '../components/ProductDetail/Carousel.vue'
import Body from '../components/ProductDetail/DetailBody.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Product-detail',
  components: {
    BreadCrumbs,
    Header,
    Carousel,
    Body,
    Order,
    Footer
  },
  methods: {
    fetch () {
      this.$store.dispatch('fetch', this.$route.params.id)
        .then((data) => {
          if (data !== 'not-found') {
            this.$store.dispatch('pushBreadCrumbs', { text: data.name, active: true })
            this.product = data
          } else {
            this.$router.push({ path: '/404' })
          }
        })
        .catch((err) => console.log(err))
    }
  },
  data () {
    return {
      product: {}
    }
  },
  created () {
    this.fetch()
  },
  computed: {
    bread () {
      return this.$store.state.breadCrumbs
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 1200px) {
  .Jumbo {
    margin-left: 20px !important;
    margin-right: 20px !important;
  }
}

</style>
