<template>
  <div id="app" :class="style">
    <ff-logo />
    <ff-nav @styles="renderStyle" />
    <div class="container">
      <transition mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import ffNav from "@/components/app/Nav";
import ffLogo from "@/components/app/Logo";
export default {
  components: {
    ffNav,
    ffLogo
  },
  data() {
    return {
      style: ["dark-theme", "sans"]
    };
  },
  methods: {
    renderStyle(styles) {
      this.style = styles;
    }
  }
};
</script>

<style lang="scss"></style>
