<template>
  <b-container fluid="xl" class="page">
    <PageTitle
      ><template #title><div v-html="calculator.title"></div></template
    ></PageTitle>
    <b-row>
      <b-col class="calc-header">
        <h2 v-html="calculator.header"></h2>
      </b-col>
    </b-row>
    <section>
      <b-row>
        <b-col md="12" class="intro-copy">
          <p v-html="calculator.intro"></p>
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-between">
        <b-col md="10" cols="12" class="pr-md-4">
          <!-- WRIST -->
          <div
            class="
              mb-3
              d-flex
              justify-content-between
              no-gutters
              wrist-score-container
            "
          >
            <b-col md="9" cols="12">
              <b-card header-tag="header">
                <template #header>
                  <h6 class="mb-md-0" v-html="patientCase.wristAssessment"></h6>
                  <b-button
                    v-b-modal.scoring-guide-wrist
                    class="btn-scoring-guide"
                    ><span v-html="button.wristScoringGuide"></span>
                    <img src="~/assets/icons/scoring_guide.svg" alt=""
                  /></b-button>
                </template>
                <div md="" class="wrist-container d-flex flex-row">
                  <b-form md="" class="form-container">
                    <b-row>
                      <b-col>
                        <score-input
                          ref="radiusInputRef"
                          category="radius"
                          :disabled="false"
                          :show-correct="false"
                          :correct-value="radius"
                          :value="radius"
                          @input="radius = $event"
                        />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col>
                        <score-input
                          ref="ulnaInputRef"
                          category="ulna"
                          :disabled="false"
                          :show-correct="false"
                          :correct-value="ulna"
                          :value="ulna"
                          @input="ulna = $event"
                        />
                      </b-col>
                    </b-row>
                  </b-form>
                  <hr />
                </div>
              </b-card>
            </b-col>
            <b-col md="2" class="total-wrist d-flex px-0">
              <div
                class="total-title"
                v-html="assessment.totalWristScore"
              ></div>
              <div class="num">{{ wrist }}</div>
            </b-col>
          </div>
          <!-- KNEE -->
          <div
            class="
              mb-3
              d-flex
              justify-content-between
              no-gutters
              knee-score-container
            "
          >
            <b-col md="9">
              <b-card header-tag="header">
                <template #header>
                  <h6 class="mb-md-0" v-html="patientCase.kneeAssessment"></h6>
                  <b-button
                    v-b-modal.scoring-guide-knee
                    class="btn-scoring-guide"
                    ><span v-html="button.kneeScoringGuide"></span>
                    <img src="~/assets/icons/scoring_guide.svg" alt=""
                  /></b-button>
                </template>
                <div class="knee-container d-flex justify-content-between">
                  <b-form md="" class="form-container">
                    <b-row>
                      <b-col>
                        <score-input
                          ref="femurInputRef"
                          category="femur"
                          :disabled="false"
                          :show-correct="false"
                          :correct-value="femur"
                          :value="femur"
                          @input="femur = $event"
                        />
                      </b-col>
                      <b-col>
                        <score-input
                          ref="femurMultiRef"
                          category="multiplier"
                          :disabled="false"
                          :show-correct="false"
                          :correct-value="femurMultiplier"
                          :value="femurMultiplier"
                          @input="femurMultiplier = $event"
                        />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col>
                        <score-input
                          ref="tibiaInputRef"
                          category="tibia"
                          :disabled="false"
                          :show-correct="false"
                          :correct-value="tibia"
                          :value="tibia"
                          @input="tibia = $event"
                        />
                      </b-col>
                      <b-col>
                        <score-input
                          ref="tibiaMultiRef"
                          category="multiplier"
                          :disabled="false"
                          :show-correct="false"
                          :correct-value="tibiaMultiplier"
                          :value="tibiaMultiplier"
                          @input="tibiaMultiplier = $event"
                        />
                      </b-col>
                    </b-row>
                  </b-form>
                  <hr />
                </div>
              </b-card>
            </b-col>
            <b-col md="2" class="total-knee d-flex px-0">
              <div class="total-title" v-html="assessment.totalKneeScore"></div>
              <div class="num">{{ knee }}</div>
            </b-col>
          </div>
        </b-col>
        <b-col md="2" cols="12" class="total-container d-flex">
          <b-row>
            <b-col class="totals d-flex">
              <h4
                class="total-title rss"
                v-html="assessment.totalPatientRSS"
              ></h4>
              <h4 class="num rss">{{ wrist + knee }}</h4>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="text-center">
              <b-button
                variant="primary"
                class="btn-pdf"
                @click="() => generatePdf()"
                v-html="calculator.generatePDF"
              ></b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <p class="note" v-html="calculator.disclaimer"></p>
        </b-col>
      </b-row>
    </section>
    <scoring-guide scoring-guide="knee"></scoring-guide>
    <scoring-guide scoring-guide="wrist"></scoring-guide>

    <!-- Offpage content is only used to render PDF -->
    <client-only>
      <div class="offpage">
        <div ref="pdfContent" class="pdf-content">
          <b-row class="mb-5">
            <b-col class="calc-header">
              <h2 v-html="calculator.header"></h2>
            </b-col>
          </b-row>
          <section>
            <b-row class="d-flex w-100 px-3">
              <b-col md="9" class="mr-4">
                <b-row class="mb-3 px-0 d-flex border-bottom">
                  <!-- WRIST -->
                  <b-col md="10">
                    <b-card header-tag="header">
                      <template #header>
                        <h6
                          class="mb-0"
                          v-html="patientCase.wristAssessment"
                        ></h6>
                      </template>
                      <div md="" class="wrist-container d-flex flex-row">
                        <b-form md="" class="form-container">
                          <b-row>
                            <b-col>
                              <score-input
                                ref="radiusInputRef"
                                category="radius"
                                :disabled="false"
                                :show-correct="false"
                                :correct-value="radius"
                                :value="radius"
                                @input="radius = $event"
                              />
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col>
                              <score-input
                                ref="ulnaInputRef"
                                category="ulna"
                                :disabled="false"
                                :show-correct="false"
                                :correct-value="ulna"
                                :value="ulna"
                                @input="ulna = $event"
                              />
                            </b-col>
                          </b-row>
                        </b-form>
                        <hr />
                      </div>
                    </b-card>
                  </b-col>
                  <b-col
                    md="2"
                    class="
                      total-wrist
                      d-flex
                      flex-column
                      justify-content-centre
                    "
                  >
                    <b-row class="total-title">
                      <span v-html="assessment.totalWristScore"></span>
                    </b-row>
                    <b-row class="num">{{ wrist }}</b-row>
                  </b-col>
                </b-row>
                <!-- KNEE -->
                <b-row class="mb-3 d-flex flex-row px-0">
                  <b-col md="10">
                    <b-card header-tag="header">
                      <template #header>
                        <h6
                          class="mb-0"
                          v-html="patientCase.kneeAssessment"
                        ></h6>
                      </template>
                      <div
                        class="knee-container d-flex justify-content-between"
                      >
                        <b-form md="" class="form-container">
                          <b-row>
                            <b-col>
                              <score-input
                                ref="femurInputRef"
                                category="femur"
                                :disabled="false"
                                :show-correct="false"
                                :correct-value="femur"
                                :value="femur"
                                @input="femur = $event"
                              />
                            </b-col>
                            <b-col>
                              <score-input
                                ref="femurMultiRef"
                                category="multiplier"
                                :disabled="false"
                                :show-correct="false"
                                :correct-value="femurMultiplier"
                                :value="femurMultiplier"
                                @input="femurMultiplier = $event"
                              />
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col>
                              <score-input
                                ref="tibiaInputRef"
                                category="tibia"
                                :disabled="false"
                                :show-correct="false"
                                :correct-value="tibia"
                                :value="tibia"
                                @input="tibia = $event"
                              />
                            </b-col>
                            <b-col>
                              <score-input
                                ref="tibiaMultiRef"
                                category="multiplier"
                                :disabled="false"
                                :show-correct="false"
                                :correct-value="tibiaMultiplier"
                                :value="tibiaMultiplier"
                                @input="tibiaMultiplier = $event"
                              />
                            </b-col>
                          </b-row>
                        </b-form>
                        <hr />
                      </div>
                    </b-card>
                  </b-col>
                  <b-col
                    md="2"
                    class="total-knee d-flex flex-column justify-content-centre"
                  >
                    <b-row class="total-title">
                      <span v-html="assessment.totalKneeScore"></span>
                    </b-row>
                    <b-row class="num">{{ knee }}</b-row>
                  </b-col>
                </b-row>
              </b-col>
              <b-col
                md="2"
                class="
                  pl-md-5
                  total-container
                  d-flex
                  flex-column
                  justify-content-center
                  border-left
                "
              >
                <b-row>
                  <b-col class="d-flex flex-column align-items-center totals">
                    <h4
                      class="total-title rss"
                      v-html="assessment.totalPatientRSS"
                    ></h4>
                    <h4 class="num rss">{{ wrist + knee }}</h4>
                  </b-col>
                </b-row>
                <b-row></b-row>
              </b-col>
            </b-row>
          </section>
          <p class="date">{{ calculator.datestamp }} {{ currentDate() }}</p>
        </div>
      </div>
    </client-only>
  </b-container>
