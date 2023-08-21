<template>
  <div>
    <div class="top-banner">
      <p v-html="header.banner"></p>
      <p class="disclaimer">
        <span v-html="header.disclaimer"></span>
        <router-link to="privacy">
          <span v-html="header.privacyPolicyLink"></span>
        </router-link>.
      </p>
      <p class="disclaimer">
        <span v-html="header.disclaimerEducational1"></span><a v-b-modal.refs class="btn-refs">{{ header.referenceLink }}</a><span v-html="header.disclaimerEducational2"></span>
      </p>
    </div>
    <b-navbar class="site-header">
      <b-container fluid="xl" class="py-1">
        <NuxtLink to="/"
          ><div class="logo-container">
            <!-- <img src="~/assets/images/logo.png" /> -->
          </div>
        </NuxtLink>
        <b-navbar-nav class="ml-auto">
          <!-- <b-button class="button-cc mr-3"
            ><img src="~/assets/icons/cc.svg"
          /></b-button> -->
          <b-button v-b-toggle.site-nav class="button-menu pr-0"
            ><img src="~/assets/icons/menu.svg"
          /></b-button>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "SiteHeader",

  computed: {
    header() {
      return this.$t("header");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 10px 0;
  background: $white;
}

.top-banner {
  background: $lighter-grey;
  p {
    color: $dark-grey;
    text-transform: uppercase;
    font-size: rem(8px);
    text-align: center;
    padding: rem(3px);
    margin-bottom: 0;
    &.disclaimer {
      font-size: rem(10px);
    }
  }
}
.logo-container {
  height: rem(53px);
  width: rem(130px);
  @include media-breakpoint-down(xs) {
    width: rem(80px);
  }
  img {
    width: 100%;
  }
}

.button-cc,
.button-menu {
  background: transparent;
  border-color: transparent;
  padding: 0;
  &:hover,
  &:focus,
  &:active,
  &:not(:disabled):not(.disabled):active,
  &:not(:disabled):not(.disabled).active {
    background-color: transparent;
    box-shadow: none;
    border-color: transparent;
  }
  &:focus-visible {
    background-color: $white;
    color: $purple;
    box-shadow: 0 0 0 0.2rem rgb(130 138 145 / 50%);
  }
}
</style>
