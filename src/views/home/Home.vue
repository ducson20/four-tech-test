<script setup lang="ts">
import { inject } from "vue";
import Navbar from "@/components/layouts/navbar/Navbar.vue";
import Hero from "@/components/layouts/hero/Hero.vue";
import AboutUs from "./AboutUs.vue";
import OurGames from "./OutGames.vue";
import OurPartners from "./OutPartners.vue";
import Footer from "@/components/layouts/footer/Footer.vue";

const setIsLoading = inject<any>("setIsLoading")!;

const test = async () => {
  try {
    setIsLoading(true);
  } catch (error) {
  } finally {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }
};

test();
</script>

<template>
  <header>
    <Navbar />
    <Hero />
  </header>
  <main>
    <AboutUs />
    <OurGames />
    <OurPartners />
  </main>
  <Footer />
</template>

<style lang="scss">
@import "../../assets/responsive.scss";

// HEADER
header {
  margin-bottom: 128px;
  height: 96vh;
  background: url("../../assets/svg/hero.svg") no-repeat center;
  background-size: cover;
}

// <= 739px
@media (max-width: 739px) {
  header {
    margin-bottom: 256px;
    height: 91vh;
    background: url("../../assets/svg/hero-mobile.svg") no-repeat center;
    background-size: cover;
  }
}

// > 740px - <= 1023px
@media (min-width: 740px) and (max-width: 1023px) {
  header {
    margin-bottom: 380px;
  }
}

// > 1240px - <= 1919px
@media (min-width: 1240px) and (max-width: 1919px) {
  header {
    height: 120vh;
  }
}

// IPHONE X
@media (width: 375px) and (height: 812px) {
  header {
    height: 74vh !important;
  }
}

// IPHONE 6/7/8 PLUS
@media (width: 414px) and (height: 736px) {
  header {
    height: 88vh !important;
  }
}

// SMALL TABLET
@media (width: 600px) and (height: 800px) {
  header {
    height: 120vh;
  }
}
</style>
