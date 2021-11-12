<template>
  <div id="app">
    <NavBar
      class="sticky"
    />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '../src/components/NavBar.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: system-ui;
  text-decoration: none;
  /* text-align: center; */
  overflow-x: hidden;
}

NavBar.sticky {
  position: sticky;
  top: 0;
}
/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
