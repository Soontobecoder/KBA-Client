<template>
  <div class='home'>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <b-row>
      <b-col>
        <Banners
          :banners="banners"
        />
        <a href="#featured-products"></a>
      </b-col>
    </b-row>
    <b-row
      id="filter"
    >
      <b-col
        class="mt-5"
        xl="12"
      >
        <FilterCard
          class="mx-auto Filter"
          style="max-width: 60%"
        />
      </b-col>
    </b-row>
    <b-row
      class="mt-5"
      style="background-color:#f8f8f8"
    >
      <b-col>
        <!-- <h1 class="mx-auto display-3" style="max-width: 60%;text-align:center; font-family: Helvetica; font-weight:500">Featured Products</h1> -->
        <AboutUs
          class="mx-auto About"
        />
      </b-col>
    </b-row>
    <b-row
      style="background-color: #212529"
    >
      <b-col>
        <!-- <h1 class="mx-auto display-3" style="max-width: 60%;text-align:center; font-family: Helvetica; font-weight:500">Featured Products</h1> -->
        <Advantage
          class="mx-auto Advantages"
          style="max-width: 60%"
        />
      </b-col>
    </b-row>
    <b-row
      class="mt-5"
      id="featured-products"
    >
      <b-col
        sm="12"
      >
        <!-- <h1 class="mx-auto display-3" style="max-wi?dth: 60%;text-align:center; font-weight:500">Featured Products</h1> -->
        <Jumbotron
          class="mx-auto Products"
          style="max-width: 60%"
        />
      </b-col>
    </b-row>
    <b-row
      style="background-color:#f8f8f8"
    >
      <b-col>
        <!-- <h1 class="mx-auto display-3" style="max-width: 60%;text-align:center; font-family: Helvetica; font-weight:500">Featured Products</h1> -->
        <Leasings
          class="mx-auto mb-4 Leasings"
          style="max-width: 80rem"
        />
      </b-col>
    </b-row>
    <b-row
      style="background-color: #212529"
    >
      <b-col
        sm="12"
      >
        <FollowUs
          style="max-width: 60%"
          class="mx-auto"
        />
      </b-col>
    </b-row>
    <b-row
      style="background-color: #212529"
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
// @ is an alias to /src
import Banners from '@/components/BannerCarousel.vue'
import FilterCard from '@/components/FilterCard.vue'
import Footer from '@/components/Footer.vue'
// import ProductsCarousel from '@/components/ProductsCarousel.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import AboutUs from '@/components/AboutUsCard.vue'
import FollowUs from '@/components/FollowUsCard.vue'
import Advantage from '@/components/AdvantagesCard.vue'
import Leasings from '@/components/LeasingCards.vue'

export default {
  name: 'Home',
  components: {
    Banners,
    FilterCard,
    Jumbotron,
    AboutUs,
    FollowUs,
    Footer,
    Advantage,
    Leasings
  },
  created () {
    this.fetchBanners()
    this.fetchProducts()
    this.fetchLeasings()
  },
  methods: {
    fetchBanners () {
      this.$store.dispatch('getBanners')
    },
    fetchProducts () {
      this.$store.dispatch('getProducts')
    },
    fetchLeasings () {
      this.$store.dispatch('getLeasings')
    }
  },
  computed: {
    banners () {
      return this.$store.state.banners
    },
    products () {
      return this.$store.state.products
    },
    leasings () {
      return this.$store.state.leasings
    }
  }
}
</script>

<style scoped>

@media only screen and (max-width: 1200px) {
  .Filter {
    max-width: 100% !important;
  }
  .Advantages {
    max-width: 100% !important;
  }
  .Products {
    max-width: 100% !important;
  }
  .Leasings {
    max-width: 100% !important;
  }
}
</style>
