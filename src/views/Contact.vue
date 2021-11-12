<template>
  <div>
    <b-row>
      <Head />
    </b-row>
    <b-row>
      <Body />
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
  </div>
</template>

<script>
import Head from '../components/Contact-Us/Header.vue'
import Body from '../components/Contact-Us/Body.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Contact-us',
  components: {
    Head,
    Body,
    Footer
  }
}
</script>

<style>

</style>
