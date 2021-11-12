<template>
  <b-card class="foot2" text-variant="light" style="background-color: #212529; display: flex;">
    <b-row>
      <b-col>
        <h4>
          Follow Us
        </h4>
      </b-col>
      <b-col class="centerCol">
      </b-col>
      <b-col
        style="text-align:right"
      >
        <b-icon @click="log('instagram')" icon="instagram" class="mt-2" scale="2"></b-icon>
        <b-icon @click="log('facebook')" icon="facebook" class="mt-2 ml-4" scale="2"></b-icon>
        <b-icon @click="log('twitter')" icon="twitter" class="mt-2 ml-4" scale="2"></b-icon>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'about-us2',
  methods: {
    log (x) {
      console.log(x)
    }
  }
}
</script>

<style scoped>
.card-title {
  max-width: 50%;
  margin-right: 0%;
}

svg:hover{
  cursor: pointer;
}

@media only screen and (max-width: 1200px) {
  .foot2 {
    max-width: 100% !important;
  }
  .centerCol {
    display: none;
  }
}
</style>
