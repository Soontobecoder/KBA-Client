<template>
  <b-row>
    <b-col
      xl="6"
      class="kolom-kiri"
    >
      <h1 style="color:red;"> Ingin kami kontak anda? </h1>
      <footer class="blockquote-footer mt-1 mb-4" style="font-size: 18px">Tulis kontak anda disini supaya kami bisa menghubungi anda langsung</footer>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="Email:"
          style="color:red;"
          label-size="lg"
          label-for="input-1"
          description="kami tidak pernah menyebar informasi apapun tentang kustomer kami"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            size="lg"
            placeholder="example@gmail.com"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group style="color:red;" label-size="lg" id="input-group-2" label="Nama:" label-for="input-2">
          <b-form-input
            id="input-2"
            size="lg"
            v-model="form.name"
            placeholder="Nama Anda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group style="color:red;" id="input-group-3" label="Telepon:" label-size="lg" label-for="input-3">
          <VuePhoneNumberInput size="lg" default-country-code="ID" v-model="form.phone" />
        </b-form-group>

        <b-form-group style="color:red;" label-size="lg" id="input-group-2" label="Motor:" label-for="input-2">
          <b-form-input
            size="lg"
            list="productList"
            v-model="form.motor"
            placeholder="Motor yang anda minati"
            required
          >
          </b-form-input>
          <datalist id="productList">
            <!-- <option>Manual Option</option> -->
            <option v-for="product in Products" :key="product.id">{{ product.name }}</option>
          </datalist>
        </b-form-group>

        <div>
          <b-button class="kontak" size="lg" type="submit" style="position:absolute; right:12px; bottom:0" variant="danger">Submit</b-button>
        </div>
      </b-form>
    </b-col>
    <b-col
      xl="6"
    >
      <h1 style="color:red;"> Informasi Kontak kami </h1>
      <footer class="blockquote-footer mb-4" style="font-size: 18px">Informasi kontak kami bila anda ingin mengunjungi atau menghubungi kami langsung</footer>
      <b-row>
        <b-col
          cols="2"
        >
        </b-col>
        <b-col>
          <b-button to="/contact" style="text-decoration:none;color:white;padding: 30px;height:100%; display:flex;align-items:center;" block variant="danger" class="my-auto" size="lg">Untuk informasi kontak kami, klik disini</b-button>
        </b-col>
        <b-col
          cols="2"
        >
        </b-col>
      </b-row>
      <h2 style="color:red;" class="mt-5">
        Mengapa memesan dengan kami?
      </h2>
      <footer class="blockquote-footer mt-1 mb-4" style="font-size: 18px">Keuntungan anda bila anda memilih bertransaksi dengan kami</footer>
      <ul class="list-unstyled">
        <b-media tag="li">
          <template #aside>
            <!-- <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img> -->
            <div
              style="font-size: 4rem"
            >
              <b-icon icon="wrench" class="rounded-circle bg-danger p-2" variant="light"></b-icon>
            </div>
          </template>
          <h5 class="mt-0 mb-1" style="color:red;">Lengkap dengan fasilitas bengkel</h5>
          <p class="mb-0">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
            ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </b-media>

        <b-media tag="li" class="my-4">
          <template #aside>
            <div
              style="font-size: 4rem"
            >
              <b-icon icon="clock-history" class="rounded-circle bg-danger p-2" variant="light"></b-icon>
            </div>
          </template>

          <h5 class="mt-0 mb-1" style="color:red;">Proses Kredit Cepat</h5>
          <p class="mb-0">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
            ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </b-media>

        <b-media tag="li">
          <template #aside>
            <div
              style="font-size: 4rem"
            >
              <b-icon icon="lock" class="rounded-circle bg-danger p-2" variant="light"></b-icon>
            </div>
          </template>

          <h5 class="mt-0 mb-1" style="color:red;">Proses Aman</h5>
          <p class="mb-0">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
            ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </b-media>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input'

export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        phone: null,
        checked: [],
        motor: this.$route.query.n || ''
      },
      show: true
    }
  },
  computed: {
    Products () {
      return this.$store.state.products
    }
  },
  components: {
    VuePhoneNumberInput
  },
  methods: {
    onSubmit (event) {
      const text = 'halo, saya tertarik dengan motor ' + this.form.motor + ' ingin bertanya lebih lanjut'
      event.preventDefault()
      window.open('https://wa.me/087776749115?text=' + text, '_blank')
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.phone = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>

@media only screen and (max-width: 1200px) {
  .kontak {
    position: static !important;
    float: right;
  }
  .kolom-kiri {
    padding-bottom: 40px;
  }
}

</style>
