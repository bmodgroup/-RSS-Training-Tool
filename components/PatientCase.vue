<template>
  <b-row class="d-flex align-items-stretch patient-cases-assessments">
    <b-col md="10">
      <b-row class="mb-2">
        <b-col md="4" class="p-0">
          <b-row class="d-flex d-sm-none">
            <b-col>
              <h2 class="assessment-title-mobile">
                {{ patientCase.wristAssessment }}
              </h2>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="d-flex justify-content-between mb-2">
              <client-only
                ><image-zoom
                  v-for="wristImage in wristImages"
                  :key="wristImage.id"
                  :hover-message="feedback.hoverToZoom"
                  :touch-message="feedback.tapToZoom"
                  :class="{
                    selected: wristImage.selected,
                    'ml-3': wristImage.leftMargin,
                  }"
                  :alt="showFeedbackImageAlt(wristImage)"
                  class="img-zoomer"
                  :regular="
                    require(`@/assets/images/${showFeedbackImageSrc(
                      wristImage
                    )}`)
                  "
                  img-class="img-fluid"
                ></image-zoom
              ></client-only>
            </b-col>
          </b-row>
          <b-button
            class="btn-scoring-guide w-100 my-3 my-sm-1"
            @click="$bvModal.show(`scoring-guide-wrist-${uuid}`)"
            ><span v-html="button.wristScoringGuide"></span>
            <img src="~/assets/icons/scoring_guide.svg" alt=""
          /></b-button>
        </b-col>
        <b-col>
          <assessment
            type="wrist"
            layout="cases"
            :stepped="true"
            :assessment-scored.sync="wristAssessment"
            :show-correct="assessmentChecked"
            :correct-values="wristCorrectValues"
            :disabled="assessmentChecked"
            class="patient-cases"
          >
            <template #radius-title>
              <span>{{ patientCase.wristAssessment }}</span></template
            >
          </assessment>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" class="p-0">
          <b-row class="d-flex d-sm-none">
            <b-col>
              <h2
                class="assessment-title-mobile"
                v-html="patientCase.kneeAssessment"
              ></h2>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="d-flex justify-content-between mb-2">
              <client-only
                ><image-zoom
                  v-for="kneeImage in kneeImages"
                  :hover-message="feedback.hoverToZoom"
                  :touch-message="feedback.tapToZoom"
                  :key="kneeImage.id"
                  :class="{
                    selected: kneeImage.selected,
                    'ml-3': kneeImage.leftMargin,
                  }"
                  :alt="showFeedbackImageAlt(kneeImage)"
                  class="img-zoomer"
                  :regular="
                    require(`@/assets/images/${showFeedbackImageSrc(
                      kneeImage
                    )}`)
                  "
                  img-class="img-fluid"
                ></image-zoom
              ></client-only>
            </b-col>
          </b-row>
          <b-button
            class="btn-scoring-guide w-100 my-3 my-sm-1"
            @click="$bvModal.show(`scoring-guide-knee-${uuid}`)"
            ><span>{{ button.kneeScoringGuide }}</span>
            <img src="~/assets/icons/scoring_guide.svg" alt=""
          /></b-button>
        </b-col>
        <b-col>
          <assessment
            type="knee"
            layout="cases"
            :stepped="true"
            :assessment-scored.sync="kneeAssessment"
            :show-correct="assessmentChecked"
            :correct-values="kneeCorrectValues"
            :disabled="assessmentChecked"
            class="patient-cases"
            ><template #femur-title
              ><span v-html="patientCase.kneeAssessment"></span></template
          ></assessment>
        </b-col>
      </b-row>
      <hr class="d-sm-none" />
    </b-col>

    <b-col class="d-sm-flex justify-content-sm-center">
      <div class="line-break d-none d-sm-block"></div>
      <div
        class="
          patient-rss-total patient-rss-total
          justify-content-between
          d-flex
          my-3 my-sm-0
          p-0
        "
      >
        <h4
          :class="{
            active: wristAssessment.score && kneeAssessment.score,
            correct: assessmentChecked,
          }"
          class="rss-title text-left text-sm-center"
          v-html="assessment.totalPatientRSS"
        ></h4>
        <div
          :class="{
            active: wristAssessment.score >= 0 && kneeAssessment.score,
            correct: assessmentChecked,
          }"
          class="rss-number"
        >
          <span v-if="wristAssessment.score >= 0 && kneeAssessment.score">
            {{
              assessmentChecked
                ? wristCorrectValues.total + kneeCorrectValues.total
                : wristAssessment.score + kneeAssessment.score
            }}
          </span>
        </div>
      </div>
      <div class="check-assessment-container m-auto">
        <div :id="tooltipId" tabindex="0">
          <b-button
            :disabled="disableCheckAssessment"
            class="btn-check-assessment"
            @click="onCheckAssessment"
            >{{ button.checkAssessment }}</b-button
          >
        </div>
        <b-tooltip
          :target="tooltipId"
          triggers="hover focus"
          :disabled="!disableCheckAssessment"
        >
          <span>{{ patientCase.completeGrade }}</span>
        </b-tooltip>
      </div>
    </b-col>

    <b-modal
      :id="modalId"
      class="modal-assessment-check"
      :title="patientCase.assessmentCheck"
      size="xl"
      hide-footer
      static
      centered
    >
      <div :class="checkInputs ? '' : 'wrong'" class="container">
        <b-col md="12">
          <b-row>
            <b-col class="p-0">
              <div class="media mb-2 d-flex d-sm-none">
                <img
                  v-show="checkInputs"
                  class="mr-3"
                  src="~/assets/icons/icon-thats-right.svg"
                  alt=""
                />
                <img
                  v-show="!checkInputs"
                  class="mr-3"
                  src="~/assets/icons/icon-not-quite.svg"
                  alt=""
                />
                <div class="media-body">
                  <h5
                    v-show="checkInputs"
                    class="m-0"
                    v-html="patientCase.thatsRight"
                  ></h5>
                  <h5
                    v-show="!checkInputs"
                    class="m-0 not-quite"
                    v-html="patientCase.noNotQuite"
                  ></h5>
                  <span v-html="patientCase.answersHighlighted"></span>
                </div>
              </div>
            </b-col>
          </b-row>
          <b-row class="d-flex d-sm-none">
            <b-col class="p-0">
              <h2
                class="assessment-title-mobile"
                v-html="patientCase.wristAssessment"
              ></h2>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col md="3" class="p-0">
              <b-row>
                <b-col class="d-flex justify-content-between">
                  <client-only
                    ><image-zoom
                      v-for="wristImage in wristImages"
                      :key="wristImage.id"
                      :hover-message="feedback.hoverToZoom"
                      :touch-message="feedback.tapToZoom"
                      :class="{
                        selected: wristImage.selected,
                        'ml-3': wristImage.leftMargin,
                      }"
                      :alt="showFeedbackImageAlt(wristImage)"
                      class="img-zoomer"
                      :regular="
                        require(`@/assets/images/${showFeedbackImageSrc(
                          wristImage
                        )}`)
                      "
                      img-class="img-fluid"
                    ></image-zoom
                  ></client-only>
                </b-col>
              </b-row>
            </b-col>
            <b-col md="7">
              <div class="media mb-2 d-none d-sm-flex">
                <img
                  v-show="checkInputs"
                  class="mr-3"
                  src="~/assets/icons/icon-thats-right.svg"
                  alt=""
                />
                <img
                  v-show="!checkInputs"
                  class="mr-3"
                  src="~/assets/icons/icon-not-quite.svg"
                  alt=""
                />
                <div class="media-body">
                  <h5
                    v-show="checkInputs"
                    class="m-0"
                    v-html="patientCase.thatsRight"
                  ></h5>
                  <h5
                    v-show="!checkInputs"
                    class="m-0 not-quite"
                    v-html="patientCase.noNotQuite"
                  ></h5>
                  <span v-html="patientCase.answersHighlighted"></span>
                </div>
              </div>
              <assessment
                ref="wristResultsRef"
                type="wrist"
                layout="cases"
                :disabled="true"
                :show-correct="assessmentChecked"
                :correct-values="wristCorrectValues"
                class="patient-cases"
              >
                <template #radius-title>
                  <span v-html="patientCase.wristAssessment"></span>
                </template>
              </assessment>
            </b-col>
          </b-row>

          <b-row class="d-flex d-sm-none">
            <b-col class="p-0">
              <h2
                class="assessment-title-mobile"
                v-html="patientCase.kneeAssessment"
              ></h2>
            </b-col>
          </b-row>

          <b-row>
            <b-col md="3" class="p-0">
              <b-row>
                <b-col class="d-flex justify-content-between">
                  <client-only
                    ><image-zoom
                      v-for="kneeImage in kneeImages"
                      :key="kneeImage.id"
                      :hover-message="feedback.hoverToZoom"
                      :class="{
                        selected: kneeImage.selected,
                        'ml-3': kneeImage.leftMargin,
                      }"
                      :alt="showFeedbackImageAlt(kneeImage)"
                      class="img-zoomer"
                      :regular="
                        require(`@/assets/images/${showFeedbackImageSrc(
                          kneeImage
                        )}`)
                      "
                      img-class="img-fluid"
                    ></image-zoom
                  ></client-only>
                </b-col>
              </b-row>
            </b-col>
            <b-col md="7" class="p-0 px-sm-3">
              <assessment
                ref="kneeResultsRef"
                type="knee"
                layout="cases"
                :disabled="true"
                :show-correct="assessmentChecked"
                :correct-values="kneeCorrectValues"
                class="patient-cases"
                ><template #femur-title>
                  <span v-html="patientCase.kneeAssessment"></span></template
              ></assessment>
            </b-col>
          </b-row>
          <div class="line-break d-none d-sm-block"></div>
        </b-col>

        <b-col class="p-0 d-sm-none">
          <hr />
        </b-col>

        <b-col
          md="2"
          class="
            d-flex
            total-patient-rss
            justify-content-between
            align-items-center
            p-0
            my-3 my-sm-0
          "
        >
          <h2
            class="rss-title m-0 text-left text-sm-center"
            v-html="assessment.totalPatientRSS"
          ></h2>
          <div class="rss-number">
            <span>{{
              wristCorrectValues.total + kneeCorrectValues.total
            }}</span>
          </div>
        </b-col>
      </div>
    </b-modal>

    <scoring-guide
      :id="`scoring-guide-wrist-${uuid}`"
      scoring-guide="wrist"
      :image="getSelectedImage(wristImages)"
    />

    <scoring-guide
      :id="`scoring-guide-knee-${uuid}`"
      scoring-guide="knee"
      :image="getSelectedImage(kneeImages)"
    />
  </b-row>
