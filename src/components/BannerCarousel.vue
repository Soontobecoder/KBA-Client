<template>
  <div>
    <b-carousel
      id="carousel-fade"
      v-model="slide"
      :interval="4000"
      controls
      fade
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="banner in banners"
        :key="banner.id"
        :img-src="banner.image"
      ></b-carousel-slide>
      <!-- <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide> -->
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      sliding: null,
      slide: 0
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  created () {
    console.log(this.banners, 'this is the banners')
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>

<style>

</style>
