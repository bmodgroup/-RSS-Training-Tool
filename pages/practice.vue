<template>
  <b-container fluid="xl" class="page">
    <PageTitle
      ><template #title><div v-html="practice.title"></div></template
    ></PageTitle>
    <b-row>
      <b-col class="practice-header">
        <h2 v-html="practice.header"></h2>
        <b-button to="/tutorial" class="float-right" variant="primary"
          ><img
            src="~/assets/icons/nav-arrow.svg"
            alt=""
            clas="icon-chevron"
          /><span v-html="practice.back"></span>
        </b-button>
      </b-col>
    </b-row>
    <section>
      <b-row>
        <b-col>
          <b-tabs v-model="tabInd" content-class="mt-3">
            <b-tab :title="practice.wrist" active>
              <practice-case
                v-for="(wristPage, idx) in wristPages"
                v-show="idx === currentPageIndex(currentWristPage)"
                :key="idx"
                type="wrist"
                :image="wristPage.image"
                :correct-values="wristPage.correctValues"
                :pages="wristPages.length"
                :current-page="currentWristPage"
                :answer-copy="wristPage.answerCopy"
                @toKneePractice="nextTab"
              />
              <b-pagination
                v-model="currentWristPage"
                :total-rows="wristPages.length"
                :first-number="true"
                :last-number="true"
                :per-page="1"
                align="center"
                class="mt-3"
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
              </b-pagination>
            </b-tab>
            <b-tab :title="practice.knee">
              <practice-case
                v-for="(kneePage, idx) in kneePages"
                v-show="idx === currentPageIndex(currentKneePage)"
                :key="idx"
                type="knee"
                :image="kneePage.image"
                :correct-values="kneePage.correctValues"
                :pages="kneePages.length"
                :current-page="currentKneePage"
                :answer-copy="kneePage.answerCopy"
              />

              <b-pagination
                v-model="currentKneePage"
                :total-rows="kneePages.length"
                :first-number="true"
                :last-number="true"
                :per-page="1"
                align="center"
                class="mt-3"
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
                  <span class="next-patient">{{ pagination.next }}</span>
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
              </b-pagination>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      currentWristPage: 1,
      tabInd: 0,
      wristPages: [
        {
          image: {
            src: "practice/practice_wrist_1.png",
            srcFeedback: "practice/practice_wrist_1_arrow.png",
            alt: this.$t("imgAlt").leftWrist,
          },
          correctValues: {
            radius: 0,
            ulna: 0,
            total: 0,
          },
          answerCopy: this.$t("practice").wristPage1,
        },
        {
          image: {
            src: "practice/practice_wrist_2.png",
            srcFeedback: "practice/practice_wrist_2_arrow.png",
            alt: this.$t("imgAlt").rightWrist,
          },
          correctValues: {
            radius: 0.5,
            ulna: 0.5,
            total: 1,
          },
          answerCopy: this.$t("practice").wristPage2,
        },
        {
          image: {
            src: "practice/practice_wrist_3.png",
            srcFeedback: "practice/practice_wrist_3_arrow.png",
            alt: this.$t("imgAlt").rightWrist,
          },
          correctValues: {
            radius: 0.5,
            ulna: 1.5,
            total: 2,
          },
          answerCopy: this.$t("practice").wristPage3,
        },
        {
          image: {
            src: "practice/practice_wrist_4.png",
            srcFeedback: "practice/practice_wrist_4_arrow.png",
            alt: this.$t("imgAlt").rightWrist,
          },
          correctValues: {
            radius: 0.5,
            ulna: 2,
            total: 2.5,
          },
          answerCopy: this.$t("practice").wristPage4,
        },
        {
          image: {
            src: "practice/practice_wrist_5.png",
            srcFeedback: "practice/practice_wrist_5_arrow.png",
            alt: this.$t("imgAlt").rightWrist,
          },
          correctValues: {
            radius: 1,
            ulna: 1.5,
            total: 2.5,
          },
          answerCopy: this.$t("practice").wristPage5,
        },
      ],
      currentKneePage: 1,
      kneePages: [
        {
          image: {
            src: "practice/practice_knee_1.png",
            srcFeedback: "practice/practice_knee_1_arrow.png",
            alt: this.$t("imgAlt").leftKnee,
          },
          correctValues: {
            femur: 0,
            femurMulti: 1,
            tibia: 0,
            tibiaMulti: 1,
            total: 0,
          },
          answerCopy: this.$t("practice").kneePage1,
        },
        {
          image: {
            src: "practice/practice_knee_2.png",
            srcFeedback: "practice/practice_knee_2_arrow.png",
            alt: this.$t("imgAlt").rightKnee,
          },
          correctValues: {
            femur: 1,
            femurMulti: 0.5,
            tibia: 1,
            tibiaMulti: 0.5,
            total: 1,
          },
          answerCopy: this.$t("practice").kneePage2,
        },
        {
          image: {
            src: "practice/practice_knee_3.png",
            srcFeedback: "practice/practice_knee_3_arrow.png",
            alt: this.$t("imgAlt").rightKnee,
          },
          correctValues: {
            femur: 2,
            femurMulti: 0.5,
            tibia: 1,
            tibiaMulti: 0.5,
            total: 1.5,
          },
          answerCopy: this.$t("practice").kneePage3,
        },
        {
          image: {
            src: "practice/practice_knee_4.png",
            srcFeedback: "practice/practice_knee_4_arrow.png",
            alt: this.$t("imgAlt").rightKnee,
          },
          correctValues: {
            femur: 1,
            femurMulti: 1,
            tibia: 1,
            tibiaMulti: 1,
            total: 2,
          },
          answerCopy: this.$t("practice").kneePage4,
        },
        {
          image: {
            src: "practice/practice_knee_5.png",
            srcFeedback: "practice/practice_knee_5_arrow.png",
            alt: this.$t("imgAlt").rightKnee,
          },
          correctValues: {
            femur: 2,
            femurMulti: 1,
            tibia: 2,
            tibiaMulti: 1,
            total: 4,
          },
          answerCopy: this.$t("practice").kneePage5,
        },
      ],
    };
  },
  computed: {
    imgAlt() {
      return this.$t("imgAlt");
    },
    practice() {
      return this.$t("practice");
    },
    pagination() {
      return this.$t("pagination");
    },
    decimal() {
      return this.$t("decimal");
    },
  },

  methods: {
    currentPageIndex(pageNum) {
      return pageNum - 1;
    },
    nextTab() {
      this.tabInd++;
    },
  },
};
</script>

