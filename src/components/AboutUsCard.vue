<template>
  <b-jumbotron class="mt-3" style="padding-top:0;padding-bottom:0; background-color: #f8f8f8;">
    <b-row>
      <b-col
        sm="12"
        class="my-auto"
        style="padding-right:0;"
      >
        <h2 class="display-3" style="font-weight:bold; text-align:center">Mengapa Pilih Dealer KBA </h2>
        <p class="lead" style="text-align:center">Tentang PT Kartika Berkat Abadi</p>
      </b-col>
    </b-row>
    <div>
      <b-tabs v-model="tabIndex" align="center" pills>
        <b-tab class="mx-auto About" style="max-width: 60%" :title-link-class="linkClass(0)">
          <template #title class="mr-2">
            <p style="margin:0; font-size:24px" class="mr-3 ml-3"> Kualitas Kami </p>
          </template>
          <!-- <b-card style="background-color:#f8f8f8; display:flex; align-items:start;" img-src="https://hondajabodetabek.com/wp-content/uploads/2019/09/Webp.net-resizeimage.png" border-variant="light" img-alt="Card image" img-left class="mb-3 mt-3">
            <h3 class="display-5" style="text-align:center;">PT Kartika Berkat Abadi </h3>
            <footer class="blockquote-footer mb-4" style="text-align:center; font-size: 16px">Solusi kebutuhan <cite title="Source Title">Motor</cite> anda</footer>
            <b-card-text style="font-size: 20px; text-align: justify;">
              PT Kartika BA adalah sebuah perusahaan terbatas yang bergerak di bidang penjualan motor, suku cadang dan pemeliharaan  motor Honda
              dan adalah dealer yang menomor satukan kepuasan customer. Terutama mereka yang bertransaksi secara kredit. Akan kami usahakan sampai di acc oleh leasing.
              Kami adalah solusi untuk kebutuhan motor anda.
              <br/> <br/>
              Berdiri sejak tahun 2000, PT KBA telah memuaskan beribu-ribu pelanggan dengan memperhatikan
              kepuasan dan pengalaman customer yang bertransaksi di perusahaan kami
              dengan sangat hati-hati.
              Anda tidak akan kecewa dengan pelayanan yang kami berikan apabila anda bertransaksi dengan kami.
            </b-card-text>
          </b-card> -->
          <b-card no-body class="overflow-hidden mb-3 mt-3" style="background-color:#f8f8f8; display:flex; align-items:start;" border-variant="light">
            <b-row no-gutters>
              <b-col style="display:flex; align-items:center;" md="6">
                <b-card-img src="https://hondajabodetabek.com/wp-content/uploads/2019/09/Webp.net-resizeimage.png" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body>
                  <h3 class="display-5" style="text-align:center;">PT Kartika Berkat Abadi </h3>
                  <footer class="blockquote-footer mb-4" style="text-align:center; font-size: 16px">Solusi kebutuhan <cite title="Source Title">Motor</cite> anda</footer>
                  <b-card-text style="font-size: 24px; text-align: justify;line-height: 1.1">
                    PT Kartika BA adalah sebuah perusahaan terbatas yang bergerak di bidang penjualan motor, suku cadang dan pemeliharaan  motor Honda
                    dan adalah dealer yang menomor satukan kepuasan customer. Terutama mereka yang bertransaksi secara kredit. Akan kami usahakan sampai di acc oleh leasing.
                    Kami adalah solusi untuk kebutuhan motor anda.
                    <br/> <br/>
                    Berdiri sejak tahun 2000, PT KBA telah memuaskan beribu-ribu pelanggan dengan memperhatikan
                    kepuasan dan pengalaman customer yang bertransaksi di perusahaan kami
                    dengan sangat hati-hati.
                    Anda tidak akan kecewa dengan pelayanan yang kami berikan apabila anda bertransaksi dengan kami.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-tab>
        <b-tab class="mx-auto" style="display:flex;justify-content: center;max-width: 80%" :title-link-class="linkClass(1)">
          <template #title>
            <p class="mr-3 ml-3" style="margin:0; font-size:24px"> Fasilitas Kami </p>
          </template>
          <div
            class="Icons"
          >
            <b-img style="width: 20rem;" src="https://kompomotor.com/wp-content/uploads/2019/01/hgp-apparel-jacket-touring-honda-racing-cbr150r.png" fluid alt="Fluid image"></b-img>
            <p> test </p>
          </div>
        </b-tab>
        <b-tab :title-link-class="linkClass(2)">
          <template #title>
            <p class="mr-3 ml-3" style="margin:0; font-size:24px"> Harga Kami </p>
          </template>
        </b-tab>
      </b-tabs>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'About-us',
  data () {
    return {
      tabIndex: 0
    }
  },
  methods: {
    linkClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-dark', 'text-light']
      } else {
        return ['bg-light', 'text-dark']
      }
    }
  }
}
</script>

<style scoped>

.display-3 {
  color: red;
}

div.card-header {
  background-color:#f8f8f8
}

li.nav-item {
  font-size: 64px
}

img.card-img-left {
  max-width: 50vh;
}

@media only screen and (max-width: 1200px) {
  .About {
    max-width: 100% !important;
  }
}

</style>
