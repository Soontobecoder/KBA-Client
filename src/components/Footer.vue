<template>
  <b-card class="foot" style="max-width:60%" bg-variant="dark" text-variant="white">
    <b-row>
      <b-col
        sm="4"
      >
        <h4 class="upper-Text">Tinjauan</h4>
        <p class="lead mt-3 mb-1" style="margin-bottom:0">Kontak kami</p>
        <p class="lead">Tentang kami</p>
      </b-col>
      <b-col
        sm="4"
      >
        <h4 class="upper-Text">Lainnya</h4>
        <p class="lead mt-3 mb-1" style="margin-bottom:0">Privasi</p>
        <p class="lead mb-1" style="margin-bottom:0">S&k</p>
        <p class="lead">Regulasi</p>
      </b-col>
      <b-col
        sm="4"
      >
        <h4 class="upper-Text">Kontak kami</h4>
        <p class="lead mt-3" style="margin-bottom:0">kba_motor120@yahoo.com</p>
      </b-col>
    </b-row>
</b-card>

</template>

<script>
export default {
  name: 'footer'
}
</script>

<style>
@media only screen and (max-width: 1200px) {
  .foot {
    max-width: 100% !important;
  }
  .upper-Text {
    margin-bottom: 20px;
  }
}
</style>