</template>

<script>
// TO DO: Replace calculator input variables with components created for other sections
export default {
  data() {
    return {
      pdf: null,
      femur: null,
      femurMultiplier: null,
      tibia: null,
      tibiaMultiplier: null,
      radius: null,
      ulna: null,
      radiusOptions: [
        {
          text: '0',
          value: 0,
        },
        {
          text: this.$t('scoreInput').point5,
          value: 0.5,
        },
        {
          text: '1',
          value: 1,
        },
        {
          text: this.$t('scoreInput').onePoint5,
          value: 1.5,
        },
        {
          text: '2',
          value: 2,
        },
      ],
      ulnaOptions: [
        {
          text: '0',
          value: 0,
        },
        {
          text: this.$t('scoreInput').point5,
          value: 0.5,
        },
        {
          text: '1',
          value: 1,
        },
        {
          text: this.$t('scoreInput').onePoint5,
          value: 1.5,
        },
        {
          text: '2',
          value: 2,
        },
      ],
      femurOptions: [
        {
          text: '0',
          value: 0,
        },
        {
          text: this.$t('scoreInput').point5,
          value: 0.5,
        },
        {
          text: '1',
          value: 1,
        },
        {
          text: this.$t('scoreInput').onePoint5,
          value: 1.5,
        },
        {
          text: '2',
          value: 2,
        },
      ],
      tibiaOptions: [
        {
          text: '0',
          value: 0,
        },
        {
          text: this.$t('scoreInput').point5,
          value: 0.5,
        },
        {
          text: '1',
          value: 1,
        },
        {
          text: this.$t('scoreInput').onePoint5,
          value: 1.5,
        },
        {
          text: '2',
          value: 2,
        },
      ],
      femurMultiplierOptions: [
        {
          text: this.$t('scoreInput').point5,
          value: 0.5,
        },
        {
          text: '1',
          value: 1,
        },
      ],
      tibiaMultiplierOptions: [
        {
          text: this.$t('scoreInput').point5,
          value: 0.5,
        },
        {
          text: '1',
          value: 1,
        },
      ],
    }
  },
  computed: {
    calculator() {
      return this.$t('calculator')
    },
    button() {
      return this.$t('button')
    },
    patientCase() {
      return this.$t('patientCase')
    },
    assessment() {
      return this.$t('assessment')
    },
    scoreInput() {
      return this.$t('scoreInput')
    },
    wrist() {
      return this.radius + this.ulna
    },
    knee() {
      return (
        this.femur * this.femurMultiplier + this.tibia * this.tibiaMultiplier
      )
    },
  },
  mounted() {
    /*
      During SSR if the script is loaded it will be unable to find the DOM and will fail
      We only want to load this library on the client-side
      TO DO:
        - Add additional checks for server vs. client
        - Research a bit more about this implementation
    */
    this.pdf = require('jspdf-html2canvas')
  },
  methods: {
    generatePdf() {
      this.pdf(this.$refs.pdfContent, {
        jsPDF: {
          format: 'a4',
          orientation: 'l',
          unit: 'pt',
        },
        html2canvas: {
          scale: 3,
          scrollX: 0,
          scrollY: 0,
        },
        margin: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        },
        output: 'rss-calculator.pdf',
      })
    },
    currentDate() {
      const current = new Date()
      const date = `${current.getFullYear()}-${
        current.getMonth() + 1
      }-${current.getDate()}`
      return date
    },
  },
}
</script>

