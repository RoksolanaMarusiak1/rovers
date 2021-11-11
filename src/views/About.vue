<template>
  <div>
    <div class="aboutWrapper">
      <div class="about">
        <h1>About the program</h1>
        <p>
          NASA’s Mars Exploration Program is a science-driven,
          technology-enabled study of Mars as a planetary system in order to
          understand: the formation and early evolution of Mars as a planet the
          history of geological and climate processes that have shaped Mars
          through time the potential for Mars to have hosted life (its
          “biological potential”) the future exploration of Mars by humans, and
          how Mars compares to and contrasts with Earth.
        </p>
      </div>
    </div>
    <div class="itemsContainer">
      <div class="items">
        <div class="item">
          <div class="aboutRover">
            <h3>Curiosity</h3>
            <p>
              Curiosity was launched from Cape Canaveral (CCAFS) on 26 November
              2011, at 15:02:00 UTC and landed on Aeolis Palus inside Gale
              crater on Mars on 6 August 2012, 05:17:57 UTC. The Bradbury
              Landing site was less than 2.4 km (1.5 mi) from the center of the
              rover's touchdown target after a 560 million km (350 million mi)
              journey.
            </p>
          </div>
          <div class="roverPhoto">
            <img src="https://mars.nasa.gov/layout/general/images/msl.png" />
          </div>
        </div>
        <div class="item">
          <div class="aboutRover">
            <h3>Opportunity</h3>
            <p>
              Is a robotic rover that was active on Mars from 2004 until
              mid-2018. Opportunity was operational on Mars for 5110 sols (5250
              days; 14 years, 136 days). Launched on July 7, 2003, as part of
              NASA's Mars Exploration Rover program, it landed in Meridiani
              Planum on January 25, 2004, three weeks after its twin Spirit.
            </p>
          </div>
          <div class="roverPhoto">
            <img
              src="https://mars.nasa.gov/layout/mer/images/mars-exploration-rover.png"
            />
          </div>
        </div>
        <div class="item">
          <div class="aboutRover">
            <h3>Spirit</h3>
            <p>
              Is a robotic rover on Mars, active from 2004 to 2010. Spirit was
              operational on Mars for 2208 sols (2249 days; 6 years, 77 days).
              It was one of two rovers of NASA's Mars Exploration Rover Mission
              managed by the Jet Propulsion Laboratory. Spirit landed
              successfully within the impact crater Gusev on Mars at 04:35
              Ground UTC on January 4, 2004.
            </p>
          </div>
          <div class="roverPhoto">
            <img
              src="https://mars.nasa.gov/layout/general/images/mars2020.png"
            />
          </div>
        </div>
        <v-btn
          class="button"
          @click="$router.push('/photos')"
          x-large
          color="#EB9532"
        >
          MORE
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.aboutWrapper {
  text-align: center;
  background: url("https://source.unsplash.com/taz4Xc32UCs/1600x900");
}
.about {
  margin: 0 auto;
  padding: 0;
  width: 55%;
  min-height: 110vh;
  border-radius: 20%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -khtml-border-radius: 50%;
  background-size: cover;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/7/70/Mars_hemisphere_1.jpg");
  background-repeat: no-repeat;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}

.flex {
  display: flex;
}
h1 {
  text-transform: uppercase;
  font: 700 3.5em "Oswald", sans-serif;
  letter-spacing: 0;
  padding: 3.2em 0 0.325em;
  display: block;
  margin: 0 auto;
  text-align: center;
  color: #ffe4e1;
  text-shadow: 1px 1px 1px #fa8539, 2px 2px 1px #fa8539;
}
p {
  font-size: 25px;
  font-weight: 300;
  line-height: 42px;
  color: #fdf5e6;
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  width: 70%;
}

.aboutRover h3 {
  margin: 10px 0;
  font-size: 50px;
  font-weight: 700;
  color: #001d38;
}

.aboutRover p {
  width: 80%;
  font-size: 19px;
  font-weight: 400;
  color: #727272;
  margin: 0 10% 5% 10%;
}

.roverPhoto img {
  width: 50%;
}
.itemsContainer {
  background: url("https://source.unsplash.com/pZ-XFIrJMtE/1600x900");
}
.items {
  background: rgba(216, 210, 210, 0.6);
  width: 100%;
  overflow: hidden;
  font-size: 0;
}
.item {
  font-size: 12px;
  min-height: 100vh;
  width: 33%;
  text-align: center;
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.button {
  width: 20%;
  left: 39%;
  margin: 0 0 40px 0;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 399px) {
  .about {
    max-height: 30vh;
    background: none;
    box-shadow: none;
    width: 100%;
  }
  h1 {
    font: 700 2em "Oswald", sans-serif;
    padding: 1em 0 0.325em;
  }
  p {
    font-size: 16px;
    width: 90%;
  }

  .itemsContainer {
    background: none;
  }
  .item {
    width: 100%;
    min-height: 110vh;
  }

  .item p {
    font-size: 16px;
  }

  .button {
    width: 100%;
    left: 0;
  }
}

@media only screen and (max-width: 767px) and (min-width: 400px) {
  .about {
    max-height: 30vh;
    background: none;
    box-shadow: none;
    width: 100%;
  }
  h1 {
    font: 700 2em "Oswald", sans-serif;
    padding: 2em 0 0.325em;
  }
  p {
    font-size: 1.3em;
    width: 80%;
  }

  .item {
    width: 100%;
    min-height: 890px;
  }

  .item p {
    font-size: 1.9em;
  }

  .button {
    width: 100%;
    left: 0;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 840px) and (min-width: 768px) {
  .about {
    width: 100%;
    margin: 0 auto;
    max-height: 20vh;
  }
  h1 {
    font: 700 3em "Oswald", sans-serif;
    padding: 3em 0 0.325em;
  }
  p {
    font-size: 18px;
    width: 80%;
  }
  .item {
    width: 33%;
    min-height: 890px;
  }

  .item p {
    font-size: 1.4em;
    min-height: 600px;
    padding: 0;
  }
}

@media only screen and (max-width: 1024px) and (min-width: 841px) {
  .about {
    width: 75%;
  }
  h1 {
    font: 700 3em "Oswald", sans-serif;
    padding: 3em 0 0.325em;
  }
  p {
    font-size: 18px;
    width: 80%;
  }
  .item {
    width: 33%;
    min-height: 700px;
  }

  .item p {
    font-size: 1.4em;
    min-height: 500px;
    padding: 0;
  }
}

@media only screen and (max-width: 1440px) and (min-width: 1025px) {
  .about {
    width: 59%;
    min-height: 108vh;
  }
  h1 {
    font: 700 3em "Oswald", sans-serif;
    padding: 3em 0 0.325em;
  }
  p {
    font-size: 28px;
    width: 80%;
  }
  .item {
    width: 33%;
    min-height: 690px;
  }

  .item p {
    font-size: 1.9em;
    min-height: 440px;
    padding: 0;
  }
}
</style>