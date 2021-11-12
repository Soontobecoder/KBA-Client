<template>
  <div>
    <b-jumbotron style="background-color:#ffffff; padding-top:0" header="Motor Pilihan">
      <b-row
        class="mt-2"
      >
        <ProductsCarousel />
      </b-row>
      <p style="opacity:0">Spacer</p>
      <b-row>
        <b-col>
        </b-col>
        <b-col style="display:flex;">
          <b-button class="mx-auto" style="text-decoration:none; color:white;" variant="dark" to="/products">Lihat semua motor</b-button>
        </b-col>
        <b-col>
        </b-col>
      </b-row>
    </b-jumbotron>
  </div>
</template>

<script>
import ProductsCarousel from '../components/ProductsCarousel.vue'

export default {
  name: 'jumbotron',
  components: {
    ProductsCarousel
  }
}
</script>

<style scoped>

.display-3 {
  font-family: 'Lato', sans-serif;
}

</style>
