<template>
  <div id="app">
    <v-app>
      <Header v-if="$route.meta.header === 1"/>
      <router-view />
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>