<template>
  <div class="container">
    <div class="row">
      <div id="box" class="col-8 m-5">
        <div class="container">
          <h1 style="border-bottom: 2px solid;font-family: 'Rajdhani';font-weight:bold; font-size: 64px; color:red;" class="mt-5"> Simulasi Kredit </h1>
        </div>
        <Form />
      </div>
      <div class="col-3">
      </div>
    </div>
  </div>
</template>

<script>
import Form from '../components/Credit-Sim/Body.vue'

export default {
  name: 'Credit-Sim',
  components: {
    Form
  }
}
</script>

<style>
#box {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 20px;
}
</style>