</template>

<script>
import uuid from '@/mixins/uuid.js'
export default {
  mixins: [uuid],
  props: {
    wristImages: {
      type: Array,
      required: true,
    },
    kneeImages: {
      type: Array,
      required: true,
    },
    wristCorrectValues: {
      type: Object,
      required: true,
    },
    kneeCorrectValues: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      kneeAssessment: {},
      wristAssessment: {},
      assessmentChecked: false,
    }
  },
  computed: {
    patientCase() {
      return this.$t('patientCase')
    },
    button() {
      return this.$t('button')
    },
    assessment() {
      return this.$t('assessment')
    },
    feedback() {
      return this.$t('feedback')
    },
    disableCheckAssessment() {
      return (
        this.kneeAssessment.score === undefined ||
        this.kneeAssessment.score === null ||
        this.wristAssessment.score === undefined ||
        this.wristAssessment.score === null
      )
    },
    modalId() {
      return `modal-assessment-check-${this.uuid}`
    },
    checkInputs() {
      const isWristCorrect =
        this.wristCorrectValues.radius === this.wristAssessment.radius &&
        this.wristCorrectValues.ulna === this.wristAssessment.ulna

      const isKneeCorrect =
        this.kneeCorrectValues.femur === this.kneeAssessment.femur &&
        this.kneeCorrectValues.femurMulti === this.kneeAssessment.femurMulti &&
        this.kneeCorrectValues.tibia === this.kneeAssessment.tibia &&
        this.kneeCorrectValues.tibiaMulti === this.kneeAssessment.tibiaMulti

      return isWristCorrect && isKneeCorrect
    },
    tooltipId() {
      // Tooltips won't trigger properly if they share the same id.
      // A unique id needs to be generated for each component instance.
      return `btn-show-feedback-${this.uuid}`
    },
  },
  watch: {
    kneeAssessment(newVal, oldVal) {
      // Update results to reflect user inputs from first assessment component
      if (newVal !== oldVal && this.$refs.kneeResultsRef) {
        this.$refs.kneeResultsRef.knee = newVal
      }
    },
    wristAssessment(newVal, oldVal) {
      // Update results to reflect user inputs from first assessment component
      if (newVal !== oldVal && this.$refs.wristResultsRef) {
        this.$refs.wristResultsRef.wrist = newVal
      }
    },
  },
  methods: {
    onCheckAssessment() {
      this.assessmentChecked = true
      this.$bvModal.show(this.modalId)
    },
    showFeedbackImageSrc(image) {
      return this.assessmentChecked && image.srcFeedback
        ? image.srcFeedback
        : image.src
    },
    showFeedbackImageAlt(image) {
      return this.assessmentChecked && image.altFeedback
        ? image.altFeedback
        : image.alt
    },
    getSelectedImage(imagesArray) {
      // Return the image object that has the selected property set to true
      // We want to show the selected image inside the scoring guide component/modal
      return imagesArray.find((image) => image.selected)
    },
  },
}
</script>

