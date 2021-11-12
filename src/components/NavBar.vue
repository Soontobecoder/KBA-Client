<template>
  <div>
    <div class="header">
      <b-row class="mt-4 mb-4">
        <b-col md="4" class="Left" style="margin-left:10px">
          <img src="../assets/pngegg.png" style="max-width: 30vh">
        </b-col>
        <b-col class="my-auto Middle">
          <b-input-group>
            <template #append>
              <b-button type="dark" variant="danger">Search</b-button>
            </template>
            <b-form-input v-model="search" list="product-list"></b-form-input>
              <datalist id="product-list">
                <!-- <option>Manual Option</option> -->
                <option v-for="product in Products" :key="product.id">{{ product.name }}</option>
              </datalist>
          </b-input-group>
        </b-col>
        <b-col class="my-auto Right">
          <div style="text-align:center; font-family: 'Segoe UI'; font-size: 24px; color: #dc3545">
            PT Kartika Berkat Abadi
          </div>
          <div style="text-align:center; font-family: 'Segoe UI'; font-size: 18px; color: #dc3545">
            Dealer & Bengkel resmi motor Honda
          </div>
        </b-col>
      </b-row>
    </div>
    <b-navbar id="navbar" class="sticky" fixed="top" sticky toggleable="lg" type="dark" variant="danger">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto" style="font-size: 20px">
          <b-nav-item href="#" active><router-link to="/" class="nav-link" >Home </router-link><span class="sr-only">(current)</span></b-nav-item>
          <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
          <b-nav-item><router-link to="/products" class="nav-link" >Products </router-link> <span class="sr-only">(current)</span></b-nav-item>
          <b-nav-item><router-link to="/our-dealer" class="nav-link" >Dealer</router-link> <span class="sr-only">(current)</span></b-nav-item>
          <b-nav-item class="bordered" style="border-right: 1px solid white;"><router-link to="/contact" class="nav-link" >Contact us <span class="sr-only">(current)</span></router-link></b-nav-item>
          <b-dropdown v-if="this.$route.name != 'Home'" variant="danger" toggle-class="text-decoration-none" no-caret  class="m-md-2">
            <template #button-content>
              <MenuIcon title="open menu" :size="24"/>
            </template>
            <b-dropdown-item href="/#featured-products">Motor Pilihan</b-dropdown-item>
            <!-- <b-dropdown-item v-else to="/order">Pemesanan Motor</b-dropdown-item> -->
            <b-dropdown-item style="display:none;">Filter Motor</b-dropdown-item>
            <b-dropdown-item v-if="this.$route.name != 'Home'" href="/#filter">Filter Motor</b-dropdown-item>
            <b-dropdown-item to="/order">Pemesanan Motor</b-dropdown-item>
            <!-- <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item active>Active action</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item> -->
          </b-dropdown>
          <b-dropdown v-else right variant="danger" toggle-class="text-decoration-none" no-caret  class="m-md-2 side-menu">
            <template #button-content>
              <MenuIcon title="open menu" :size="24"/>
            </template>
            <b-dropdown-item disabled>
              <b-row>
                <b-col
                  cols="10"
                  style="padding: 30px"
                >
                  <h1 style="color:red;font-family: 'Rajdhani'; font-weight:bold;" class="mb-4">KBA GROUP</h1>
                  <p class="mb-5" style="color: black; font-weight:300;line-height: 1.3;font-size: 20px">
                    PT Kartika Berkat Abadi adalah dealer Honda
                    <br/>
                    terpercaya yang melayani pembelian daerah JABODETABEK.
                    <br/>
                    PT KBA berasosiasi dengan PT Mancung Motor dan
                    <br/>
                    PT Bekasi Motor
                  </p>
                  <h3 style="color: red;font-family: 'Rajdhani'; font-weight:bold;" class="mb-3"> QUICK INFO </h3>
                  <div
                    style="display: flex"
                  >
                    <b-icon icon="clock" class="h5 mr-2" variant="danger"></b-icon><p style="text-decoration:none;font-size:18px;color:black"> Senin - Jumat : 09.00 - 17.00</p>
                  </div>
                  <div
                    class="mt-n2 mb-2"
                    style="display: flex"
                  >
                    <b-icon icon="clock" class="h5 mr-2" style="opacity:0;" variant="danger"></b-icon><p style="text-decoration:none;font-size:18px;color:black"> Sabtu - Minggu : 09.00 - 15.00</p>
                  </div>
                  <div
                    style="display: flex"
                  >
                    <b-icon icon="telephone-inbound" class="h5 mr-2" variant="danger"></b-icon><p style="text-decoration:none;font-size:18px;color:black"> + (62) 21 385-3141</p>
                  </div>
                  <div
                    class="mt-n2 mb-2"
                    style="display: flex"
                  >
                    <b-icon icon="clock" class="h5 mr-2" style="opacity:0;" variant="danger"></b-icon><p style="text-decoration:none;font-size:18px; color:black">+ (62) 21 344-2358</p>
                  </div>
                  <div
                    style="display: flex"
                  >
                    <b-icon icon="envelope" class="h5 mr-2" variant="danger"></b-icon><p style="text-decoration:none;font-size:18px;color:black"> kba_motor120@yahoo.com</p>
                  </div>
                </b-col>
                <b-col
                  cols="1"
                >
                </b-col>
              </b-row>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-card
                overlay
                align="center"
                img-src="https://picsum.photos/900/250/?image=3"
                img-alt="Order here"
                text-variant="white"
                title="Tertarik membeli?"
              >
                <b-card-text>
                  <b-button @click="redirect" class="mt-2" style="float:center;" pill variant="danger">Klik disini</b-button>
                </b-card-text>
              </b-card>
            </b-dropdown-item>
          </b-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue'

export default {
  name: 'NavBar',
  data () {
    return {
      search: '',
      visible: false
    }
  },
  components: {
    MenuIcon
  },
  computed: {
    Products () {
      return this.$store.state.products
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
    console.log(this.$route.name, 'ini nama linknya kalo ada')
  },
  methods: {
    handleScroll (event) {
      console.log('scrolled')
      // Any code to be executed when the window is scrolled
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('navbar').style.top = '0'
      } else {
        document.getElementById('navbar').style.top = '-50px'
      }
    },
    redirect () {
      this.$router.push({ path: '/order' })
    }
  }
}
</script>

<style>

b-navbar.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

div.card.persuade:hover {
  cursor: pointer;
  transform: scale(1.05);
}

@media only screen and (max-width: 1000px) {
  .Middle {
    display: none;
  }
}

@media only screen and (max-width: 770px) {
  .Left {
    display: flex;
    justify-content: center;
  }
}

@media only screen and (max-width: 991px) {
  .bordered {
    border-right: 0px solid black !important;
  }
  .side-menu {
    display: none !important;
  }
}

</style>>
