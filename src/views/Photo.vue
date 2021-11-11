<template>
  <div class="card">
    <v-card class="mx-auto" width="400">
      <v-img :src="photo.img_src" height="300px"></v-img>
      <v-card-title>Photo by Rover {{ photo.rover.name }}</v-card-title>
      <v-card-subtitle>
        Camera {{ photo.camera.full_name }} ({{
          photo.camera.name
        }})</v-card-subtitle
      >
      <v-card-subtitle>
        Sol: {{ photo.sol }}<br />Earth Date:
        {{ photo.earth_date }}</v-card-subtitle
      >
    </v-card>
    {{photo}}
  </div>
</template>

<script>
export default {
  props: {
    photo: Array
  }
};
</script>

<style scoped>
.card {
  display: block;
  float: left;
  margin: 0px 20px 80px 70px;
}

</style>