<style lang="scss" scoped>
.practice-header {
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
    background-color: $light-blue;
    font-size: rem(16px);
    color: $white;
    text-transform: uppercase;
    font-weight: bold;
    @include media-breakpoint-down(xs) {
      width: rem(125px);
      font-size: rem(12px);
      top: 8px;
      height: rem(22px);
    }
  }

  .btn-primary {
    position: absolute;
    top: 0;
    right: 15px;
    height: 36px;
    background-color: $white;
    border: 1px solid $dark-grey;
    color: $dark-grey;
    font-size: rem(16px);
    display: flex;
    align-items: center;
    @include media-breakpoint-down(xs) {
      font-size: rem(11px);
      top: 8px;
      height: rem(22px);
    }

    img {
      margin-right: 8px;
      transform: rotate(180deg);
      @include media-breakpoint-down(xs) {
        width: rem(4px);
      }
    }
  }
}

::v-deep .nav-tabs {
  border-bottom: 1px solid $light-grey;
  display: flex;
  justify-content: center;
  .nav-link {
    color: $light-blue;
    border: 1px solid $light-blue;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    padding: rem(5px) rem(40px);
    text-transform: uppercase;
    @include media-breakpoint-down(xs) {
      padding: rem(4px) rem(16px);
    }
    &.active {
      background: $light-blue;
      color: $white;
      font-weight: 600;
    }
    &:first-child {
      margin-right: 5px;
    }
    &:last-child {
      margin-left: 5px;
    }
  }
}

