<template>
  <div>
    <b-row>
      <Header />
    </b-row>
    <b-row
      class="mt-5 mb-5"
    >
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
import Header from '../components/About/AboutHeader.vue'
import Body from '../components/About/AboutBody.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'AboutUs',
  components: {
    Header,
    Footer,
    Body
  }
}
</script>

<style>

</style>