<style lang="scss" scoped>
.calc-header {
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
    background-color: $dark-green;
    font-size: rem(16px);
    color: $white;
    text-transform: uppercase;
    font-weight: bold;
    @include media-breakpoint-only(xs) {
      font-size: rem(12px);
      width: 111px;
      height: 22px;
      top: 8px;
      margin: 0;
    }
  }
}

section {
  border-top: $dark-green;
  border-bottom: $dark-green;
  border-top-width: 4px;
  border-bottom-width: 4px;
  border-left-width: 0;
  border-right-width: 0;
  border-style: solid;
  // min-height: 436px;
  padding: 40px 30px 30px;
  color: $navy;
  background: $white;
  margin-bottom: 25px;

  @include media-breakpoint-only(xs) {
    padding: 35px 25px 25px;
  }
}

.intro-copy {
  color: $darker-grey;
  @include media-breakpoint-only(xs) {
    padding: 0 15px;
  }
}

.border-bottom {
  padding: 0 20px;
}

.card {
  border: none;
}

.card-title {
  text-transform: uppercase;
  color: $purple;
  font-weight: 700;
}

.card-header {
  background: none;
  text-transform: uppercase;
  color: $purple;
  border-bottom: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0;
  padding-right: 0;

  @include media-breakpoint-only(xs) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }

  h6 {
    font-size: 1.25rem;
    font-weight: 700;

    @include media-breakpoint-only(xs) {
      font-size: rem(20px);
    }
  }
}