<style lang="scss">
.selected {
  &:before {
    display: inline-block;
    content: '';
    width: 100%;
    height: 100%;
    border: solid 4px $light-green;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    pointer-events: none;
  }
}

.btn-scoring-guide {
  background-color: $white;
  color: $purple;
  border: 1px solid $purple;
  text-transform: uppercase;
  width: 251px;
  height: 28px;
  font-size: rem(14px);
  line-height: rem(16px);
  padding: 0;
  margin: 5px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 10px;
  }
  &:hover,
  &:focus,
  &:active,
  &:not(:disabled):not(.disabled):active,
  &:not(:disabled):not(.disabled).active {
    background-color: $white;
    color: $purple;
    box-shadow: none;
  }
  &:focus-visible {
    background-color: $white;
    color: $purple;
    box-shadow: 0 0 0 0.2rem rgb(130 138 145 / 50%);
  }
}

.btn-check-assessment {
  background-color: $white;
  color: $light-green;
  text-transform: uppercase;
  border: 1px solid $light-green;
  white-space: normal;
  // height: 28px;
  line-height: 1;
  margin: 16px 0;
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

.rss-title {
  margin: 0 15px 0 0;
  font-size: rem(23px);
  color: $light-green;
  text-transform: uppercase;
  font-weight: 600;
}

.rss-number {
  border: 1px solid $light-grey;
  width: rem(80px);
  height: rem(80px);
  border-radius: 50%;
  position: relative;
  background: $light-green;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: rem(45px);
    color: $white;
    font-weight: 600;
  }
  @include media-breakpoint-down(xs) {
    width: rem(115px);
    height: rem(115px);
    span {
      font-size: rem(70px);
    }
  }
}

