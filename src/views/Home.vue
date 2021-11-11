<template>
  <div>
    <Slider />
    <About />
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import About from "@/views/About.vue";

export default {
  name: "Home",
  components: {
    Slider,
    About
  },
};
</script>
<style scoped>
*,
::after,
::before {
  box-sizing: border-box;
}
</style>