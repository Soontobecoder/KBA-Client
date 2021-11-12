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
      style="background-color: #fafafa"
    >
      <Header
        class="mt-4 mb-4 mx-auto Head"
        style="max-width:60%"
      />
    </b-row>
    <b-row
      class="mt-5"
    >
      <h1 style="text-align:center; font-family: 'Segoe UI' ">Produk Kami</h1>
    </b-row>
    <b-row>
      <Body
        class="mt-3"
      />
    </b-row>
    <b-row
      style="background-color: #212529"
    >
      <b-col
        sm="12"
      >
        <Follow
          style="max-width: 60%"
          class="mx-auto"
        />
      </b-col>
    </b-row>
    <b-row
      style="background-color: #212529"
    >
      <Footer
        class="mx-auto"
      />
    </b-row>
  </div>
</template>

<script>
import Header from '../components/ProductHeader.vue'
import BreadCrumbs from '../components/BreadCrumbs.vue'
import Body from '../components/ProductBody.vue'
import Footer from '../components/Footer.vue'
import Follow from '../components/FollowUsCard.vue'

export default {
  components: {
    BreadCrumbs,
    Header,
    Body,
    Footer,
    Follow
  },
  computed: {
    bread () {
      return this.$store.state.breadCrumbs
    }
  },
  created () {
    this.$store.dispatch('addBreadCrumbs', { text: 'Products', active: true })
  }
}
</script>

<style scoped>
@media only screen and (max-width: 1200px) {
  .Head {
    max-width: 100% !important;
  }
}
</style>
