<template>
  <div>
    <b-row>
      <b-col
        xl="2"
      >
      </b-col>
      <b-col
        class="Positioned"
      >
        <b-row
          class="mt-5"
        >
          <!-- Left column of contact us -->
          <b-col
            style="border-right: 1px solid black"
            class="example"
            xl="6"
          >
            <h1 style="font-family: 'Rajdhani';font-weight:bold; font-size: 64px; color:red;"> KBA Group </h1>
            <p style="font-size: 20px; text-align: justify;line-height: 1.3; font-weight:300;"> Untuk menghubungi kami dan bertanya lebih lanjut, silahkan untuk menghubungi kami dengan mengisi contact form di sebelah kanan ini atau langsung menghubungi kami via whatsapp untuk detail lebih jelas. </p>
            <h2 class="mt-5" style="color:red; font-family: 'Rajdhani';font-weight:bold"> Lokasi kami </h2>
            <div
              class="mt-3"
              style="display:flex;"
            >
              <b-icon icon="geo-alt-fill" class="h5 mr-2" variant="danger"></b-icon><a href="https://www.google.co.id/maps/place/Dealer+Honda+Kartika+Berkat+Abadi/@-6.162038,106.8271756,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f5db4bc1dd19:0xcdd2112ff6970340!8m2!3d-6.1620363!4d106.829364" style="text-decoration:none; font-size: 18px" target="blank">Jl.Samanhudi no.29 <span style="color:black;">| (Jakarta Pusat) </span></a>
            </div>
            <div
              style="display:flex;"
            >
              <b-icon icon="geo-alt-fill" class="h5 mr-2" variant="danger"></b-icon><a style="text-decoration:none; font-size: 18px" href="https://www.google.co.id/maps/place/MANCUNG+MOTOR/@-6.213792,106.4869095,17z/data=!3m1!4b1!4m5!3m4!1s0x2e4200d8c0ab341b:0xd19a8b88969fda0!8m2!3d-6.2137973!4d106.4890982" target="blank">Jl. Raya Serang km.19 no.2 <span style="color:black;">| (Tangerang) </span></a>
            </div>
            <div
              style="display:flex;"
            >
              <b-icon icon="geo-alt-fill" class="h5 mr-2" variant="danger"></b-icon><a href="https://www.google.co.id/maps/place/Bekasi+Motor+Wing/@-6.2511666,107.0008875,12z/data=!4m11!1m2!2m1!1sdealer+bekasi+motor!3m7!1s0x2e698c2b5c3f41d3:0xd6d34890df22f5ff!8m2!3d-6.2511805!4d107.0008818!9m1!1b1!https://www.google.co.id/maps/place/Bekasi+Motor+Wing/@-6.2511666,107.0008875,12z/data=!4m9!1m2!2m1!1sdealer+bekasi+motor!3m5!1s0x2e698c2b5c3f41d3:0xd6d34890df22f5ff!8m2!3d-6.2511805!4d107.0008818!15sChNkZWFsZXIgYmVrYXNpIG1vdG9yWhUiE2RlYWxlciBiZWthc2kgbW90b3KSARFtb3RvcmN5Y2xlX2RlYWxlcpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOUk4wNVFhbWwzUlJBQg" target="blank" style="text-decoration:none; font-size: 18px">JL.M Hasibuan No.3 <span style="color:black;">| (Bekasi) </span></a>
            </div>
            <h2 class="mt-3" style="color:red;font-family: 'Rajdhani';font-weight:bold"> Telepon kami </h2>
            <div
              class="mt-3"
              style="display:flex;"
            >
              <b-icon icon="telephone-fill" class="h5 mr-2" variant="danger"></b-icon><a style="text-decoration:none; font-size: 18px; color:black;" target="blank">(021) 385 3141 <span style="color:black;">| (Jakarta Pusat) </span></a>
            </div>
            <div
              style="display:flex;"
            >
              <b-icon icon="telephone-fill" class="h5 mr-2" variant="danger"></b-icon><a style="text-decoration:none; font-size: 18px; color:black;"> (021) 5940 4567 <span style="color:black;">| (Tangerang) </span></a>
            </div>
            <div
              style="display:flex;"
            >
              <b-icon icon="telephone-fill" class="h5 mr-2" variant="danger"></b-icon><a style="text-decoration:none; font-size: 18px; color:black;">(021) 8835 4455 <span style="color:black;">| (Bekasi) </span></a>
            </div>
            <h2 class="mt-3" style="color:red;font-family: 'Rajdhani';font-weight:bold"> Alamat email </h2>
            <div
              class="mt-3"
              style="display:flex;"
            >
              <b-icon icon="envelope-fill" class="h5 mr-2" variant="danger"></b-icon><a style="text-decoration:none; font-size: 18px; color:black;" target="blank">kba_motor120@yahoo.com</a>
            </div>
          </b-col>
          <!-- Right column of contact us -->
          <b-col
            xl="6"
          >
            <b-form @submit="submit">
              <b-row>
                <b-col
                  class="ml-5"
                >
                  <h1 style="font-family: 'Rajdhani';font-weight:bold; font-size: 64px; color:red;"> Informasi Data Diri </h1>
                </b-col>
              </b-row>
              <b-row>
                <b-col
                  cols="4"
                  class="ml-5 my-auto"
                >
                  <p class="mb-0 display-4" style="font-size: 18px;"> Nama Lengkap </p>
                </b-col>
                <b-col>
                  <b-form-input
                    id="inline-form-input-name"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Nama Anda"
                    v-model="form.name"
                    required
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row
                class="mt-4"
              >
                <b-col
                  cols="4"
                  class="ml-5 my-auto"
                >
                  <p class="mb-0 display-4" style="font-size: 18px;"> Alamat Email </p>
                </b-col>
                <b-col>
                  <b-form-input
                    id="email"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    placeholder="nama@gmail.com"
                    v-model="form.email"
                    required
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row
                class="mt-4"
              >
                <b-col
                  cols="4"
                  class="ml-5 my-auto"
                >
                  <p class="mb-0 display-4" style="font-size: 18px;"> No Handphone </p>
                </b-col>
                <b-col>
                  <b-form-input
                    id="email"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    placeholder="08XXXXXXXXX"
                    v-model="form.phone"
                    required
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col
                  class="ml-5 mt-4"
                >
                  <h1 style="font-family: 'Rajdhani';font-weight:bold; color:red;"> Pesan </h1>
                </b-col>
              </b-row>
              <b-row
                class="mt-4"
              >
                <b-col
                  cols="4"
                  class="ml-5"
                >
                  <p class="mb-0 display-4" style="font-size: 18px;"> Pesan </p>
                </b-col>
                <b-col>
                  <b-form-textarea
                    id="email"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    style="height: 114px"
                    v-model="form.pesan"
                    placeholder="tulis pesan anda"
                    required
                  ></b-form-textarea>
                </b-col>
              </b-row>
              <b-button class="kirim" type="submit" size="lg" style="position:absolute; right: 0px; bottom: 0px" variant="danger">Kirim</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-col>
      <b-col
        xl="2"
      >
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'contact-body',
  data () {
    return {
      form: {}
    }
  },
  methods: {
    submit () {
      console.log(this.form)
    }
  }
}
</script>

<style>
@media only screen and (max-width: 1200px) {
  .example.col-xl-6 {
    border-right: 0px solid black !important;
    border-bottom: 1px solid black;
    padding-bottom: 50px;
    margin-bottom: 50px;
  }
  .kirim {
    position: static !important;
    margin-top: 20px;
    float: right;
  }
  .Positioned {
    margin-left: 20px !important;
    margin-right: 20px !important;
  }
}
</style>