.btn-scoring-guide {
  background-color: $white;
  color: $purple;
  border: 1px solid $purple;
  text-transform: uppercase;
  width: 225px;
  height: 28px;
  font-size: rem(12px);
  line-height: rem(16px);
  padding: 0;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  img {
    margin-left: 10px;
  }
  &:hover {
    background-color: $white;
  }
  &:active {
    background-color: $white !important;
    color: $purple !important;
  }

  @include media-breakpoint-only(xs) {
    margin-left: 0;
  }
}

.card-body {
  border: 0;

  @include media-breakpoint-only(xs) {
    padding: 20px 0;
  }
}

.total-wrist,
.total-knee {
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @include media-breakpoint-only(xs) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.total-title {
  color: $darker-grey;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 13.5px;
  @include media-breakpoint-only(xs) {
    text-align: left;
    font-size: rem(18px);
  }
}

.total-container {
  border-left: 1px solid $light-grey;
  flex-direction: column;
  justify-content: center;

  @include media-breakpoint-only(xs) {
    border-top: 1px solid $light-grey;
    border-left: none;
    padding-top: 20px;
  }

  .totals {
    flex-direction: column;
    align-items: center;

    @include media-breakpoint-only(xs) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
}

.wrist-score-container {
  border-bottom: 1px solid $light-grey;

  @include media-breakpoint-only(xs) {
    flex-direction: column;
    border: none;
  }
}

.knee-score-container {
  @include media-breakpoint-only(xs) {
    flex-direction: column;
  }
}

.icon-plus {
  width: 40px;
}

.icon-equal {
  font-size: 45px;
  color: $light-green;
}

.num {
  background: $purple;
  color: $white;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: rem(50px);
  margin: 0 auto;

  @include media-breakpoint-only(xs) {
    width: 115px;
    height: 115px;
    font-size: rem(67px);
    margin: 0;
  }
}

select {
  text-align-last: center;
}

::v-deep .group-label-multiplier {
  left: rem(15px);
}

.btn-pdf {
  border: 1px solid $light-green;
  background: $white;
  color: $light-green;
  margin-top: 20px;
  font-size: rem(15px);
  line-height: rem(16px);

  @include media-breakpoint-only(xs) {
    text-transform: uppercase;
    margin: 40px 0;
    width: 100%;
  }
}

#scoring-guide-knee,
#scoring-guide-wrist {
  .row {
    padding: 20px 0;
    border-top-width: 4px;
    border-bottom-width: 4px;
    border-left-width: 0;
    border-right-width: 0;
    border-style: solid;
    border-top: 4px solid $purple;
    border-bottom: 4px solid $purple;
  }

  h2 {
    font-size: rem(20px);
    line-height: rem(22px);
    text-transform: uppercase;
    font-weight: bold;
    color: $purple;
    margin: 1rem 0;
  }
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 6px;
    th {
      color: $white;
      background-color: $purple;
      width: 47px;
      height: 33px;
      font-size: rem(16px);
      text-align: center;
      border: 1px solid $purple;
    }
    td {
      padding: 5px 10px;
      border: 1px solid $purple;
      font-size: rem(12px);
      line-height: rem(12px);
      color: $dark-grey;
    }
  }
  .img-container {
    display: flex;
    align-items: center;
    h3 {
      color: $purple;
      font-size: 20px;
      margin-right: 10px;
    }
  }
}

