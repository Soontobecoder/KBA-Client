<template>
  <b-row style="background-color: #fafafa">
    <b-col>
      <md-content>
        <b-row>
          <b-col sm="1" md="2" class="my-auto Logo" style="margin-left: 20%">
            <b-icon variant="danger" icon="card-checklist" scale="5"></b-icon>
          </b-col>
          <b-col class="my-auto mt-2 Text" style="width:100%">
            <p style="font-family: 'Manrope', sans-serif; font-weight:extra-bold;"> Simulasi Kredit </p>
            <p style="font-family: 'Manrope', sans-serif; font-weight:bold;"><u><router-link style="color:black" to="/sim-kredit"> Lebih Lanjut </router-link></u> </p>
          </b-col>
        </b-row>
      </md-content>
    </b-col>
    <b-col>
      <md-content>
        <b-row>
          <b-col sm="1" md="2" class="my-auto Logo" style="margin-left: 20%">
            <b-icon variant="danger" icon="cart" scale="5"></b-icon>
          </b-col>
          <b-col class="my-auto mt-2 Text" style="width:100%">
            <p style="font-family: 'Manrope', sans-serif; font-weight:extra-bold;"> Produk Kami </p>
            <p style="font-family: 'Manrope', sans-serif; font-weight:bold;"> <u> Lebih Lanjut </u> </p>
          </b-col>
        </b-row>
      </md-content>
    </b-col>
    <b-col>
      <md-content>
        <b-row>
          <b-col sm="1" md="2" class="my-auto Logo" style="margin-left: 20%">
            <b-icon variant="danger" icon="tag" scale="5"></b-icon>
          </b-col>
          <b-col class="my-auto mt-2 Text" style="width:100%">
            <p style="font-family: 'Manrope', sans-serif; font-weight:extra-bold;"> Promo - promo </p>
            <p style="font-family: 'Manrope', sans-serif; font-weight:bold;"> <u> Lebih Lanjut </u> </p>
          </b-col>
        </b-row>
      </md-content>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'product-Header',
  computed: {
    formSpek () {
      return this.$store.getters.formSpek
    }
  }
}
</script>

<style scoped>

.md-content {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
}

@media only screen and (max-width: 1200px) {
  .Logo {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
    margin-right: 10px;
  }
}
</style>
