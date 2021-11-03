<template>
  <div id="app">
    <nav-bar/>
    <b-container>
      <router-view/>
    </b-container>
    <side-bar/>
  </div>
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'

export default {
  components: {
    NavBar,
    SideBar,
  }
}
</script>