.modal-assessment-check {
  .container {
    padding: 20px 0;
    border-top-width: 4px;
    border-bottom-width: 4px;
    border-left-width: 0;
    border-right-width: 0;
    border-style: solid;
    border-image: linear-gradient(90deg, $light-green, $light-green) 1;
    margin: 0;
    &.wrong {
      border-top: 4px solid $mustard;
      border-bottom: 4px solid $mustard;
      border-image: none;
    }
  }

  .media {
    img {
      width: 37px;
      height: 37px;
    }
  }
  .media-body {
    h5 {
      color: $light-green;
      text-transform: uppercase;
      font-weight: 600;
      font-size: rem(20px);
      line-height: 0.7;
      &.not-quite {
        color: $mustard;
      }
    }
    span {
      font-size: rem(12px);
      color: $dark-grey;
    }
  }

  .total-patient-rss {
    flex-direction: column;
    position: absolute;
    top: 50%;
    right: -50px;
    transform: translate(-50%, -50%);
    @include media-breakpoint-down(xs) {
      flex-direction: row;
      top: 0;
      transform: translateY(0);
      position: static;
      width: 100%;
    }
    .rss-title {
      font-size: rem(13px);
      text-align: center;
      @include media-breakpoint-down(xs) {
        font-size: rem(18px);
        margin-bottom: 0;
      }
    }
  }
  .line-break {
    border-right: 1px solid #dee2e6;
    position: absolute;
    right: 14%;
    top: 10%;
    height: 85%;
  }
}

