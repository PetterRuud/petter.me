<template>
  <div class="wrapper">
    <Header />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Resume from "~/components/Resume.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Resume,
    Footer
  }
};
</script>

<style>
</style>
