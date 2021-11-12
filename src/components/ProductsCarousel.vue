<template>
  <div id="featured-products">
    <!-- <b-row>
      <b-breadcrumb v-model="tabs" style="background-color:#ffffff " class="p-3">
        <b-breadcrumb-item href="#home">
          Matic
        </b-breadcrumb-item>
        <b-breadcrumb-item href="#foo">Cub</b-breadcrumb-item>
        <b-breadcrumb-item href="#bar">Sports</b-breadcrumb-item>
      </b-breadcrumb>
    </b-row> -->
    <b-row>
      <md-tabs>
        <md-tab id="tab-home" md-label="Cub" exact>
          <Carousel :perPage="3">
            <Slide
              class="p-2"
              v-for="product in cub"
              :key="product.id"
            >
              <ProductCard
                :Product="product"
              />
            </Slide>
          </Carousel>
        </md-tab>

        <md-tab id="tab-pages" md-label="Matic">
          <Carousel :perPage="3">
            <Slide
              class="p-2"
              v-for="product in matic"
              :key="product.id"
            >
              <ProductCard
                :Product="product"
              />
            </Slide>
          </Carousel>
        </md-tab>

        <md-tab id="tab-posts" md-label="Sport">
          <Carousel :perPage="3">
            <Slide
              class="p-2"
              v-for="product in sport"
              :key="product.id"
            >
              <ProductCard
                :Product="product"
              />
            </Slide>
          </Carousel>
        </md-tab>

        <md-tab id="tab-favorites" md-label="Premium">
          <Carousel :perPage="3">
            <Slide
              class="p-2"
              v-for="product in premium"
              :key="product.id"
            >
              <ProductCard
                :Product="product"
              />
            </Slide>
          </Carousel>
        </md-tab>
      </md-tabs>
    </b-row>
    <!-- <b-row>
      <b-col cols="12" style="padding:0;">
      </b-col>
    </b-row> -->
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import ProductCard from '../components/ProductsCard.vue'

export default {
  components: {
    Carousel,
    Slide,
    ProductCard
  },
  data () {
    return {
      Slide: 0,
      sliding: null,
      tabs: 0
    }
  },
  methods: {
    onSlideStart (Slide) {
      this.sliding = true
    },
    onSlideEnd (Slide) {
      this.sliding = false
    }
  },
  computed: {
    matic () {
      return this.$store.getters.matic
    },
    premium () {
      return this.$store.getters.premium
    },
    cub () {
      return this.$store.getters.cub
    },
    sport () {
      return this.$store.getters.sport
    }
  }
}
</script>

<style scoped>

ul#__BVID__63__BV_tab_controls_{
  display:none;
}

</style>