.patient-cases {
  .cases-knee {
    display: block;
  }
}

.patient-rss-total {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  transform: translateY(-95%);
  @include media-breakpoint-down(xs) {
    flex-direction: row;
    top: 0;
    transform: translateY(0);
    position: relative;
    width: 100%;
  }
  .rss-title {
    color: $light-grey;
    text-transform: uppercase;
    font-size: rem(13px);
    font-weight: 600;
    margin: 0 0 0.5rem;
    @include media-breakpoint-down(xs) {
      font-size: rem(18px);
      margin-bottom: 0;
    }
    &.active {
      color: $purple;
    }
    &.correct {
      color: $light-green;
    }
  }
  .rss-number {
    border: 1px solid $light-grey;
    background: none;
    @include media-breakpoint-down(xs) {
      span {
        font-size: rem(70px);
        top: 48%;
      }
    }
    span {
      font-size: rem(45px);
      @include media-breakpoint-down(xs) {
        font-size: rem(70px);
      }
    }
    &.active {
      background: $purple;
    }
    &.correct {
      background: $light-green;
    }
  }
}

.totals-column {
  position: relative;
  display: flex;
  // align-items: center;
  justify-content: center;
  // height: calc(100% - 88px);
}

.check-assessment-container {
  position: absolute;
  bottom: 0;
  right: 20px;
  width: 204px;
  white-space: nowrap;
  @include media-breakpoint-down(xs) {
    position: static;
    width: 100%;
  }

  .btn-check-assessment {
    width: 100%;
  }
}

.total-patient-rss {
  margin-right: -15px;
}

.left-content {
  position: relative;
}

.line-break {
  border-right: 1px solid #dee2e6;
  position: relative;
  right: 50%;
  height: 85%;
}

.assessment-title-mobile {
  font-size: rem(18px);
  color: $purple;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: rem(12px);
}

.assessment-layout-cases {
  .multiplier-container {
    align-items: flex-start !important;
    @include media-breakpoint-down(xs) {
      &:before {
        left: rem(28px) !important;
      }
      padding-left: rem(70px);
    }
  }
  .group-label-multiplier {
    @include media-breakpoint-down(xs) {
      left: rem(84px);
    }
  }
}

.patient-cases-assessments {
  @include media-breakpoint-down(xs) {
    .modal-body .container {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
}
</style>