::v-deep .instruction {
  margin-top: rem(10px);
  font-size: rem(18px);
  line-height: rem(20px);
  font-weight: 600;
}

.type-title {
  text-transform: uppercase;
  color: $purple;
  margin-top: rem(25px);
  font-weight: 700;
  font-size: rem(20px);
}

.calculations {
  display: none;
}

.button-container {
  margin-top: rem(25px);
}

section {
  background: $white;
  border-top-width: 4px;
  border-bottom-width: 4px;
  border-left-width: 0;
  border-right-width: 0;
  border-style: solid;
  border-image: linear-gradient(90deg, $light-blue 25%, $green) 1;
  min-height: 436px;
  padding: 40px 30px 0;
  color: $navy;
  // margin-bottom: 25px;
  @include media-breakpoint-only(xs) {
    padding: 35px 25px 25px;
  }

  ::v-deep h3 {
    font-size: rem(16px);
    margin-bottom: 0;
    width: fit-content;
  }

  p {
    font-size: rem(16px);
    line-height: rem(22px);
    margin-bottom: rem(8px);
  }

  // Tap to zoom pill
  ::v-deep .vh--message-bottom {
    bottom: 92%;
  }

  ::v-deep .vh--message {
    font-size: 10px;
    line-height: 10px;
    padding: 2px 7px;
  }
  ::v-deep .vh--icon {
    display: none;
  }

  ::v-deep .btn-check-assessment {
    background-color: $white;
    color: $light-green;
    text-transform: uppercase;
    border: 1px solid $light-green;
    // height: 28px;
    line-height: 1;
    margin: 1rem 0;
    width: 175px;
    &.disabled {
      background-color: $white;
      color: $light-grey;
      text-transform: uppercase;
      border: 1px solid $light-grey;
      &:hover {
        background-color: $white;
        color: $light-grey;
        border: 1px solid $light-grey;
      }
    }
    &:not(:disabled):not(.disabled):active,
    &:hover,
    &:focus {
      background-color: $white;
      color: $light-green;
      border: 1px solid $light-green;
    }
  }

  ::v-deep .btn-redo {
    background-color: $white;
    color: $navy;
    text-transform: uppercase;
    border: 1px solid $navy;
    height: 28px;
    line-height: 1;
    margin-top: 10px;
    width: 175px;
    display: flex;
    align-items: center;
    justify-content: center;
    @include media-breakpoint-down(xs) {
      width: 100%;
    }

    img {
      margin-right: 5px;
    }

    &.disabled {
      background-color: $white;
      color: $light-grey;
      text-transform: uppercase;
      border: 1px solid $light-grey;
      &:hover {
        background-color: $white;
        color: $light-grey;
        border: 1px solid $light-grey;
      }
    }
    &:not(:disabled):not(.disabled):active,
    &:hover,
    &:focus {
      background-color: $white;
      color: $navy;
      border: 1px solid $navy;
    }
  }

  ::v-deep .btn-scoring-guide {
    background-color: $white;
    color: $purple;
    border: 1px solid $purple;
    text-transform: uppercase;
    width: 100%;
    height: 28px;
    font-size: rem(14px);
    line-height: rem(16px);
    padding: 0;
    margin: 16px auto;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 10px;
    }
  }

  ::v-deep .feedback-btn-container {
    @include media-breakpoint-down(xs) {
      width: 100%;
    }
  }

  ::v-deep .btn-check-assessment {
    @include media-breakpoint-down(xs) {
      width: 100%;
    }
  }

  nav {
    background-color: $white;
    border-image: linear-gradient(90deg, $navy, $green) 1;
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
  }
}

.next,
.prev {
  &:hover {
    color: $light-green;
  }
}

.pagination {
  border-top: 1px solid $light-grey;
  border-radius: 0;
  padding-top: 20px;
}
</style>
