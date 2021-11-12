<template>
  <div>
    <b-jumbotron
      style="display: flex; justify-content: space-between"
    >
      <div>
        <p style="font-weight:400;font-size:2rem; line-height:1.1">
          Tertarik membeli {{ name }} ?
        </p>
        <p style="font-size: 18px">
          Kami siap menjelaskan lebih lanjut perihal <span style="font-weight:bold;" >{{ name }}</span> dengan seluruh proses pembelian cash dan kredit.
        </p>
      </div>
      <div>
        <b-button :to="'/order/?n=' + name + '&index=' + id" style="height:100%; display:inline-flex;align-items:center; color:white; text-decoration:none" block variant="danger" class="my-auto" size="lg">Hubungi kami</b-button>
      </div>
      <div>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'order-banner',
  props: ['name', 'id']
}
</script>

<style scoped>
.button {
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
</style>
