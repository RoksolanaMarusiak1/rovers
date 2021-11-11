<template>
  <div class="slider">
    <transition-group name="fade" tag="div">
      <div class="slide current" v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
        <div name="content" class="content">
          <h1>Postcards from Mars</h1>
          <p>See all the latest images captured by NASA rovers</p>
          <router-link to="/photos">GET STARTED</router-link>
        </div>
      </div>
    </transition-group>
    <div class="buttons">
      <button class="prev" @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </button>
      <button class="next" @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    images: [
      "https://source.unsplash.com/NR_tXTuyTak/1600x900",
      "https://source.unsplash.com/4IrVnSpwk48/1600x900",
      "https://source.unsplash.com/OtXJhYjbKeg/1600x900",
      "https://source.unsplash.com/fM_ffy8Y2yk/1600x900",
    ],
    timer: null,
    currentIndex: 0,
  }),

  methods: {
    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style >
a {
  color: #ffb59e;
  text-decoration: none;
}

.slider {
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

.slide .content {
  position: absolute;
  bottom: 70px;
  opacity: 0;
  width: 600px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
  padding: 35px;
}

.slide .content h1 {
  margin-bottom: 10px;
}

.buttons .next {
  position: absolute;
  top: 40%;
  margin-right: 18px;
}

.buttons .prev {
  position: absolute;
  top: 40%;
}

.buttons button.next {
  position: absolute;
  top: 40%;
  right: 15px;
}

.buttons button.prev {
  position: absolute;
  top: 40%;
  left: 15px;
}

.buttons button {
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  padding: 13px 15px;
  border-radius: 50%;
  outline: none;
}

.buttons button:hover {
  background-color: #fff;
  color: #333;
}

.slide.current .content {
  opacity: 1;
}

@media (max-width: 500px) {
  .slide .content {
    left: 0;
    width: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;

  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
</style>