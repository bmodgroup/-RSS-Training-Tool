<template>
  <div>
    <b-container fluid="xl" class="home page">
      <b-row class="pb-5 mt-3">
        <b-col sm="8" class="d-flex flex-column justify-content-between">
          <b-row>
            <b-col>
              <h1 v-html="home.heading"></h1>
              <h2 class="subheader w-75" v-html="home.subheading"></h2>
            </b-col>
          </b-row>
          <b-row class="audio-outer-container w-75 px-3">
            <b-col>
              <b-row
                class="audio-container d-flex flex-nowrap align-items-center mb-3 mb-sm-0"
              >
                <!-- <b-col class="p-0 col-4">
                  <div class="icon-container mb-3 m-0-sm">
                    <img src="~/assets/icons/play.svg" />
                  </div>
                </b-col> -->
                <b-col class="p-0">
                  <div class="soundwave-container">
                    <img src="~/assets/icons/soundwave.svg" />
                  </div>
                  <p class="mb-0 semibold" v-html="home.audioClips"></p>
                  <p class="mb-0" v-html="home.playPause"></p>
                  <b-button
                    class="btn-download"
                    variant="primary"
                    :href="feedback.userGuide"
                    target="_blank"
                  >
                    {{ feedback.download }}</b-button
                  >
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="4" class="pl-sm-0">
          <HomeMenuItem to="/about">
            <template #title
              ><div v-html="home.homeNav.about.title"></div
            ></template>
            <template #text
              ><div v-html="home.homeNav.about.text"></div
            ></template>
          </HomeMenuItem>
          <HomeMenuItem to="/tutorial">
            <template #title
              ><div v-html="home.homeNav.tutorial.title"></div
            ></template>
            <template #text
              ><div v-html="home.homeNav.tutorial.text"></div></template
          ></HomeMenuItem>
          <HomeMenuItem to="/cases"
            ><template #title
              ><div v-html="home.homeNav.cases.title"></div
            ></template>
            <template #text
              ><div v-html="home.homeNav.cases.text"></div></template
          ></HomeMenuItem>
          <router-link to="calculator">
            <b-card class="card-calc">
              <b-row class="flex-nowrap">
                <b-col sm="10" class="pr-0 col-10">
                  <b-card-title
                    class="mb-1"
                    v-html="home.homeNav.calculator.title"
                  ></b-card-title>
                  <b-row>
                    <b-col class="col-3">
                      <img src="~/assets/icons/calculator.svg" />
                    </b-col>
                    <b-col class="pl-2 pr-0 col-9">
                      <b-card-text
                        class="w-100"
                        v-html="home.homeNav.calculator.text"
                      >
                      </b-card-text>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col sm="2" class="col-2">
                  <img src="~/assets/icons/arrow_green.svg" />
                </b-col>
              </b-row>
            </b-card>
          </router-link>
        </b-col>
      </b-row>
      <b-row class="justify-content-center mb-3 mb-sm-0">
        <b-col>
          <p class="disclaimer mb-0" v-html="home.footerDisclaimer"></p> </b-col
      ></b-row>
    </b-container>
    <transition name="fade">
      <DisclaimerScreen
        ref="disclaimerScreen"
        v-if="this.$store.state.disclaimer === true"
      />
    </transition>
  </div>
</template>

<script>
import HomeMenuItem from "@/components/HomeMenuItem";
import DisclaimerScreen from "@/components/DisclaimerScreen";
export default {
  components: {
    HomeMenuItem,
    DisclaimerScreen,
  },
  props: {
    buttonLabel: {
      type: String,
      default: "Check Answer",
    },
  },
  computed: {
    home() {
      return this.$t("home");
    },
    feedback() {
      return this.$t("feedback");
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: rem(72px);
  font-weight: 600;
  color: $purple;
  line-height: 1;
  @include media-breakpoint-down(xs) {
    font-size: rem(42px);
  }
}

h2 {
  font-size: rem(18px);
  font-weight: 600;
  color: $purple;
  @include media-breakpoint-down(xs) {
    width: 100% !important;
    font-size: rem(14px);
  }
}

.audio-outer-container {
  @include media-breakpoint-down(xs) {
    margin-top: rem(215px);
    width: 100% !important;
  }
}

.audio-container {
  font-size: rem(14px);
  color: $navy;
  .icon-container {
    width: rem(100px);
    height: rem(100px);
    img {
      width: 100%;
    }
    @include media-breakpoint-down(xs) {
      width: rem(75px);
      height: rem(75px);
    }
  }
  .soundwave-container {
    width: rem(60px);
    img {
      width: 100%;
    }
  }
  .semibold {
    font-weight: 600;
  }
}

.btn-secondary {
  background-color: transparent;
  border-color: transparent;
}

.btn-download {
  margin-top: 20px;
  background-color: #377702;
  border-color: transparent;
}

.card-calc {
  background: transparent linear-gradient(90deg, #377702 0%, #48930d 100%) 0% 0%
    no-repeat padding-box;
  color: $white;
  .card-title {
    font-weight: 700;
    font-size: rem(30px);
  }
}

.disclaimer {
  color: $dark-grey;
  font-size: rem(10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
