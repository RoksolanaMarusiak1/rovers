<template>
  <div class="wrapper">
    <div id="filters">
      <Filters @photosUpdated="updatePhotos" />
    </div>
    <div id="photos">
      <div v-if="paginatedOrders.length > 0">
        <div v-for="photo in paginatedOrders" :key="photo.id">
          <Photo :photo="photo" />
        </div>
      </div>
    </div>
    <div id="button">
      <v-btn
        v-if="currentPage * maxPerPage < photos.length"
        @click="loadMore"
        x-large
        dark
        color="#6A76AB"
      >
        LOAD MORE
      </v-btn>
    </div>
  </div>
</template>

<script>
import Photo from "@/views/Photo.vue";
import Filters from "@/views/Filters.vue";
export default {
  data: () => ({
    currentPage: 1,
    maxPerPage: 10,
    photos: [],
  }),
  methods: {
    loadMore() {
      this.currentPage += 1;
    },
    updatePhotos(value) {
      this.photos = value.photos;
    },
  },
  computed: {
    totalResults() {
      return Object.keys(this.photos).length;
    },
    pageCount() {
      return Math.ceil(this.totalResults / this.maxPerPage);
    },
    pageOffest() {
      return this.maxPerPage * this.currentPage;
    },
    paginatedOrders() {
      return this.photos.slice(0, this.currentPage * this.maxPerPage);
    },
  },
  components: {
    Photo,
    Filters,
  },
};
</script>

<style>
.wrapper {
  display: grid;
  grid-template-areas:
    "filters"
    "photos"
    "button";
  grid-template-columns: 1fr;
  grid-template-rows: 0fr, 1fr 1fr;
  margin: 0;
}

#filters {
  grid-area: filters;
  margin: 70px;
}
#photos {
  grid-area: photos;
}
#button {
  grid-area:button;
  text-align: center;
  margin: 0 0 50px 0;
}
</style>