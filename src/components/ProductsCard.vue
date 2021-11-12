<template>
  <div>
    <b-card
      :title="Product.name"
      :img-src="Product.image"
      img-alt="Image"
      v-on:click="console"
      border-variant="light"
      img-top
      tag="article"
      style="max-width: 100rem; background-color: #fafafa"
    >
      <b-card-text style="font-weight: 500px; font-size:14px" class="mb-0 mt-3">
        Harga Mulai
      </b-card-text>
      <b-card-text>
        <!-- <money v-model="Product.price" v-bind="money"></money> Rp {{ Product.price }},00 -->
        Rp {{ Product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }},00
      </b-card-text>
      <b-button variant="outline-danger"><router-link :to="'/products/'+ Product.id" style="text-decoration: none !important">Read More</router-link></b-button>
    </b-card>
  </div>
</template>

<script>
// import { Money } from 'v-money'

export default {
  name: 'Product-card',
  props: ['Product'],
  components: {
    // Money
  },
  data () {
    return {
      toggler: true
    }
  },
  methods: {
    console () {
      this.toggler = !this.toggler
      console.log(this.toggler)
    }
  }
}
</script>

<style scoped>
  .card-img-top:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  .card-img-top {
    transition: transform .2s
  }
</style>
