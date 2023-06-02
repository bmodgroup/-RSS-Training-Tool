<template>
  <b-sidebar id="site-nav" shadow right backdrop>
    <b-container>
      <b-row>
        <b-col>
          <b-nav vertical>
            <div class="lang-selector">
              {{ nav.setLanguage }}:
              <a
                href="#"
                :class="$i18n.locale === 'en' ? 'active' : ''"
                @click="$i18n.setLocale('en')"
                >English</a
              >
              <a
                href="#"
                :class="$i18n.locale === 'fr' ? 'active' : ''"
                @click="$i18n.setLocale('fr')"
                >Français</a
              >
            </div>
            <NuxtLink to="/" class="link" exact>{{ nav.home }}</NuxtLink>
            <NuxtLink to="/about" class="link">{{ nav.about }}</NuxtLink>
            <NuxtLink
              to="/tutorial?page=1"
              :class="{ 'nuxt-link-active': isRouteActive }"
              class="link"
              >{{ nav.practice }}</NuxtLink
            >
            <NuxtLink to="/cases" class="link">{{ nav.cases }}</NuxtLink>
            <NuxtLink to="/calculator" class="link">{{
              nav.calculator
            }}</NuxtLink>
          </b-nav>
        </b-col>
      </b-row>
    </b-container>
  </b-sidebar>
</template>

<script>
export default {
  computed: {
    nav() {
      return this.$t('nav')
    },
    isRouteActive() {
      if (
        this.$nuxt.$route.path === '/tutorial' ||
        this.$nuxt.$route.path === '/practice'
      ) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style lang="scss">
#site-nav {
  background-color: $white !important;

  .b-sidebar-header {
    display: none;
  }
}

.b-sidebar-body {
  .link {
    color: $purple;
    font-weight: 700;
    font-size: rem(20px);
    padding: rem(32px) 0;
    border-bottom: 1px solid $light-grey;
    margin: 0 rem(32px);

    &.nuxt-link-active {
      text-decoration: underline;
      pointer-events: none;
    }
  }
}

.lang-selector {
  margin-top: 10px;

  a {
    border: 1px solid $purple;
    padding: 2px 5px;

    &.active {
      background-color: $purple;
      color: $white;
      font-weight: bold;
    }
  }
}
</style>
