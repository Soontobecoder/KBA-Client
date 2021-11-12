<template>
  <div
    style="max-width: 80%; display: flex; justify-content: center"
    class="mx-auto mb-5"
  >
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      controls
      :interval="4000"
      indicators
      img-width="800"
      img-height="600"
    >
      <b-carousel-slide v-for="banner in product.BannerProducts" :key="banner.id"
        :img-src="banner.image"
        style="max-height:50rem"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'detailBody',
  props: ['product']
}
</script>

<style>

</style>
