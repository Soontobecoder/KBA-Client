<template>
  <div>
    <b-card body-class="text-center" header-tag="nav" style="z-index: 1;">
      <h1 style="font-family: 'Rajdhani" class="display-4 mb-3" id="Title">Temukan motor idamanmu</h1>
      <hr />
      <b-tabs content-class="mt-3" justified
        active-nav-item-class="font-weight-bold text-secondary"
      >
        <b-tab active>
          <template #title>
            <p style="color:black;">Berdasarkan Spesifikasi</p>
          </template>
          <b-form @submit.prevent="submitSpek" @reset="onReset">
            <b-row>
              <b-col
                sm="3"
              >
                <p class="lead" style="text-align:left; margin-bottom:3px">Kapasitas mesin:</p>
                <b-form-select
                  id="input-1"
                  v-model="formSpek.kapasitas_mesin"
                  :options="cc"
                ></b-form-select>
              </b-col>
              <b-col
                sm="3"
              >
                <p class="lead" style="text-align:left; margin-bottom:3px">Tipe Transmisi</p>
                <b-form-select
                  id="input-1"
                  v-model="formSpek.transmisi"
                  :options="tipe"
                ></b-form-select>
              </b-col>
              <b-col
                sm="3"
              >
                <p class="lead" style="text-align:left; margin-bottom:3px">Sistem Suplai Bahan Bakar</p>
                <b-form-select
                  id="input-1"
                  v-model="formSpek.SSBB"
                  :options="ssbb"
                ></b-form-select>
              </b-col>
              <b-col
                sm="3"
                class="buttons"
              >
                <p class="lead" style="text-align:left; margin-bottom:3px; opacity: 0;">Sistem Suplai Bahan Bakar</p>
                <b-button type="submit" variant="primary" class="mr-2">Cari</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-tab>
        <b-tab title="Berdasarkan Harga">
          <template #title>
            <p style="color:black;">Berdasarkan Harga</p>
          </template>
          <b-form @submit.prevent="submitHarga">
            <b-row>
              <b-col
                sm="5"
              >
                <p class="lead" style="text-align:left; margin-bottom:1px">Minimum Price : Rp {{ valueMin }},00</p>
                <b-form-input v-model="formHarga.hargaMin" @input="separatorMin" step="10000" type="range" min="0" :max="formHarga.hargaMax"></b-form-input>
              </b-col>
              <b-col
                sm="5"
              >
                <p class="lead" style="text-align:left; margin-bottom:1px">Maximum Price : Rp {{ valueMax }},00</p>
                <b-form-input v-model="formHarga.hargaMax" @input="separatorMax" step="10000" type="range" :min="formHarga.hargaMin" max="100000000"></b-form-input>
              </b-col>
              <b-col
                sm="2"
              >
                <b-button type="submit" variant="primary" class="mr-2 mt-2 mb-2">Cari</b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-tab>
        <b-tab title="Berdasarkan tipe">
          <template #title>
            <p style="color:black;">Berdasarkan Tipe</p>
          </template>
        </b-tab>
        <b-tab title="Berdasarkan tipe">
          <template #title>
            <p style="color:black;">Berdasarkan Preferensi</p>
          </template>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
// import { Money } from 'v-money'

export default {
  name: 'filterCard',
  data () {
    return {
      formSpek: {
        kapasitas_mesin: this.$store.state.formSpek.kapasitas_mesin,
        transmisi: this.$store.state.formSpek.transmisi,
        SSBB: this.$store.state.formSpek.SSBB
      },
      cc: [{ value: null, text: 'Select an option' }, '110 cc', '125 cc', '150 cc'],
      tipe: [{ value: null, text: 'Select an option' }, 'manual', 'automatic'],
      ssbb: [{ value: null, text: 'Select an option' }, 'PGM-FI'],
      formHarga: {
        hargaMin: this.$store.state.harga.hargaMin,
        hargaMax: this.$store.state.harga.hargaMax
      },
      valueMin: this.$store.state.harga.hargaMin,
      valueMax: this.$store.state.harga.hargaMax
    }
  },
  created () {
    this.formSpek = this.$store.state.formSpek
  },
  methods: {
    onReset () {
      this.formSpek = {
        kapasitas_mesin: null,
        transmisi: null,
        SSBB: null
      }
      this.$store.dispatch('submitForm', this.formSpek)
    },
    submitSpek () {
      this.$store.dispatch('getProducts')
      this.$store.dispatch('subHarga', {
        hargaMin: 0,
        hargaMax: 100000000
      })
      this.$store.dispatch('submitForm', this.formSpek)
      this.$router.push({ path: '/products', replace: true })
    },
    submitHarga () {
      this.$store.dispatch('submitForm', {})
      this.$store.dispatch('getProducts')
      this.$store.dispatch('subHarga', this.formHarga)
      this.$router.push({ path: '/products', replace: true })
    },
    separatorMin () {
      this.valueMin = this.formHarga.hargaMin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    separatorMax () {
      this.valueMax = this.formHarga.hargaMax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
</script>

<style>
.bv-no-focus-ring.col-form-label.pt-0 {
  text-align: left;
}
#Title {
  font-family: 'Oswald', sans-serif;
}
</style>
