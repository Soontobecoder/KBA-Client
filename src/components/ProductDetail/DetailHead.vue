<template>
  <div style="display: flex; justify-content: center;">
    <splide :options="options" :slides="Product.ProductImages">
      <splide-slide v-for="product in Product.ProductImages" :key="product.id">
        <img :src="product.image">
      </splide-slide>
    </splide>
  </div>
</template>

<script>
export default {
  name: 'DetailHead',
  props: ['Product'],
  data () {
    return {
      options: {
        type: 'loop',
        rewind: true,
        width: 600,
        height: 420,
        gap: '1rem',
        padding: {
          right: '5rem',
          left: '5rem'
        }
      }
    }
  }
}
// coba bikin splidenya jadi on mount
</script>
