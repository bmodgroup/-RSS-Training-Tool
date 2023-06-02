<template>
  <b-row>
    <b-col class="d-block d-sm-none">
      <h3 class="radiographic-header" v-if="type === 'wrist'">
        {{ practiceCase.wristImage }}
        <strong>{{ currentPage }}</strong>
        {{ practiceCase.of }}
        <strong>{{ pages }}</strong>
      </h3>
      <h3 class="radiographic-header" v-if="type === 'knee'">
        {{ practiceCase.kneeImage }}
        <strong>{{ currentPage }}</strong>
        {{ practiceCase.of }}
        <strong>{{ pages }}</strong>
      </h3>
      <b-row no-gutters>
        <b-col cols="10">
          <p
            v-if="type === 'wrist'"
            class="instruction"
            v-html="practiceCase.wristInstruction"
          ></p>
          <p
            v-if="type === 'knee'"
            class="instruction"
            v-html="practiceCase.kneeInstruction"
          ></p>
        </b-col>
        <b-col cols="2" class="text-right">
          <img
            v-b-tooltip.hover
            src="~/assets/icons/icon-i.svg"
            alt="information"
            class="info mt-2"
            :title="practiceCase.info"
          />
        </b-col>
      </b-row>
    </b-col>
    <b-col md="4">
      <client-only
        ><image-zoom
          :key="image.src"
          :hover-message="feedback.hoverToZoom"
          :touch-message="feedback.tapToZoom"
          :regular="
            require(`@/assets/images/${
              this.assessmentChecked ? image.srcFeedback : image.src
            }`)
          "
          :alt="image.alt"
          img-class="img-fluid"
          class="img-zoomer"
        ></image-zoom
      ></client-only>
      <b-button
        class="btn-scoring-guide"
        @click="$bvModal.show(`scoring-guide-${uuid}`)"
        >{{ button.scoringGuide }}
        <img src="~/assets/icons/scoring_guide.svg" alt=""
      /></b-button>
    </b-col>
    <b-col md="8">
      <h3 class="radiographic-header" v-if="type === 'wrist'">
        {{ practiceCase.wristImage }}
        <strong>{{ currentPage }}</strong>
        {{ practiceCase.of }}
        <strong>{{ pages }}</strong>
      </h3>
      <h3 class="radiographic-header" v-if="type === 'knee'">
        {{ practiceCase.kneeImage }}
        <strong>{{ currentPage }}</strong>
        {{ practiceCase.of }}
        <strong>{{ pages }}</strong>
      </h3>
      <b-row
        no-gutters
        class="d-none d-sm-flex"
        :class="type === 'wrist' ? 'mb-5' : 'mb-3'"
      >
        <b-col cols="8">
          <p
            v-if="type === 'wrist'"
            class="instruction"
            v-html="practiceCase.wristInstruction"
          ></p>
          <p
            v-if="type === 'knee'"
            class="instruction"
            v-html="practiceCase.kneeInstruction"
          ></p>
        </b-col>
        <b-col cols="4" class="text-right">
          <img
            v-b-tooltip.hover
            src="~/assets/icons/icon-i.svg"
            alt="information"
            class="info mt-2"
            :title="practiceCase.info"
          />
        </b-col>
      </b-row>
      <assessment
        ref="assessmentRef"
        :type="type"
        :disabled="assessmentChecked"
        :show-correct="assessmentChecked"
        :correct-values="correctValues"
        :assessment-scored.sync="assessment"
        :stepped-knee="true"
        layout="practice"
      >
        <template #radius-title>{{ practiceCase.wristAssessment }}</template>
        <template #femur-title>{{ practiceCase.kneeAssessment }}</template>
      </assessment>
      <b-row no-gutters class="justify-content-end button-container">
        <b-col
          md="4"
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <div :id="tooltipId" tabindex="0" class="feedback-btn-container">
            <b-button
              :disabled="disableCheckAssessment"
              class="btn-check-assessment"
              @click="assessmentChecked = true"
              v-html="button.checkAssessment"
            ></b-button>
          </div>
          <b-button v-show="showRedo" class="btn-redo" @click="resetAssessment">
            <img src="~/assets/icons/icon-redo.svg" alt="" clas="icon-redo" />
            <span v-html="button.tryAgain"></span>
          </b-button>

          <div
            v-show="
              type === 'wrist' &&
              currentPage === 5 &&
              assessmentChecked === true
            "
            class="mt-3"
          >
            <p class="text-center instruction-complete">
              <a @click="toKnee">
                <span v-html="practiceCase.toKnee"></span>
                <img src="~/assets/icons/nav-arrow.svg" alt=""
              /></a>
            </p>
          </div>

          <div
            v-show="
              type === 'knee' && currentPage === 5 && assessmentChecked === true
            "
            class="mt-3"
          >
            <p class="text-center instruction-complete">
              <router-link to="cases">
                <span v-html="practiceCase.toPatient"></span>
                <img src="~/assets/icons/nav-arrow.svg" alt=""
              /></router-link>
            </p>
          </div>
        </b-col>
      </b-row>

      <!--
        Assessment Check Modal:
        "static" prop must be set to true, so that modal is always in the DOM
        and reactive to changes outside of the modal (ie. assessment inputs)
      -->
      <b-modal
        :id="modalId"
        :title="practiceCase.assessmentCheck"
        size="xl"
        hide-footer
        static
        centered
        class="assess-modal"
      >
        <b-row no-gutters :class="checkInputs ? 'right' : 'wrong'">
          <div class="d-block d-sm-none">
            <div v-show="checkInputs" class="thats-right">
              <div class="icon-container">
                <img src="~/assets/icons/icon-thats-right.svg" alt="" />
              </div>
              <div class="copy">
                <span v-html="practiceCase.thatsRight"></span>
                <p
                  class="instructions"
                  v-html="practiceCase.answersHighlighted"
                ></p>
              </div>
            </div>
            <div v-show="!checkInputs" class="not-quite">
              <div class="icon-container">
                <img src="~/assets/icons/icon-not-quite.svg" alt="" />
              </div>
              <div class="copy">
                <span v-html="practiceCase.noNotQuite"></span>
                <p
                  class="instructions"
                  v-html="practiceCase.answersHighlighted"
                ></p>
              </div>
            </div>
          </div>
          <b-col class="pr-sm-4 col-12 col-sm-4">
            <client-only
              ><image-zoom
                :key="image.src"
                :hover-message="feedback.hoverToZoom"
                :touch-message="feedback.tapToZoom"
                :regular="require(`@/assets/images/${image.srcFeedback}`)"
                :alt="image.alt"
                img-class="img-fluid"
                class="img-zoomer"
              ></image-zoom
            ></client-only>
          </b-col>
          <b-col class="col-12 col-sm-8">
            <div class="d-none d-sm-flex">
              <div v-show="checkInputs" class="thats-right">
                <div class="icon-container">
                  <img src="~/assets/icons/icon-thats-right.svg" alt="" />
                </div>
                <div class="copy">
                  <span v-html="practiceCase.thatsRight"></span>
                  <p
                    class="instructions"
                    v-html="practiceCase.answersHighlighted"
                  ></p>
                </div>
              </div>
              <div v-show="!checkInputs" class="not-quite">
                <div class="icon-container">
                  <img src="~/assets/icons/icon-not-quite.svg" alt="" />
                </div>
                <div class="copy">
                  <span v-html="practiceCase.noNotQuite"></span>
                  <p
                    class="instructions"
                    v-html="practiceCase.answersHighlighted"
                  ></p>
                </div>
              </div>
            </div>
            <!--
              This assessment component only shows the resulting user inputs
              and should always be disabled (or prevent user interactions).
            -->
            <assessment
              ref="resultsRef"
              :type="type"
              :disabled="true"
              :show-correct="assessmentChecked"
              :correct-values="correctValues"
              layout="practice"
            >
              <template #radius-title>
                <span
                  v-if="type === 'wrist'"
                  v-html="practiceCase.wristAssessment"
                ></span>

                <span
                  v-if="type === 'knee'"
                  v-html="practiceCase.kneeAssessment"
                ></span>
              </template>
            </assessment>
            <p class="answer-copy pt-3 mt-3">
              {{ answerCopy }}
            </p>
          </b-col>
        </b-row>
      </b-modal>
    </b-col>

    <scoring-guide
      :id="`scoring-guide-${uuid}`"
      :scoring-guide="type"
      :image="image"
    />
  </b-row>
