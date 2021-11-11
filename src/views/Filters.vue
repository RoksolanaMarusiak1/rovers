<template>
  <div>
    <div class="div1">
    <v-select
      v-model="selected"
      :items="selectorItems"
      @change="onchange"
      label="Rover name"
      class="roverSelector"
    ></v-select>
    <v-text-field :rules="rules" @change="check" label="Sol" class="solInput" v-model="sol"></v-text-field>
    </div>  
    <div v-for="camera in cameras" :key="camera">
      <v-checkbox
        @click="check"
        class="cameraCheckbox"
        :disabled="isCameraDisabled(camera)"
        v-model="selectedCameras"
        color="primary"
        :label="camera"
        :value="camera"
      ></v-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    photos: [],
    sol: 1,
    selectedCameras: [],
    disabledCameras: [],
    selected: "",
      rules: [
        value => !!value || 'Required.',
        value => (value && value > 0) || 'Only positive values.',
      ],
    cameras: [
      "FHAZ",
      "RHAZ",
      "MAST",
      "CHEMCAM",
      "MAHLI",
      "MARDI",
      "NAVCAM",
      "PANCAM",
      "MINITES",
    ],
    rover: [
      {
        name: "Curiosity",
        cameras: [
          "FHAZ",
          "RHAZ",
          "MAST",
          "CHEMCAM",
          "MAHLI",
          "MARDI",
          "NAVCAM",
        ],
      },
      {
        name: "Opportunity",
        cameras: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
      },
      {
        name: "Spirit",
        cameras: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
      },
    ],
  }),
  methods: {
    onchange() {
      const rover = this.rover.filter((item) => {
        return item.name.includes(this.selected);
      });
      this.disabledCameras = this.cameras.filter(
        (x) => !rover[0].cameras.includes(x)
      );
      this.selectedCameras = this.selectedCameras.filter(
        (x) => !this.disabledCameras.includes(x)
      );
      this.check();
    },
    isCameraDisabled(camera) {
      return this.disabledCameras.includes(camera);
    },
    async check() {
      if (this.selected && this.sol && this.selectedCameras.length > 0) {
        this.photos = await this.$store.dispatch("getPhotos", {
          name: this.selected.toLowerCase(),
          sol: this.sol,
          selectedCameras: this.selectedCameras,
        });
      } else this.photos = [];
      this.$emit("photosUpdated", {
        photos: this.photos,
      });
    },
  },
  computed: {
    selectorItems() {
      return this.rover.map((a) => a.name);
    },
  },
};
</script>

<style scoped>
.div1 {
  width: 100%;
  display: block;
  float: left;
}
.roverSelector, .solInput {
width: 30%;
display: block;
float: left;
margin: 20px 60px 20px 30px;

}
.cameraCheckbox {
width: 9%;
display: block;
float: left;
margin: 10px 10px 0 10px;
}
</style>