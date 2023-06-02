<template>
  <b-container fluid="xl" class="page">
    <PageTitle
      ><template #title> <div v-html="cases.title"></div></template
    ></PageTitle>
    <b-row>
      <b-col v-show="currentPage !== 9" class="patient-header">
        <h2>
          <span v-html="cases.patient"></span>&nbsp;{{ currentPage }}&nbsp;
          <span v-html="cases.of"></span>&nbsp;8
        </h2>
      </b-col>
      <b-col v-show="currentPage === 9" class="patient-header">
        <h2 v-html="cases.conclusion"></h2>
      </b-col>
    </b-row>

    <section
      v-for="(page, index) of pages"
      v-show="currentPage === index + 1"
      :key="index"
    >
      <div v-show="currentPage !== 9">
        <b-row>
          <h3 class="patient-subheader" v-html="cases.subheader"></h3>
        </b-row>

        <patient-case
          :wrist-images="page.wristImages"
          :knee-images="page.kneeImages"
          :wrist-correct-values="page.wristCorrectValues"
          :knee-correct-values="page.kneeCorrectValues"
        ></patient-case>
      </div>
      <div v-show="currentPage === 9" class="conclusion">
        <b-row>
          <b-col sm="7" align-self="center">
            <img
              v-show="$i18n.locale === 'en'"
              class="conclusion-img"
              src="~/assets/images/patient-cases-conclusion.png"
              alt=""
            />
            <img
              v-show="$i18n.locale === 'fr'"
              class="conclusion-img"
              src="~/assets/images/patient-cases-conclusion-fr.png"
              alt=""
            />
          </b-col>
          <b-col sm="5" align-self="center">
            <h3 v-html="cases.greatJob"></h3>
            <p v-html="cases.instructions1"></p>
            <p v-html="cases.instructions2"></p>
            <p>
              <router-link to="calculator">
                <span v-html="cases.tryNow"></span>
                <img
                  class="conclusion-arrow"
                  src="~/assets/icons/nav-arrow.svg"
                  alt=""
              /></router-link>
            </p>
          </b-col>
        </b-row>
      </div>
    </section>

    <b-row>
      <b-col class="nav-separator">
        <hr />
      </b-col>
    </b-row>

    <b-pagination-nav
      :number-of-pages="pagesCount"
      :link-gen="linkGen"
      :first-number="true"
      :last-number="true"
      use-router
      align="center"
      class="pt-3"
    >
      <template #prev-text>
        <svg
          id="navArrowLeft"
          xmlns="http://www.w3.org/2000/svg"
          width="8.61"
          height="15.22"
          viewBox="0 0 8.61 15.22"
        >
          <polyline
            id="arrowLeft"
            points="7.61 14.22 1 7.61 7.61 1"
            fill="none"
            stroke="#707070"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
        <span>{{ pagination.prev }}</span>
      </template>
      <template #next-text>
        <span>{{ pagination.next }}</span>
        <svg
          id="navArrowRight"
          xmlns="http://www.w3.org/2000/svg"
          width="8.61"
          height="15.22"
          viewBox="0 0 8.61 15.22"
        >
          <polyline
            id="arrowRight"
            points="1 1 7.61 7.61 4.31 10.92 1 14.22"
            fill="none"
            stroke="#707070"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </template>
      <template #page="{ active }">
        <div v-if="active">
          <img src="~/assets/icons/dot-active.svg" alt="active" />
        </div>
        <div v-else>
          <img src="~/assets/icons/dot.svg" alt="" />
        </div>
      </template>
    </b-pagination-nav>

    <scoring-guide scoring-guide="knee"></scoring-guide>
    <scoring-guide scoring-guide="wrist"></scoring-guide>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          wristImages: [
            {
              id: 'wrist-left',
              src: 'patient_cases/patient_1_lw.png',
              alt: this.$t('imgAlt').leftWrist,
              selected: true,
              srcFeedback: 'patient_cases/patient_1_lw_arrow.png',
              altFeedback: this.$t('imgAlt').leftWristFeedback,
            },
            {
              id: 'wrist-right',
              src: 'patient_cases/patient_1_rw.png',
              alt: this.$t('imgAlt').rightWrist,
              selected: false,
              leftMargin: true,
            },
          ],
          kneeImages: [
            {
              id: 'knee-left',
              src: 'patient_cases/patient_1_lk.png',
              alt: this.$t('imgAlt').leftKnee,
              selected: true,
              srcFeedback: 'patient_cases/patient_1_lk_arrow.png',
              altFeedback: this.$t('imgAlt').leftKneeFeedback,
            },
            {
              id: 'knee-right',
              src: 'patient_cases/patient_1_rk.png',
              alt: this.$t('imgAlt').rightKnee,
              selected: false,
              leftMargin: true,
            },
          ],
          wristCorrectValues: {
            radius: 0,
            ulna: 2,
            total: 2,
          },
          kneeCorrectValues: {
            femur: 2,
            femurMulti: 1,
            tibia: 1,
            tibiaMulti: 0.5,
            total: 2.5,
          },
        },
        {
          wristImages: [
            {
              id: 'wrist-left',
              src: 'patient_cases/patient_2_lw.png',
              alt: this.$t('imgAlt').leftWrist,
              selected: true,
              srcFeedback: 'patient_cases/patient_2_lw_arrow.png',
              altFeedback: this.$t('imgAlt').leftWristFeedback,
            },
            {
              id: 'wrist-right',
              src: 'patient_cases/patient_2_rw.png',
              alt: this.$t('imgAlt').rightWrist,
              selected: false,
              leftMargin: true,
            },
          ],
          kneeImages: [
            {
              id: 'knee-left',
              src: 'patient_cases/patient_2_lk.png',
              alt: this.$t('imgAlt').leftKnee,
              selected: true,
              srcFeedback: 'patient_cases/patient_2_lk_arrow.png',
              altFeedback: this.$t('imgAlt').leftKneeFeedback,
            },
            {
              id: 'knee-right',
              src: 'patient_cases/patient_2_rk.png',
              alt: this.$t('imgAlt').rightKnee,
              selected: false,
              leftMargin: true,
            },
          ],
          wristCorrectValues: {
            radius: 0.5,
            ulna: 1,
            total: 1.5,
          },
          kneeCorrectValues: {
            femur: 1,
            femurMulti: 1,
            tibia: 1,
            tibiaMulti: 0.5,
            total: 1.5,
          },
        },
        {
          wristImages: [
            {
              id: 'wrist-left',
              src: 'patient_cases/patient_3_lw.png',
              alt: this.$t('imgAlt').leftWrist,
              selected: true,
              srcFeedback: 'patient_cases/patient_3_lw_arrow.png',
              altFeedback: this.$t('imgAlt').leftWristFeedback,
            },
            {
              id: 'wrist-right',
              src: 'patient_cases/patient_3_rw.png',
              alt: this.$t('imgAlt').rightWrist,
              selected: false,
              leftMargin: true,
            },
          ],
          kneeImages: [
            {
              id: 'knee-left',
              src: 'patient_cases/patient_3_lk.png',
              alt: this.$t('imgAlt').leftKnee,
              selected: false,
            },
            {
              id: 'knee-right',
              src: 'patient_cases/patient_3_rk.png',
              alt: this.$t('imgAlt').rightKnee,
              selected: true,
              leftMargin: true,
              srcFeedback: 'patient_cases/patient_3_rk_arrow.png',
              altFeedback: this.$t('imgAlt').rightKneeFeedback,
            },
          ],
          wristCorrectValues: {
            radius: 1.5,
            ulna: 2,
            total: 3.5,
          },
          kneeCorrectValues: {
            femur: 3,
            femurMulti: 0.5,
            tibia: 1,
            tibiaMulti: 1,
            total: 2.5,
          },
        },
        {
          wristImages: [
            {
              id: 'wrist-left',
              src: 'patient_cases/patient_4_lw.png',
              alt: this.$t('imgAlt').leftWrist,
              selected: true,
              srcFeedback: 'patient_cases/patient_4_lw_arrow.png',
              altFeedback: this.$t('imgAlt').leftWristFeedback,
            },
            {
              id: 'wrist-right',
              src: 'patient_cases/patient_4_rw.png',
              alt: this.$t('imgAlt').rightWrist,
              selected: false,
              leftMargin: true,
            },
          ],
          kneeImages: [
            {
              id: 'knee-left',
              src: 'patient_cases/patient_4_lk.png',
              alt: this.$t('imgAlt').leftKnee,
              selected: false,
            },
            {
              id: 'knee-right',
              src: 'patient_cases/patient_4_rk.png',
              alt: this.$t('imgAlt').rightKnee,
              selected: true,
              leftMargin: true,
              srcFeedback: 'patient_cases/patient_4_rk_arrow.png',
              altFeedback: this.$t('imgAlt').rightKneeFeedback,
            },
          ],
          wristCorrectValues: {
            radius: 0,
            ulna: 0,
            total: 0,
          },
          kneeCorrectValues: {
            femur: 1,
            femurMulti: 1,
            tibia: 1,
            tibiaMulti: 0.5,
            total: 1.5,
          },
        },
        {
          wristImages: [
            {
              id: 'wrist-left',
              src: 'patient_cases/patient_5_lw.png',
              alt: this.$t('imgAlt').leftWrist,
              selected: false,
            },
            {
              id: 'wrist-right',
              src: 'patient_cases/patient_5_rw.png',
              alt: this.$t('imgAlt').rightWrist,
              selected: true,
              leftMargin: true,
              srcFeedback: 'patient_cases/patient_5_rw_arrow.png',
              altFeedback: this.$t('imgAlt').rightWristFeedback,
            },
          ],
          kneeImages: [
            {
              id: 'knee-left',
              src: 'patient_cases/patient_5_lk.png',
              alt: this.$t('imgAlt').leftKnee,
              selected: true,
              srcFeedback: 'patient_cases/patient_5_lk_arrow.png',
              altFeedback: this.$t('imgAlt').leftKneeFeedback,
            },
            {
              id: 'knee-right',
              src: 'patient_cases/patient_5_rk.png',
              alt: this.$t('imgAlt').rightKnee,
              selected: false,
              leftMargin: true,
            },
          ],
          wristCorrectValues: {
            radius: 1,
            ulna: 1,
            total: 2,
          },
          kneeCorrectValues: {
            femur: 2,
            femurMulti: 1,
            tibia: 1,
            tibiaMulti: 1,
            total: 3,
          },
        },
        {
          wristImages: [
            {
              id: 'wrist-left',
              src: 'patient_cases/patient_6_lw.png',
              alt: this.$t('imgAlt').leftWrist,
              selected: true,
              srcFeedback: 'patient_cases/patient_6_lw_arrow.png',
              altFeedback: this.$t('imgAlt').leftWristFeedback,
            },
            {
              id: 'wrist-right',
              src: 'patient_cases/patient_6_rw.png',
              alt: this.$t('imgAlt').rightWrist,
              selected: false,
              leftMargin: true,
            },
          ],
          kneeImages: [
            {
              id: 'knee-left',
              src: 'patient_cases/patient_6_lk.png',
              alt: this.$t('imgAlt').leftKnee,
              selected: true,
              srcFeedback: 'patient_cases/patient_6_lk_arrow.png',
              altFeedback: this.$t('imgAlt').leftKneeFeedback,
            },
            {
              id: 'knee-right',
              src: 'patient_cases/patient_6_rk.png',
              alt: this.$t('imgAlt').rightKnee,
              selected: false,
              leftMargin: true,
            },
          ],
          wristCorrectValues: {
            radius: 0,
            ulna: 0,
            total: 0,
          },
          kneeCorrectValues: {
            femur: 1,
            femurMulti: 0.5,
            tibia: 0,
            tibiaMulti: 1,
            total: 0.5,
          },
        },
        {
          wristImages: [
            {
              id: 'wrist-left',
              src: 'patient_cases/patient_7_lw.png',
              alt: this.$t('imgAlt').leftWrist,
              selected: true,
              srcFeedback: 'patient_cases/patient_7_lw_arrow.png',
              altFeedback: this.$t('imgAlt').leftWristFeedback,
            },
            {
              id: 'wrist-right',
              src: 'patient_cases/patient_7_rw.png',
              alt: this.$t('imgAlt').rightWrist,
              selected: false,
              leftMargin: true,
            },
          ],
          kneeImages: [
            {
              id: 'knee-left',
              src: 'patient_cases/patient_7_lk.png',
              alt: this.$t('imgAlt').leftKnee,
              selected: true,
              srcFeedback: 'patient_cases/patient_7_lk_arrow.png',
              altFeedback: this.$t('imgAlt').leftKneeFeedback,
            },
            {
              id: 'knee-right',
              src: 'patient_cases/patient_7_rk.png',
              alt: this.$t('imgAlt').rightKnee,
              selected: false,
              leftMargin: true,
            },
          ],
          wristCorrectValues: {
            radius: 0.5,
            ulna: 1.5,
            total: 2,
          },
          kneeCorrectValues: {
            femur: 1,
            femurMulti: 1,
            tibia: 1,
            tibiaMulti: 1,
            total: 2,
          },
        },
        {
          wristImages: [
            {
              id: 'wrist-left',
              src: 'patient_cases/patient_8_lw.png',
              alt: this.$t('imgAlt').leftWrist,
              selected: false,
            },
            {
              id: 'wrist-right',
              src: 'patient_cases/patient_8_rw.png',
              alt: this.$t('imgAlt').rightWrist,
              selected: true,
              leftMargin: true,
              srcFeedback: 'patient_cases/patient_8_rw_arrow.png',
              altFeedback: this.$t('imgAlt').rightWristFeedback,
            },
          ],
          kneeImages: [
            {
              id: 'knee-left',
              src: 'patient_cases/patient_8_lk.png',
              alt: this.$t('imgAlt').leftKnee,
              selected: false,
            },
            {
              id: 'knee-right',
              src: 'patient_cases/patient_8_rk.png',
              alt: this.$t('imgAlt').rightKnee,
              selected: true,
              leftMargin: true,
              srcFeedback: 'patient_cases/patient_8_rk_arrow.png',
              altFeedback: this.$t('imgAlt').rightKneeFeedback,
            },
          ],
          wristCorrectValues: {
            radius: 0.5,
            ulna: 0.5,
            total: 1,
          },
          kneeCorrectValues: {
            femur: 1,
            femurMulti: 1,
            tibia: 1,
            tibiaMulti: 0.5,
            total: 1.5,
          },
        },
        {
          wristImages: [
            {
              id: 'wrist-left',
              src: 'patient_cases/patient_8_lw.png',
              alt: this.$t('imgAlt').leftWrist,
              selected: false,
            },
            {
              id: 'wrist-right',
              src: 'patient_cases/patient_8_rw.png',
              alt: this.$t('imgAlt').rightWrist,
              selected: true,
              leftMargin: true,
              srcFeedback: 'patient_cases/patient_8_rw_arrow.png',
              altFeedback: this.$t('imgAlt').rightWristFeedback,
            },
          ],
          kneeImages: [
            {
              id: 'knee-left',
              src: 'patient_cases/patient_8_lk.png',
              alt: this.$t('imgAlt').leftKnee,
              selected: false,
            },
            {
              id: 'knee-right',
              src: 'patient_cases/patient_8_rk.png',
              alt: this.$t('imgAlt').rightKnee,
              selected: true,
              leftMargin: true,
              srcFeedback: 'patient_cases/patient_8_rk_arrow.png',
              altFeedback: this.$t('imgAlt').rightKneeFeedback,
            },
          ],
          wristCorrectValues: {
            radius: 0.5,
            ulna: 0.5,
            total: 1,
          },
          kneeCorrectValues: {
            femur: 1,
            femurMulti: 1,
            tibia: 1,
            tibiaMulti: 0.5,
            total: 1.5,
          },
        },
      ],
    }
  },
  computed: {
    imgAlt() {
      return this.$t('imgAlt')
    },
    cases() {
      return this.$t('cases')
    },
    pagination() {
      return this.$t('pagination')
    },
    currentPage() {
      // Current page indexed at 1
      return parseInt(this.$route.query.page)
    },
    pagesCount() {
      return this.pages.length
    },
  },
  beforeMount() {
    // Navigate to first page if not defined
    if (!this.$route.query.page) {
      this.$router.replace({ query: { page: 1 } })
    }
  },
  methods: {
    linkGen(pageNum) {
      return {
        query: { page: pageNum },
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.patient-header {
  position: relative;
  height: 17px;

  h2 {
    position: absolute;
    top: 0;
    height: 36px;
    width: 208px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $purple-secondary;
    font-size: rem(16px);
    color: $white;
    text-transform: uppercase;
    font-weight: bold;
    @include media-breakpoint-down(xs) {
      width: rem(110px);
      font-size: rem(12px);
      top: 8px;
      height: rem(22px);
    }
  }
}

.patient-subheader {
  font-size: rem(20px);
  color: $darker-grey;
  font-weight: 600;
  margin-bottom: rem(15px);
  @include media-breakpoint-down(xs) {
    font-size: rem(18px);
    line-height: rem(24px);
  }
}

section {
  background: $white;
  border-top-width: 4px;
  border-bottom-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-style: solid;
  border-image: linear-gradient(90deg, $purple-secondary, $green) 1;
  min-height: 436px;
  padding: 30px;
  color: $navy;
}

.nav-separator {
  background-color: $white;
  hr {
    margin: 0 auto;
    width: calc(100% - 60px);
    background-color: $lighter-grey;
  }
}

nav {
  background-color: $white;
  border-image: linear-gradient(90deg, $purple-secondary, $green) 1;
  border-bottom-width: 4px;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-style: solid;
  margin-bottom: 25px;
  #navArrowLeft {
    margin-right: 5px;
  }
  #navArrowRight {
    margin-left: 5px;
  }

  span {
    &:hover {
      color: $light-green;
    }
  }
}

.next-patient {
  color: $light-green;
}

// Tap to zoom pill
::v-deep .vh--message-bottom {
  // bottom: 125px;
  bottom: 82%;
}
::v-deep .vh--message {
  font-size: 10px;
  line-height: 10px;
  padding: 2px 7px;
}
::v-deep .vh--icon {
  display: none;
}

.conclusion {
  display: flex;
  align-items: center;
  min-height: 436px;

  .conclusion-img {
    width: 100%;
  }

  .conclusion-arrow {
    height: 22px;
    width: auto;
  }

  h3 {
    font-size: rem(36px);
    color: $dark-grey;
    font-weight: 700;
  }

  p {
    font-size: rem(20px);
    line-height: rem(24px);
    font-weight: 600;
    color: $dark-grey;
  }

  a {
    color: $light-green;
  }
}
</style>