</template>

<script>
import uuid from "@/mixins/uuid.js";
export default {
  mixins: [uuid],
  props: {
    type: {
      // "wrist" or "knee"
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
    correctValues: {
      type: Object,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    answerCopy: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      assessment: {},
      assessmentChecked: false,
    };
  },
  computed: {
    practiceCase() {
      return this.$t("practiceCase");
    },
    button() {
      return this.$t("button");
    },
    feedback() {
      return this.$t("feedback");
    },
    tooltipId() {
      // Tooltips won't trigger properly if they share the same id.
      // A unique id needs to be generated for each component instance.
      return `btn-show-feedback-${this.uuid}`;
    },
    disableCheckAssessment() {
      // Disable Check Assessment button if inputs to calculate the score have not been entered
      return (
        this.assessment.score === undefined ||
        this.assessment.score === null ||
        this.assessmentChecked
      );
    },
    showRedo() {
      // Show redo button if assessment has been "checked"
      return this.assessmentChecked;
    },
    modalId() {
      return `modal-assessment-check-${this.uuid}`;
    },
    checkInputs() {
      const isWristCorrect =
        this.correctValues.radius === this.assessment.radius &&
        this.correctValues.ulna === this.assessment.ulna;

      const isKneeCorrect =
        this.correctValues.femur === this.assessment.femur &&
        this.correctValues.femurMulti === this.assessment.femurMulti &&
        this.correctValues.tibia === this.assessment.tibia &&
        this.correctValues.tibiaMulti === this.assessment.tibiaMulti;

      return isWristCorrect && isKneeCorrect;
    },
  },
  watch: {
    assessment(newVal, oldVal) {
      // Update results to reflect user inputs from first assessment component
      if (newVal !== oldVal && this.$refs.resultsRef) {
        this.$refs.resultsRef[this.type] = newVal;
      }
    },
    assessmentChecked() {
      if (this.assessmentChecked) {
        this.$bvModal.show(this.modalId);
      }
    },
  },
  methods: {
    resetAssessment() {
      this.$refs.assessmentRef.reset();
      this.assessmentChecked = false;
    },
    toKnee() {
      this.$emit("toKneePractice");
    },
  },
};
</script>
<style lang="scss" scoped>
.radiographic-header {
  border-bottom: 1px solid $navy;

  &::first-letter {
    text-transform: capitalize;
  }
}

.assess-modal {
  .row {
    padding: 20px 0;
    border-top-width: 4px;
    border-bottom-width: 4px;
    border-left-width: 0;
    border-right-width: 0;
    border-style: solid;
    &.right {
      border-top: 4px solid $green;
      border-bottom: 4px solid $green;
    }
    &.wrong {
      border-top: 4px solid $mustard;
      border-bottom: 4px solid $mustard;
    }
  }
}

.thats-right,
.not-quite {
  font-size: rem(20px);
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin-bottom: rem(10px);
  .icon-container {
    width: 35px;
    margin-right: 10px;
    img {
      width: 100%;
    }
  }
}
.thats-right {
  color: $green;
}

.not-quite {
  color: $mustard;
}

.instructions {
  font-size: rem(12px);
  font-weight: 600;
  color: $dark-grey;
  text-transform: none;
  margin: -5px 0 0;
  &.smaller {
    font-size: rem(18px);
    line-height: rem(24px);
    font-weight: 600;
  }
}

.answer-copy {
  color: $dark-grey;
  border-top: 1px solid $light-grey;
}

.instruction-complete {
  white-space: nowrap;
  font-size: rem(12px);

  button {
    background-color: none !important;
    color: $purple;
  }

  a {
    cursor: pointer;
  }
}

::v-deep .tooltip-inner {
  background-color: $navy;
  color: $white;
  font-size: rem(14px);
  line-height: rem(16px);
  z-index: 100;
  padding: 0.75rem;
  text-align: left;
  min-width: 210px;
}

::v-deep .arrow::before {
  border-top-color: $navy;
}

.assessment-layout-practice {
  ::v-deep .multiplier-container {
    &:before {
      // left: rem(-19px);
    }
    @include media-breakpoint-down(xs) {
      &:before {
        left: rem(32px);
      }
      padding-left: rem(70px);
      align-items: flex-start !important;
    }
  }

  ::v-deep .group-label-multiplier {
    @include media-breakpoint-down(xs) {
      left: rem(84px);
    }
  }
}

::v-deep .modal-dialog {
  max-width: 800px;
}

::v-deep .modal-content {
  .multiplier-container {
    &:before {
      left: rem(-19px);
    }
  }
}
</style>
