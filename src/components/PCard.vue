<template>
  <b-card
    :title="Product.name"
    :img-src="Product.image"
    img-alt="Image"
    img-top
    border-variant="light"
    tag="article"
    style="max-width: 25rem; background-color: #fafafa"
    class="mb-2 mr-5"
  >
    <b-card-text class="mb-3" style="font-size:12px;">
      Harga mulai
    </b-card-text>

    <b-card-text style="font-weight:bold;">
      Rp {{ Product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }},00
    </b-card-text>

    <b-button variant="outline-danger"><router-link :to="'/products/'+ Product.id">Read More</router-link></b-button>
  </b-card>
</template>

<script>
export default {
  name: 'ProductCards',
  props: ['Product']
}
</script>

<style>
a:hover {
  color: white;
}
</style>
