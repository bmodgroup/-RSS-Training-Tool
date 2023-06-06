<template>
  <div class="intro" id="launch-page">
    <div class="logo-container">
      <div class="container">
        <div class="row">
          <!-- <img src="~/assets/images/logo.png" /> -->
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row pt-5">
        <b-col v-if="exitPage === false">
          <!-- <div class="lang-selector">
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
          </div> -->
          <p class="mb-5" v-html="home.disclaimerWarning.disclaimer"></p>
          <button
            class="button"
            v-on:click="closeIntro()"
            :aria-label="home.disclaimerWarning.yes"
          >
            <div class="button-copy">
              <span>{{ home.disclaimerWarning.yes }}</span>
              <img
                class="icon"
                src="~/assets/icons/arrow_purple.svg"
                :alt="home.disclaimerWarning.yesalt"
              />
            </div>
          </button>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisclaimerScreen",
  components: {},
  data() {
    return {
      exitPage: false,
    };
  },
  methods: {
    // when user closes launch screen
    closeIntro() {
      // if we're in a loaded state
      this.$store.commit("setDisclaimerScreen", false);
    },
    notProfessional() {
      this.exitPage = true;
    },
  },
  // setting a tab trap to prevent the user from tabbing into the unity build behind the launch screen
  computed: {
    nav() {
      return this.$t("nav");
    },
    home() {
      return this.$t("home");
    },
    locale() {
      return this.$root.$i18n.locale;
    },
  },
};
</script>

<style lang="scss" scoped>
.intro {
  width: 100vw !important;
  max-width: 100vw !important;
  height: 100% !important;
  position: fixed;
  top: 0;
  left: 0;
  background-color: $darker-grey;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100%;
  padding: 0;
  z-index: 9996;
  color: $white;
  text-align: left;

  .logo-container {
    background-color: $white;
    height: 105px;
    img {
      width: 180px;
      height: auto;
      margin: 1rem 0;
    }
  }
}

h1 {
  font-size: 38px;
  text-align: left;
  text-transform: uppercase;
}

p {
  font-size: 15px;
  margin-bottom: 20px;
  line-height: 1.4em;
}

.disclaimer {
  position: absolute;
  bottom: 0;
  p {
    font-size: 13px;
    margin-bottom: 5px;
    width: 100%;
  }
}

@media screen and (max-width: 840px) {
  .copy-container {
    width: 100%;
    height: 100%;
  }
}

.button {
  width: 50%;
  background-color: $white;
  padding: 20px;
  height: 80px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  img {
    width: 30px;
  }
}

.button-copy {
  width: 100%;
  text-transform: uppercase;
  text-align: left;
  font-weight: $font-weight-bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  img {
    width: 30px;
  }
}

.disabled {
  opacity: 0.7;
  cursor: default;
}

@media (max-width: 700px) {
  .disclaimer {
    p {
      width: 90%;
    }
  }
}

@media (min-width: 481px) {
  header {
    padding: 55px;
    padding-bottom: 0;
  }
}

@media (max-width: 1270px) {
  .copy-container {
    padding: 50px;
  }
}

@media screen and (max-width: 1024px) and (max-height: 768px) {
  .copy-container {
    margin: 0 auto;
    padding: 50px 0;
  }

  .disclaimer {
    max-width: 850px;
    p {
      font-size: 12px;
    }
  }
}

@media (max-width: 1023px) {
  h1 {
    font-size: 35px;
  }

  .intro {
    background-position: 60%;
  }
}

@media (max-width: 480px) {
  header {
    background-color: white;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100%;
  }

  h1 {
    font-size: 22px;
    width: 70%;
  }

  p {
    margin-bottom: 25px;
    font-size: 14px;
    line-height: 1.4;
  }

  .copy-container {
    padding: 25px;
  }

  .button {
    width: 100%;
  }

  .disclaimer {
    text-align: center;
    margin-bottom: 15px;
    p {
      width: 90%;
    }
  }
}

.lang-selector {
  margin-bottom: 20px;
  padding: 20px;
  background-color: $white;
  color: $black;
  width: 50%;

  @media (max-width: 480px) {
    width: 100%;
  }

  a {
    border: 1px solid $purple;
    background-color: $white;
    padding: 2px 5px;

    &.active {
      background-color: $purple;
      color: $white;
      font-weight: bold;
    }
  }
}
</style>
