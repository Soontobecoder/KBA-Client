<template>
  <div>
    <b-row
      style="background-color: #e9ecef; text-align: center;"
      class="mx-auto"
    >
      <Bread
        v-if="this.$route.query.n && this.$route.query.index"
        :items="bread2"
        style="margin-left:20%"
      />

      <Bread
        v-else
        :items="breadOrder"
        style="margin-left:20%"
      />
    </b-row>
    <b-row
      class="mt-5 Row"
    >
      <b-col>
      </b-col>
      <b-col
        xl="8"
      >
        <Header />
      </b-col>
      <b-col>
      </b-col>
    </b-row>
    <b-row
      class="Row"
    >
      <b-col>
      </b-col>
      <b-col
        xl="8"
      >
        <Body />
      </b-col>
      <b-col>
      </b-col>
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
    <!-- <p v-if="this.$route.query.n"> {{ this.$route.query.n }} </p> -->
  </div>
</template>

<script>
import Bread from '../components/BreadCrumbs.vue'
import Header from '../components/Order/Head.vue'
import Body from '../components/Order/Body.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'order',
  components: {
    Header,
    Bread,
    Body,
    Footer
  },
  data () {
    return {
      form: {
        name: this.$route.query.n || ''
      },
      show: true,
      breadOrder: [
        { text: 'Home', href: '/' },
        { text: 'Order Form', active: true }
      ],
      bread2: [
        { text: 'Home', href: '/' },
        { text: 'Products', href: '/products' },
        { text: this.$route.query.n, href: '/products/' + this.$route.query.index },
        { text: 'Order Form', active: true }
      ]
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 1200px) {
  .Row {
    margin-left: 10px !important;
    margin-right: 10px !important;
  }
}
</style>
