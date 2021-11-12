<template>
  <div>
    <b-row>
    </b-row>
    <b-row
      class="mb-5 mt-5"
    >
      <h1 style="font-family: 'Segoe UI'; text-align:center;"> Spesifikasi Motor</h1>
      <footer class="blockquote-footer mb-4" style="text-align:center; font-size: 16px">{{ Product.name }}</footer>
    </b-row>
    <b-row
      class="mb-5 mt-5"
    >
      <b-img :src="Product.image" class="mx-auto" style="max-width:32rem"></b-img>
    </b-row>
    <b-row
      class="Tabs"
    >
      <b-col
        xl="2"
      >
      </b-col>
      <b-col
        xl="8"
      >
        <md-tabs>
          <md-tab id="tab-mesin" style="padding:0;" md-label="Mesin">
            <b-card bg-variant="danger" text-variant="white" border-variant="light" class="text-center">
              <b-row>
                <b-col
                  cols="3"
                >
                  <b-row
                    class="ml-3 mb-2 mt-2"
                    style="font-size: 16px; font-weight:500; text-align:left;"
                  >
                    Tipe mesin
                  </b-row>
                  <b-row
                    class="ml-3 mb-2"
                    style="font-size: 16px; font-weight:500; text-align:left;"
                  >
                    Volume langkah
                  </b-row>
                  <b-row
                    class="ml-3 mb-2"
                    style="font-size: 16px; font-weight:500; text-align:left;"
                  >
                    Sistem Suplai Bahan Bakar
                  </b-row>
                  <b-row
                    class="ml-3 mb-2"
                    style="font-size: 16px; font-weight:500; text-align:left;"
                  >
                    Diameter X Langkah
                  </b-row>
                </b-col>
                <b-col>
                  <b-row
                    class="ml-5 mb-2 mt-2"
                    style="font-size: 16px"
                  >
                    {{ Product.tipeMesin }}
                  </b-row>
                  <b-row
                    class="ml-5 mb-2"
                    style="font-size: 16px"
                  >
                    {{ Product.volumeLangkah }}
                  </b-row>
                  <b-row
                    class="ml-5 mb-2"
                    style="font-size: 16px"
                  >
                    {{ Product.sistemSuplaiBahanBakar }}
                  </b-row>
                  <b-row
                    class="ml-5 mb-2"
                    style="font-size: 16px"
                  >
                    {{ Product.diamterXLangkah }}
                  </b-row>
                </b-col>
              </b-row>
            </b-card>
          </md-tab>
          <md-tab id="tab-transmisi" style="padding:0;" md-label="Transmisi">
            <b-card bg-variant="danger" text-variant="white" border-variant="light" class="text-center">
              <b-row>
                <b-col
                  cols="3"
                >
                  <b-row
                    class="ml-3 mb-2 mt-2"
                    style="font-size: 16px; font-weight:500; text-align:left;"
                  >
                    Tipe mesin
                  </b-row>
                  <b-row
                    class="ml-3 mb-2"
                    style="font-size: 16px; font-weight:500; text-align:left;"
                  >
                    Volume langkah
                  </b-row>
                  <b-row
                    class="ml-3 mb-2"
                    style="font-size: 16px; font-weight:500;text-align:left;"
                  >
                    Sistem Suplai Bahan Bakar
                  </b-row>
                  <b-row
                    class="ml-3 mb-2"
                    style="font-size: 16px; font-weight:500;text-align:left;"
                  >
                    Diameter X Langkah
                  </b-row>
                </b-col>
                <b-col>
                  <b-row
                    class="ml-5 mb-2 mt-2"
                    style="font-size: 16px"
                  >
                    {{ Product.tipeMesin }}
                  </b-row>
                  <b-row
                    class="ml-5 mb-2"
                    style="font-size: 16px"
                  >
                    {{ Product.volumeLangkah }}
                  </b-row>
                  <b-row
                    class="ml-5 mb-2"
                    style="font-size: 16px"
                  >
                    {{ Product.sistemSuplaiBahanBakar }}
                  </b-row>
                  <b-row
                    class="ml-5 mb-2"
                    style="font-size: 16px"
                  >
                    {{ Product.diamterXLangkah }}
                  </b-row>
                </b-col>
              </b-row>
            </b-card>
          </md-tab>
          <md-tab id="tab-posts" style="padding:0;" md-label="Dimensi">
            <b-card bg-variant="danger" text-variant="white" border-variant="light" class="text-center">
              <b-row>
                <b-col
                  cols="3"
                >
                  <b-row
                    class="ml-3 mb-2 mt-2"
                    style="font-size: 16px; font-weight:500;text-align:left;"
                  >
                    Tipe mesin
                  </b-row>
                  <b-row
                    class="ml-3 mb-2"
                    style="font-size: 16px; font-weight:500;text-align:left;"
                  >
                    Volume langkah
                  </b-row>
                  <b-row
                    class="ml-3 mb-2"
                    style="font-size: 16px; font-weight:500;text-align:left;"
                  >
                    Sistem Suplai Bahan Bakar
                  </b-row>
                  <b-row
                    class="ml-3 mb-2"
                    style="font-size: 16px; font-weight:500;text-align:left;"
                  >
                    Diameter X Langkah
                  </b-row>
                </b-col>
                <b-col>
                  <b-row
                    class="ml-5 mb-2 mt-2"
                    style="font-size: 16px"
                  >
                    {{ Product.tipeMesin }}
                  </b-row>
                  <b-row
                    class="ml-5 mb-2"
                    style="font-size: 16px"
                  >
                    {{ Product.volumeLangkah }}
                  </b-row>
                  <b-row
                    class="ml-5 mb-2"
                    style="font-size: 16px"
                  >
                    {{ Product.sistemSuplaiBahanBakar }}
                  </b-row>
                  <b-row
                    class="ml-5 mb-2"
                    style="font-size: 16px"
                  >
                    {{ Product.diamterXLangkah }}
                  </b-row>
                </b-col>
              </b-row>
            </b-card>
          </md-tab>
          <md-tab id="tab-stock" style="padding:0;" md-label="Stock">
            <b-card bg-variant="danger" text-variant="white" border-variant="light" class="text-center">
              <b-row>
                <b-col
                  cols="3"
                >
                  <b-row
                    class="ml-3 mb-2 mt-2"
                    style="font-size: 16px; font-weight:500;text-align:left;"
                  >
                    Tipe mesin
                  </b-row>
                  <b-row
                    class="ml-3 mb-2"
                    style="font-size: 16px; font-weight:500;text-align:left;"
                  >
                    Volume langkah
                  </b-row>
                  <b-row
                    class="ml-3 mb-2"
                    style="font-size: 16px; font-weight:500;text-align:left;"
                  >
                    Sistem Suplai Bahan Bakar
                  </b-row>
                  <b-row
                    class="ml-3 mb-2"
                    style="font-size: 16px; font-weight:500;text-align:left;"
                  >
                    Diameter X Langkah
                  </b-row>
                </b-col>
                <b-col>
                  <b-row
                    class="ml-5 mb-2 mt-2"
                    style="font-size: 16px"
                  >
                    {{ Product.tipeMesin }}
                  </b-row>
                  <b-row
                    class="ml-5 mb-2"
                    style="font-size: 16px"
                  >
                    {{ Product.volumeLangkah }}
                  </b-row>
                  <b-row
                    class="ml-5 mb-2"
                    style="font-size: 16px"
                  >
                    {{ Product.sistemSuplaiBahanBakar }}
                  </b-row>
                  <b-row
                    class="ml-5 mb-2"
                    style="font-size: 16px"
                  >
                    {{ Product.diamterXLangkah }}
                  </b-row>
                </b-col>
              </b-row>
            </b-card>
          </md-tab>
        </md-tabs>
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
  name: 'DetailBody',
  props: ['Product']
}
</script>

<style scoped>
@media only screen and (max-width: 1200px) {
  .Tabs {
    margin-left: 20px !important;
    margin-right: 20px !important;
  }
}
</style>
