<template>
  <div class="navbar">
    <v-app-bar
      fixed
      color="#6A76AB"
      elevate-on-scroll
      dark
    >
       <v-btn @click="$router.push('/')" icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
};
</script>
