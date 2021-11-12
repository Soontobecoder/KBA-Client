<template>
  <div>
    <b-jumbotron style="background-color: #212529;" text-variant="light">
      <b-row
        class="mb-5"
      >
        <b-col
          sm="12"
        >
          <h3 class="display-3" style="text-align:center">Janji - Janji kami</h3>
          <p class="lead" style="text-align:center">Keuntungan anda bila anda pilih untuk bertransaksi dengan kami</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="bordered" style="line-height: 1.1;text-align:right; font-size:30px; border-right: 1px solid white">
          <p>Produk yang lebih lengkap *</p>
          <p>Proses yang lebih gampang *</p>
          <p>Pengiriman cepat *</p>
        </b-col>
        <b-col class="bordered-2" style="line-height: 1.1;font-size:30px">
          <p>* Gampang bayarnya</p>
          <p>* Unit Cepat</p>
          <p>* Harga dan diskon kompetitif</p>
        </b-col>
      </b-row>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'our advantages'
}
</script>

<style scoped>

@media only screen and (min-width: 360px) {
  .bordered {
    border-right: 1px solid white !important;
    margin-bottom: 20px;
  }
  .bordered-2 {
    border-right: 0px solid white !important;
    margin-bottom: 20px;
  }
}

</style>