.offpage {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  overflow: hidden;
  @include media-breakpoint-only(xs) {
    width: 275%;
  }
}

/*
  TO DO:
  - Move into own component
  - Store dimensions and scale as variables
*/
.pdf-content {
  // width: calc(595.28px * 1.5);
  // height: calc(841.89px * 1.5);
  ::v-deep input {
    display: none;
  }
  .logo-container {
    width: rem(130px);
    margin-left: 20px;
    img {
      width: 100%;
    }
  }
  .calc-header {
    margin-bottom: -25px;
  }

  .total-wrist,
  .total-knee {
    @include media-breakpoint-only(xs) {
      margin-top: -175px;
      margin-bottom: 25px;
      margin-left: 400px;
    }
    br {
      @include media-breakpoint-only(xs) {
        display: none;
      }
    }
  }

  .total-title {
    br {
      @include media-breakpoint-only(xs) {
        display: none;
      }
    }
  }

  // .total-container .totals {
  //   @include media-breakpoint-only(xs) {
  //     flex-direction: column;
  //     margin-top: -350px;
  //     margin-left: 450px;
  //     // height: 100%;
  //   }
  // }

  ::v-deep .multiplier {
    @include media-breakpoint-only(xs) {
      // width: 100%;
      margin-left: 55px;
      order: 1px solid blue;
    }
  }

  .score-input {
    @include media-breakpoint-only(xs) {
      // margin-left: 20px;
    }
  }

  section {
    margin-top: -30px;
  }
}

.note,
date {
  font-size: rem(12px);
  line-height: rem(12px);
  color: $dark-grey;
  margin-top: 0.5rem;
}

.date {
  font-weight: $font-weight-bold;
}
</style>
