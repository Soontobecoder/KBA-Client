<template>
  <b-container fluid class="p-4">
    <b-row>
      <b-col style="background-color:#f8f8f8" class="my-auto" v-for="leasing in leasings" :key="leasing.id">
        <b-img thumbnail fluid-grow :src="leasing.logo" :alt="leasing.name"></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Leasings',
  computed: {
    leasings () {
      return this.$store.state.leasings
    }
  },
  data () {
    return {
      mainProps: {
        width: 500,
        height: 500
      }
    }
  }
}
</script>

<style>

</style>
