<template>
  <div :class="backgroundClassName">
    <SiteHeader />
    <SiteNav />
    <div>
      <Nuxt />
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default {
  components: {
    SiteHeader,
    SiteNav,
    SiteFooter,
  },
  computed: {
    backgroundClassName() {
      if (this.$route.name === "index") {
        return "hand";
      } else {
        return "default";
      }
    },
  },
};
</script>

<style lang="scss">
html,
body {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
  font-size: rem(16px);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.hand {
  background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    ),
    url("~assets/images/home_hand.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  @include media-breakpoint-down(xs) {
    background-size: 100%;
    background-position: center 20%;
  }
}

.default {
  background-color: $bg-grey;
  background-image: url("~assets/images/bone-bg-left.png"),
    url("~assets/images/bone-bg-right.png");
  background-repeat: no-repeat;
  background-size: 12%;
  background-position: top left, bottom right;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
