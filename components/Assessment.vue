<template>
  <div
    :class="[`assessment-layout-${layout}`, { 'show-correct': showCorrect }]"
  >
    <template v-if="layout === 'practice'">
      <template v-if="type === 'knee'">
        <b-row no-gutters>
          <b-col class="col-md-8">
            <b-row>
              <b-col>
                <h2 class="assessment-title">
                  <slot name="femur-title"> </slot>
                </h2>
              </b-col>
            </b-row>
            <b-row
              class="d-flex flex-sm-nowrap flex-wrap align-items-center mb-2"
            >
              <b-col>
                <score-input
                  ref="femurInputRef"
                  category="femur"
                  :disabled="disabled"
                  :show-correct="showCorrect"
                  :correct-value="correctValues.femur"
                  :value="knee.femur"
                  @input="knee.femur = $event"
                />
              </b-col>
              <b-col
                class="pl-0"
                :class="{
                  disabled: steppedKnee && isNull(knee.femur),
                }"
              >
                <b-row v-show="!!$slots['femur-multi-title']">
                  <h2 class="assessment-title">
                    <slot name="femur-multi-title"> </slot>
                  </h2>
                </b-row>
                <score-input
                  ref="femurMultiRef"
                  category="multiplier"
                  :disabled="disabled"
                  :show-correct="showCorrect"
                  :correct-value="correctValues.femurMulti"
                  :value="knee.femurMulti"
                  @input="knee.femurMulti = $event"
                />
              </b-col>
            </b-row>
            <b-row class="d-flex flex-sm-nowrap flex-wrap">
              <b-col
                :class="{
                  disabled: stepped && isNull(knee.femurMulti),
                }"
              >
                <b-row v-show="!!$slots['tibia-title']">
                  <h2 class="assessment-title">
                    <slot name="tibia-title"> </slot>
                  </h2>
                </b-row>
                <score-input
                  ref="tibiaInputRef"
                  category="tibia"
                  :disabled="disabled"
                  :show-correct="showCorrect"
                  :correct-value="correctValues.tibia"
                  :value="knee.tibia"
                  @input="knee.tibia = $event"
                />
              </b-col>
              <b-col
                class="pl-0"
                :class="{
                  disabled: steppedKnee && isNull(knee.tibia),
                }"
              >
                <b-row v-show="!!$slots['tibia-multi-title']">
                  <h2 class="assessment-title">
                    <slot name="tibia-multi-title"> </slot>
                  </h2>
                </b-row>
                <score-input
                  ref="tibiaMultiRef"
                  category="multiplier"
                  :disabled="disabled"
                  :show-correct="showCorrect"
                  :correct-value="correctValues.tibiaMulti"
                  :value="knee.tibiaMulti"
                  @input="knee.tibiaMulti = $event"
              /></b-col>
            </b-row>
          </b-col>
          <b-col md="4" class="d-sm-flex justify-content-sm-center p-0">
            <b-row>
              <b-col
                class="align-items-center d-flex flex-sm-column justify-content-between justify-content-sm-start my-3 my-sm-0"
              >
                <h4
                  :class="{ active: !isNull(kneeScore), correct: showCorrect }"
                  class="total-header"
                  v-html="assessment.kneeTotal"
                ></h4>
                <div
                  :class="{ active: !isNull(kneeScore), correct: showCorrect }"
                  class="total-number"
                >
                  <span>{{
                    showCorrect === true ? correctValues.total : kneeScore
                  }}</span>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </template>
      <template v-if="type === 'wrist'">
        <b-row no-gutters class="mt-4 mt-sm-0">
          <b-col>
            <b-row>
              <b-col v-show="!!$slots['radius-title']">
                <h2 class="assessment-title">
                  <slot name="radius-title"> </slot>
                </h2>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <score-input
                  ref="radiusInputRef"
                  category="radius"
                  :disabled="disabled"
                  :show-correct="showCorrect"
                  :correct-value="correctValues.radius"
                  :value="wrist.radius"
                  @input="wrist.radius = $event"
                />
              </b-col>
            </b-row>
            <b-row
              :class="{
                disabled: stepped && isNull(wrist.radius),
              }"
            >
              <b-col>
                <b-row>
                  <b-col v-show="!!$slots['ulna-title']">
                    <h2 class="assessment-title">
                      <slot name="ulna-title"> </slot>
                    </h2>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <score-input
                      ref="ulnaInputRef"
                      category="ulna"
                      :disabled="disabled"
                      :show-correct="showCorrect"
                      :correct-value="correctValues.ulna"
                      :value="wrist.ulna"
                      @input="wrist.ulna = $event"
                    />
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="4" class="d-sm-flex justify-content-sm-center p-0">
            <b-row>
              <b-col
                class="align-items-center d-flex flex-sm-column justify-content-between justify-content-sm-start my-3 my-sm-0"
              >
                <h4
                  :class="{ active: !isNull(wristScore), correct: showCorrect }"
                  class="total-header"
                  v-html="assessment.wristTotal"
                ></h4>
                <div
                  :class="{ active: !isNull(wristScore), correct: showCorrect }"
                  class="total-number"
                >
                  <span>{{
                    showCorrect === true ? correctValues.total : wristScore
                  }}</span>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </template>
    </template>

    <template v-if="layout === 'tutorial'">
      <template v-if="type === 'knee'">
        <b-row>
          <b-col class="col-md-12">
            <b-row class="d-flex flex-wrap flex-sm-nowrap mb-2">
              <b-col>
                <h2 class="assessment-title">
                  <slot name="femur-title"> </slot>
                </h2>
                <score-input
                  ref="femurInputRef"
                  category="femur"
                  :disabled="disabled"
                  :show-correct="showCorrect"
                  :correct-value="correctValues.femur"
                  :value="knee.femur"
                  @input="knee.femur = $event"
                />
              </b-col>
              <b-col
                class="pl-sm-0"
                :class="{
                  disabled: stepped && isNull(knee.femur),
                }"
              >
                <b-row v-show="!!$slots['femur-multi-title']">
                  <b-col>
                    <h2 class="assessment-title">
                      <slot name="femur-multi-title"> </slot>
                    </h2>
                  </b-col>
                </b-row>
                <score-input
                  ref="femurMultiRef"
                  category="multiplier"
                  :disabled="disabled"
                  :show-correct="showCorrect"
                  :correct-value="correctValues.femurMulti"
                  :value="knee.femurMulti"
                  @input="knee.femurMulti = $event"
                />
              </b-col>
            </b-row>
            <b-row class="d-flex flex-wrap flex-sm-nowrap">
              <b-col
                :class="{
                  disabled: stepped && isNull(knee.femurMulti),
                }"
              >
                <h2 v-show="!!$slots['tibia-title']" class="assessment-title">
                  <slot name="tibia-title"></slot>
                </h2>
                <score-input
                  ref="tibiaInputRef"
                  category="tibia"
                  :disabled="disabled"
                  :show-correct="showCorrect"
                  :correct-value="correctValues.tibia"
                  :value="knee.tibia"
                  @input="knee.tibia = $event"
                />
              </b-col>
              <b-col
                class="pl-sm-0"
                :class="{
                  disabled: stepped && isNull(knee.tibia),
                }"
              >
                <b-row v-show="!!$slots['tibia-multi-title']">
                  <b-col>
                    <h2 class="assessment-title">
                      <slot name="tibia-multi-title"> </slot>
                    </h2>
                  </b-col>
                </b-row>
                <score-input
                  ref="tibiaMultiRef"
                  category="multiplier"
                  :disabled="disabled"
                  :show-correct="showCorrect"
                  :correct-value="correctValues.tibiaMulti"
                  :value="knee.tibiaMulti"
                  @input="knee.tibiaMulti = $event"
              /></b-col>
            </b-row>
            <b-row>
              <b-col>
                <h4
                  :class="{
                    disabled: isNull(knee.femur) || isNull(knee.femurMulti),
                  }"
                  class="assessment-title"
                >
                  <slot name="total-title"></slot>
                </h4>
                <p
                  :class="{
                    disabled: isNull(knee.femur) || isNull(knee.femurMulti),
                  }"
                  class="assessment-title multiplier"
                  v-html="assessment.kneeCalc"
                ></p>
                <div
                  class="calculations align-items-center d-flex flex-row justify-content-between justify-content-sm-start"
                >
                  <div
                    :class="{
                      active: !isNull(knee.femur) && !isNull(knee.femurMulti),
                    }"
                    class="total-number"
                  >
                    <span class="option-text">{{
                      isNull(knee.femur) || isNull(knee.femurMulti)
                        ? ""
                        : knee.femur * knee.femurMulti
                    }}</span>
                  </div>
                  <span class="m-2"
                    ><img src="~/assets/icons/icon-plus.svg" alt="plus"
                  /></span>
                  <div
                    :class="{
                      active: !isNull(knee.tibia) && !isNull(knee.tibiaMulti),
                    }"
                    class="total-number"
                  >
                    <span class="option-text">{{
                      isNull(knee.tibia) || isNull(knee.tibiaMulti)
                        ? ""
                        : knee.tibia * knee.tibiaMulti
                    }}</span>
                  </div>
                  <span class="m-2"
                    ><img src="~/assets/icons/icon-equal-grey.svg" alt="equal"
                  /></span>
                  <div
                    :class="{
                      'active-total': !isNull(kneeScore),
                      correct: showCorrect,
                    }"
                    class="total-number"
                  >
                    <span class="option-text">{{
                      showCorrect === true ? correctValues.total : kneeScore
                    }}</span>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <!-- <b-col md="4" class="d-flex justify-content-end p-0">
          <b-row>
            <b-col class="align-items-center d-flex flex-column">
              <h4
                :class="{ active: !isNull(kneeScore), correct: showCorrect }"
                class="total-header"
              >
                Total Knee Score
              </h4>
              <div
                :class="{ active: !isNull(kneeScore), correct: showCorrect }"
                class="total-number"
              >
                <span>{{
                  showCorrect === true ? correctValues.total : kneeScore
                }}</span>
              </div>
            </b-col>
          </b-row>
        </b-col> -->
        </b-row>
      </template>
      <template v-if="type === 'wrist'">
        <b-row>
          <b-col v-show="!!$slots['radius-title']">
            <h2 class="assessment-title">
              <slot name="radius-title"> </slot>
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <score-input
              ref="radiusInputRef"
              category="radius"
              :disabled="disabled"
              :show-correct="showCorrect"
              :correct-value="correctValues.radius"
              :value="wrist.radius"
              @input="wrist.radius = $event"
            />
          </b-col>
        </b-row>
        <b-row
          :class="{
            disabled: stepped && isNull(wrist.radius),
          }"
        >
          <b-col>
            <b-row>
              <b-col v-show="!!$slots['ulna-title']">
                <h2 class="assessment-title">
                  <slot name="ulna-title"> </slot>
                </h2>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <score-input
                  ref="ulnaInputRef"
                  category="ulna"
                  :disabled="disabled"
                  :show-correct="showCorrect"
                  :correct-value="correctValues.ulna"
                  :value="wrist.ulna"
                  @input="wrist.ulna = $event"
                />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row :class="{ disabled: stepped && isNull(wrist.ulna) }">
          <b-col>
            <h4
              :class="{ active: !isNull(wristScore) }"
              class="assessment-title"
            >
              <slot name="total-title"></slot>
            </h4>
            <p
              :class="{ active: !isNull(wristScore) }"
              class="assessment-title multiplier"
              v-html="assessment.wristCalc"
            ></p>
            <div
              class="calculations align-items-center d-flex flex-row justify-content-between justify-content-sm-start"
            >
              <div
                :class="{ active: !isNull(wrist.radius) }"
                class="total-number"
              >
                <span class="option-text">{{ wrist.radius }}</span>
              </div>
              <span class="m-2"
                ><img src="~/assets/icons/icon-plus.svg" alt="plus"
              /></span>
              <div
                :class="{ active: !isNull(wrist.ulna) }"
                class="total-number"
              >
                <span class="option-text">{{ wrist.ulna }}</span>
              </div>
              <span class="m-2"
                ><img src="~/assets/icons/icon-equal-grey.svg" alt="equal"
              /></span>
              <div
                :class="{
                  'active-total': !isNull(wristScore),
                  correct: showCorrect,
                }"
                class="total-number"
              >
                <span class="option-text">{{
                  showCorrect === true ? correctValues.total : wristScore
                }}</span>
              </div>
            </div>
          </b-col>
        </b-row>
      </template>
    </template>

    <!-- CASES -->
    <template v-if="layout === 'cases'">
      <template v-if="type === 'knee'">
        <b-row class="in-patient-cases knee mt-4 my-sm-0">
          <b-col>
            <b-row>
              <b-col>
                <h2 class="assessment-title d-none d-sm-block">
                  <slot name="femur-title"> </slot>
                </h2>
              </b-col>
            </b-row>
            <b-row
              class="d-flex flex-sm-nowrap flex-wrap align-items-center mb-2"
            >
              <b-col>
                <score-input
                  ref="femurInputRef"
                  category="femur"
                  :disabled="disabled"
                  :show-correct="showCorrect"
                  :correct-value="correctValues.femur"
                  :value="knee.femur"
                  @input="knee.femur = $event"
                />
              </b-col>
              <b-col
                class="pl-0"
                :class="{
                  disabled: stepped && isNull(knee.femur),
                }"
              >
                <b-row v-show="!!$slots['femur-multi-title']">
                  <h2 class="assessment-title d-none d-sm-block">
                    <slot name="femur-multi-title"> </slot>
                  </h2>
                </b-row>
                <score-input
                  ref="femurMultiRef"
                  category="multiplier"
                  :disabled="disabled"
                  :show-correct="showCorrect"
                  :correct-value="correctValues.femurMulti"
                  :value="knee.femurMulti"
                  @input="knee.femurMulti = $event"
                />
              </b-col>
            </b-row>
            <b-row class="d-flex flex-sm-nowrap flex-wrap">
              <b-col
                :class="{
                  disabled: stepped && isNull(knee.femurMulti),
                }"
              >
                <h2 class="assessment-title">
                  <slot name="tibia-title"></slot>
                </h2>
              </b-col>
            </b-row>
            <b-row class="d-flex flex-sm-nowrap flex-wrap">
              <b-col
                :class="{
                  disabled: stepped && isNull(knee.femurMulti),
                }"
              >
                <score-input
                  ref="tibiaInputRef"
                  category="tibia"
                  :disabled="disabled"
                  :show-correct="showCorrect"
                  :correct-value="correctValues.tibia"
                  :value="knee.tibia"
                  @input="knee.tibia = $event"
                />
              </b-col>
              <b-col
                class="pl-0"
                :class="{
                  disabled: stepped && isNull(knee.tibia),
                }"
              >
                <b-row v-show="!!$slots['tibia-multi-title']">
                  <h2 class="assessment-title">
                    <slot name="tibia-multi-title"> </slot>
                  </h2>
                </b-row>
                <score-input
                  ref="tibiaMultiRef"
                  category="multiplier"
                  :disabled="disabled"
                  :show-correct="showCorrect"
                  :correct-value="correctValues.tibiaMulti"
                  :value="knee.tibiaMulti"
                  @input="knee.tibiaMulti = $event"
              /></b-col>
            </b-row>
          </b-col>
          <b-col class="d-sm-flex justify-content-sm-end p-sm-0">
            <b-row>
              <b-col
                class="align-items-center d-flex flex-sm-column justify-content-between justify-content-sm-start my-3 my-sm-0"
              >
                <h4
                  :class="{
                    active: !isNull(kneeScore),
                    correct: showCorrect,
                  }"
                  class="total-header text-left text-sm-center"
                  v-html="assessment.totalKneeScore"
                ></h4>
                <div
                  :class="{
                    active: !isNull(kneeScore),
                    correct: showCorrect,
                  }"
                  class="total-number"
                >
                  <span>{{
                    showCorrect === true ? correctValues.total : kneeScore
                  }}</span>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </template>
      <template v-if="type === 'wrist'">
        <b-row class="in-patient-cases wrist my-4 my-sm-0">
          <b-col class="p-0 px-sm-3">
            <b-row>
              <b-col v-show="!!$slots['radius-title']">
                <h2 class="assessment-title d-none d-sm-block">
                  <slot name="radius-title"> </slot>
                </h2>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <score-input
                  ref="radiusInputRef"
                  category="radius"
                  :disabled="disabled"
                  :show-correct="showCorrect"
                  :correct-value="correctValues.radius"
                  :value="wrist.radius"
                  @input="wrist.radius = $event"
                />
              </b-col>
            </b-row>
            <b-row
              :class="{
                disabled: stepped && isNull(wrist.radius),
              }"
            >
              <b-col>
                <b-row>
                  <b-col v-show="!!$slots['ulna-title']">
                    <h2 class="assessment-title">
                      <slot name="ulna-title"> </slot>
                    </h2>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <score-input
                      ref="ulnaInputRef"
                      category="ulna"
                      :disabled="disabled"
                      :show-correct="showCorrect"
                      :correct-value="correctValues.ulna"
                      :value="wrist.ulna"
                      @input="wrist.ulna = $event"
                    />
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
          <b-col class="d-sm-flex justify-content-sm-end p-0">
            <b-row>
              <b-col
                class="align-items-center d-flex flex-sm-column justify-content-between justify-content-sm-start my-3 my-sm-0"
              >
                <h4
                  :class="{ active: !isNull(wristScore), correct: showCorrect }"
                  class="total-header text-left text-sm-center"
                  v-html="assessment.totalWristScore"
                ></h4>
                <div
                  :class="{ active: !isNull(wristScore), correct: showCorrect }"
                  class="total-number"
                >
                  <span>{{
                    showCorrect === true ? correctValues.total : wristScore
                  }}</span>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      // "wrist" or "knee"
      type: String,
      required: true,
    },
    stepped: {
      // Prop for showing inputs sequentially
      type: Boolean,
      default: false,
    },
    steppedKnee: {
      // Prop for showing inputs sequentially
      type: Boolean,
      default: false,
    },
    disabled: {
      // Disabling inputs
      type: Boolean,
      default: false,
    },
    correctValues: {
      // Assigning correct values to inputs
      type: Object,
      default: () => ({
        femur: null,
        femurMulti: null,
        radius: null,
        tibia: null,
        tibiaMulti: null,
        ulna: null,
      }),
    },
    showCorrect: {
      // Toggle styling for correct inputs
      type: Boolean,
      default: false,
    },
    layout: {
      // Prop for deciding which layout to show
      // Accepts "tutorial", "practice", or "cases"
      type: String,
      required: true,
    },
  },
  data() {
    return {
      knee: {
        femur: null,
        femurMulti: null,
        tibia: null,
        tibiaMulti: null,
      },
      wrist: {
        radius: null,
        ulna: null,
      },
    };
  },
  computed: {
    assessment() {
      return this.$t("assessment");
    },
    kneeScore() {
      if (
        this.isNull(this.knee.femur) ||
        this.isNull(this.knee.femurMulti) ||
        this.isNull(this.knee.tibia) ||
        this.isNull(this.knee.tibiaMulti)
      ) {
        return null;
      }
      return (
        this.knee.tibia * this.knee.tibiaMulti +
        this.knee.femur * this.knee.femurMulti
      );
    },
    wristScore() {
      if (this.isNull(this.wrist.radius) || this.isNull(this.wrist.ulna)) {
        return null;
      }
      return this.wrist.radius + this.wrist.ulna;
    },
  },
  watch: {
    knee: {
      handler() {
        this.$emit("update:assessment-scored", {
          ...this.knee,
          score: this.kneeScore,
        });
      },
      deep: true,
    },
    wrist: {
      handler() {
        this.$emit("update:assessment-scored", {
          ...this.wrist,
          score: this.wristScore,
        });
      },
      deep: true,
    },
  },
  methods: {
    isNull(num) {
      return num === null;
    },
    reset() {
      // Reset each score-input component
      // Assumes all refs are inputRefs / score-input components
      Object.keys(this.$refs).forEach((ref) => {
        this.$refs[ref].resetSelection();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.assessment-calc {
  text-align: center;
  width: 100%;

  td {
    width: 20%;
  }
}

.assessment-title {
  color: $purple;
  font-size: rem(20px);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: rem(12px);
  @include media-breakpoint-down(xs) {
    font-size: rem(18px);
  }

  &.multiplier {
    text-transform: none;
    font-weight: normal;
    font-size: rem(16px);
  }

  &.tutorial {
    color: $dark-grey;
  }
}

.total-header {
  color: $light-grey;
  text-transform: uppercase;
  font-size: rem(14px);
  font-weight: 600;
  &.active {
    color: $purple;
  }
  &.correct {
    color: $light-green;
  }
}

.total-number {
  border: 1px solid $light-grey;
  width: rem(80px);
  height: rem(80px);
  border-radius: 50%;
  position: relative;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $white;
    font-weight: 600;
    font-size: rem(45px);
    @include media-breakpoint-down(xs) {
      top: 48%;
    }
  }
  &.active {
    background: $purple;
  }
  &.correct {
    background: $light-green;
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.show-correct {
  &.disabled {
    &.assessment-layout-tutorial,
    &.assessment-layout-practice {
      opacity: 1;
    }
  }

  ::v-deep {
    .btn-group-toggle:not(.correct) {
      .active {
        background-color: $dark-grey !important;
      }
    }
  }
}

.assessment-layout-practice,
.assessment-layout-cases {
  .total-header {
    @include media-breakpoint-down(xs) {
      font-size: rem(18px);
      margin-bottom: 0;
    }
  }
  .total-number {
    @include media-breakpoint-down(xs) {
      width: rem(115px);
      height: rem(115px);
      span {
        font-size: rem(70px);
      }
    }
  }
}
</style>
