<template>
  <div>
    <!-- dealer KBA -->
    <b-row
      class="mb-3 Row"
    >
      <b-col
        xl="2"
        class="left"
      >
      </b-col>
      <b-col
        xl="5"
        style="border-right: 1px solid black;"
        class="Border"
      >
        <h1 style="font-family: 'Segoe UI'; font-size:60px"> Dealer Kartika Berkat Abadi </h1>
        <footer class="blockquote-footer mb-4" style="font-size: 18px; color:red; font-family: 'Heebo'; font-weight: bold">Dealer Wing Honda motor</footer>
        <div
          class="mb-4"
          style="display: flex"
        >
          <b-icon icon="geo-alt-fill" class="h5 mr-2" variant="danger"></b-icon><a href="https://www.google.co.id/maps/place/Dealer+Honda+Kartika+Berkat+Abadi/@-6.162038,106.8271756,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f5db4bc1dd19:0xcdd2112ff6970340!8m2!3d-6.1620363!4d106.829364" style="text-decoration:none;" target="blank">Jl.Samanhudi no.29</a>
          <b-icon icon="telephone-fill" class="h5 ml-5 mr-2" variant="danger"></b-icon><p>(021) 344 2358</p>
        </div>
        <p style="text-align: justify; font-size:18px">PT Kartika BA adalah sebuah perusahaan yang bergerak di bidang penjualan motor Honda dan adalah dealer yang menomor satukan kepuasan customer. Kami adalah solusi untuk kebutuhan motor anda. Berdiri sejak tahun 2000, PT KBA telah memuaskan beribu-ribu pelanggan dengan memperhatikan kepuasan dan pengalaman customer yang bertransaksi di perusahaan kami dengan sangat hati-hati. Anda tidak akan kecewa dengan pelayanan yang kami berikkan apabila anda bertransaksi dengan kami. </p>
        <p class="mt-4 mb-0" style="font-size: 16px; color:red;font-family: 'Heebo'; font-weight: bold">Solusi kebutuhan motor anda</p>
        <p style="font-size: 16px; font-family: 'Rajdhani'; font-weight: bold">Jie Rudy Gunawan</p>
      </b-col>
      <b-col
        xl="3"
      >
        <img center @click="kba = !kba" src="../../assets/KBA.jpeg" class="mx-auto KBA" alt="Center image">
        <b-modal
          v-model="kba"
          size="xl"
          hide-footer
          hide-header
        >
          <img center style="max-width: 100%" src="../../assets/KBA.jpeg" class="mx-auto KBA" alt="Center image">
        </b-modal>
      </b-col>
      <b-col
        xl="2"
        class="right"
      >
      </b-col>
    </b-row>
    <!-- Divider row -->
    <b-row
      class="Row"
    >
      <b-col
        xl="2"
        class="left"
      >
      </b-col>
      <b-col
        xl="8"
      >
        <hr>
      </b-col>
      <b-col
        xl="2"
        class="right"
      >
      </b-col>
    </b-row>
    <!-- dealer MM -->
    <b-row
      class="mt-3 mb-3 Row"
    >
      <b-col
        xl="2"
        class="left"
      >
      </b-col>
      <b-col
        xl="3"
      >
        <img @click="mm = !mm" center src="../../assets/mancung.jpeg" class="zoom mx-auto" alt="Center image">
        <b-modal
          v-model="mm"
          size="xl"
          hide-footer
          hide-header
        >
          <img center style="max-width: 100%" src="../../assets/mancung.jpeg" class="mx-auto" alt="Center image">
        </b-modal>
      </b-col>
      <b-col
        xl="5"
        style="border-left: 1px solid black;"
        class="Border"
      >
        <h1 style="font-family: 'Segoe UI'; text-align:right;font-size:64px"> Dealer Mancung Motor </h1>
        <footer class="blockquote-footer mb-4" style="text-align: right ;font-size: 20px; color:red; font-family: 'Heebo'; font-weight: bold">Mancung Motor</footer>
        <div
          class="mb-4"
          style="display: flex;justify-content: flex-end"
        >
          <b-icon icon="geo-alt-fill" class="h5 mr-2" variant="danger"></b-icon><a style="text-decoration:none;" href="https://www.google.co.id/maps/place/MANCUNG+MOTOR/@-6.213792,106.4869095,17z/data=!3m1!4b1!4m5!3m4!1s0x2e4200d8c0ab341b:0xd19a8b88969fda0!8m2!3d-6.2137973!4d106.4890982" target="blank">Jl. Raya Serang km.19 no.2 </a>
          <b-icon icon="telephone-fill" class="h5 ml-5 mr-2" variant="danger"></b-icon><p>(021) 5940 4567</p>
        </div>
        <p style="text-align: justify; font-size:18px">PT Kartika BA adalah sebuah perusahaan yang bergerak di bidang penjualan motor Honda dan adalah dealer yang menomor satukan kepuasan customer. Kami adalah solusi untuk kebutuhan motor anda. Berdiri sejak tahun 2000, PT KBA telah memuaskan beribu-ribu pelanggan dengan memperhatikan kepuasan dan pengalaman customer yang bertransaksi di perusahaan kami dengan sangat hati-hati. Anda tidak akan kecewa dengan pelayanan yang kami berikkan apabila anda bertransaksi dengan kami. </p>
        <p class="mt-4 mb-0" style="text-align:right ;font-size: 16px; color:red;font-family: 'Heebo'; font-weight: bold">Solusi kebutuhan motor anda</p>
        <p style="font-size: 16px; font-family: 'Rajdhani'; font-weight: bold; text-align:right">Jie Rudy Gunawan</p>
      </b-col>
      <b-col
        xl="2"
        class="right"
      >
      </b-col>
    </b-row>
    <!-- Divider row -->
    <b-row
      class="Row"
    >
      <b-col
        xl="2"
        class="left"
      >
      </b-col>
      <b-col
        xl="8"
      >
        <hr>
      </b-col>
      <b-col
        xl="2"
        class="right"
      >
      </b-col>
    </b-row>
    <!-- dealer BM -->
    <b-row
      class="mt-5 Row"
    >
      <b-col
        xl="2"
        class="left"
      >
      </b-col>
      <b-col
        xl="5"
        class="Border"
        style="border-right: 1px solid black;"
      >
        <h1 style="font-family: 'Segoe UI'; font-size: 64px"> Dealer Bekasi Motor </h1>
        <footer class="blockquote-footer mb-4" style="font-size: 20px; color:red; font-family: 'Heebo'; font-weight: bold">Dealer Wing Honda motor</footer>
        <div
          class="mb-4"
          style="display: flex"
        >
          <b-icon icon="geo-alt-fill" class="h5 mr-2" variant="danger"></b-icon><a href="https://www.google.co.id/maps/place/Bekasi+Motor+Wing/@-6.2511666,107.0008875,12z/data=!4m11!1m2!2m1!1sdealer+bekasi+motor!3m7!1s0x2e698c2b5c3f41d3:0xd6d34890df22f5ff!8m2!3d-6.2511805!4d107.0008818!9m1!1b1!https://www.google.co.id/maps/place/Bekasi+Motor+Wing/@-6.2511666,107.0008875,12z/data=!4m9!1m2!2m1!1sdealer+bekasi+motor!3m5!1s0x2e698c2b5c3f41d3:0xd6d34890df22f5ff!8m2!3d-6.2511805!4d107.0008818!15sChNkZWFsZXIgYmVrYXNpIG1vdG9yWhUiE2RlYWxlciBiZWthc2kgbW90b3KSARFtb3RvcmN5Y2xlX2RlYWxlcpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOUk4wNVFhbWwzUlJBQg" target="blank" style="text-decoration:none">JL.M Hasibuan No.3</a>
          <b-icon icon="telephone-fill" class="h5 ml-5 mr-2" variant="danger"></b-icon><p>(021) 8835 4455</p>
        </div>
        <p style="text-align: justify; font-size:18px">PT Kartika BA adalah sebuah perusahaan yang bergerak di bidang penjualan motor Honda dan adalah dealer yang menomor satukan kepuasan customer. Kami adalah solusi untuk kebutuhan motor anda. Berdiri sejak tahun 2000, PT KBA telah memuaskan beribu-ribu pelanggan dengan memperhatikan kepuasan dan pengalaman customer yang bertransaksi di perusahaan kami dengan sangat hati-hati. Anda tidak akan kecewa dengan pelayanan yang kami berikkan apabila anda bertransaksi dengan kami. </p>
        <p class="mt-4 mb-0" style="font-size: 16px; color:red;font-family: 'Heebo'; font-weight: bold">Solusi kebutuhan motor anda</p>
        <p style="font-size: 16px; font-family: 'Rajdhani'; font-weight: bold">Jie Rudy Gunawan</p>
      </b-col>
      <b-col
        xl="3"
      >
        <img @click="bekasi = !bekasi" center src="../../assets/Bekasi.jpeg" class="zoom mx-auto" alt="Center image">
        <b-modal
          v-model="bekasi"
          size="xl"
          hide-footer
          hide-header
        >
          <img center style="max-width: 100%" src="../../assets/Bekasi.jpeg" class="mx-auto" alt="Center image">
        </b-modal>
      </b-col>
      <b-col
        xl="2"
        class="right"
      >
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Body',
  data () {
    return {
      bekasi: false,
      kba: false,
      mm: false
    }
  }
}
</script>

<style scoped>
.zoom {
  transition: transform .2s;
}

.zoom:hover {
  -ms-transform: scale(1.2); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.05);
}

img:hover {
  cursor: pointer;
}

@media only screen and (max-width: 1200px) {
  p {
    text-align: justify !important;
    line-height: 1.1 !important;
    max-width: 100rem;
  }
  .Row {
    margin-left: 10px !important;
    margin-right: 10px !important;
  }
  h1 {
    font-size: 42px !important;
  }
  .Border {
    border: 0px solid black !important;
  }
}
</style>
