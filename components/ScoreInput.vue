<template>
  <b-form-group :id="`scores-${uuid}`" :disabled="disabled" class="score-input">
    <div
      class="d-flex align-items-center"
      :class="[
        category === 'multiplier'
          ? ['flex-column', 'multiplier-container', `${currentPage}`]
          : '',
      ]"
    >
      <label
        class="group-label"
        :class="{ 'group-label-multiplier': category === 'multiplier' }"
        >{{ categories[category].label }}</label
      >
      <div class="buttons-container d-flex" :class="category">
        <b-form-radio
          v-for="option in categories[category].options"
          :key="option.value"
          v-model="selected"
          :value="option.value"
          name="score-btn"
          button
          button-variant="outline-primary"
          size="large"
          class="mr-sm-2 mr-2"
          :class="
            option.value === correctValue && showCorrect
              ? 'correct'
              : `${currentPage}-${category}`
          "
        >
          <span class="option-text">{{ option.text }}</span>
        </b-form-radio>
      </div>
    </div>
  </b-form-group>
</template>

<script>
import uuid from '@/mixins/uuid.js'
export default {
  mixins: [uuid],
  props: {
    category: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showCorrect: {
      type: Boolean,
      default: false,
    },
    correctValue: {
      type: Number,
      default: null,
    },
    /*
      Use this when you want to select a radio on initial render
      or when you want to programmatically select a radio from outside
      of this component.
    */
    value: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      selected: this.value,
      currentPage: this.$route.name,
      categories: {
        multiplier: {
          label: this.$t('scoreInput').multiplier,
          options: [
            { text: this.$t('scoreInput').point5, value: 0.5 },
            { text: '1', value: 1 },
          ],
        },
        femur: {
          label: this.$t('scoreInput').femur,
          options: [
            { text: '0', value: 0 },
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
          ],
        },
        radius: {
          label: this.$t('scoreInput').radius,
          options: [
            { text: '0', value: 0 },
            { text: this.$t('scoreInput').point5, value: 0.5 },
            { text: '1', value: 1 },
            { text: this.$t('scoreInput').onePoint5, value: 1.5 },
            { text: '2', value: 2 },
          ],
        },
        tibia: {
          label: this.$t('scoreInput').tibia,
          options: [
            { text: '0', value: 0 },
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
          ],
        },
        ulna: {
          label: this.$t('scoreInput').ulna,
          options: [
            { text: '0', value: 0 },
            { text: this.$t('scoreInput').point5, value: 0.5 },
            { text: '1', value: 1 },
            { text: this.$t('scoreInput').onePoint5, value: 1.5 },
            { text: '2', value: 2 },
          ],
        },
      },
    }
  },
  computed: {
    scoreInput() {
      return this.$t('scoreInput')
    },
  },
  watch: {
    value(newVal, oldVal) {
      // this check is mandatory to prevent endless cycle
      if (newVal !== oldVal) this.selected = newVal
    },
    selected(newVal, oldVal) {
      // this check is mandatory to prevent endless cycle
      if (newVal !== oldVal) this.$emit('input', newVal)
    },
  },

  methods: {
    resetSelection() {
      this.selected = null
    },
  },
}
</script>

<style lang="scss">
.score-input {
  position: relative;
  &:disabled {
    pointer-events: none;
    // opacity: 0.6;
  }

  .correct {
    label {
      background-color: $light-green !important;
      border-color: $light-green !important;
      color: white !important;
    }
  }
}

.btn-outline-primary {
  color: $purple;
  border-color: $dark-grey;
  font-weight: 600;
  width: rem(36px);
  height: rem(36px);
  border-radius: 50%;
  text-align: center;
  background: $white;
  &:not(:disabled):not(.disabled):active,
  &:not(:disabled):not(.disabled).active {
    background-color: $purple;
    color: $white;
    border-color: $dark-grey;
  }
  &:hover {
    color: $purple;
    border-color: $dark-grey;
    background-color: $white;
  }
  &:not(:disabled):not(.disabled).active:focus,
  &:focus,
  &.focus {
    box-shadow: none;
  }
}

.form-group {
  margin-bottom: rem(20px);
}

.group-label {
  color: $darker-grey;
  min-width: rem(56px);
  margin-bottom: 0;
}

.multiplier-container {
  position: relative;
  align-items: center;
  &:before {
    content: url('~assets/icons/multiplier.svg');
    display: block;
    position: absolute;
    left: rem(-18px);
    top: rem(8px);
  }

  &.tutorial {
    &:before {
      content: url('~assets/icons/multiplier.svg');
      display: block;
      position: absolute;
      left: rem(-36px);
      top: rem(8px);
    }
  }

  &.practice {
    &:before {
      content: url('~assets/icons/multiplier.svg');
      display: block;
      position: absolute;
      left: rem(-13px);
      top: rem(8px);
    }
  }

  &.cases {
    &:before {
      content: url('~assets/icons/multiplier.svg');
      display: block;
      position: absolute;
      left: rem(-20px);
      top: rem(8px);
    }
  }

  &.calculator {
    &:before {
      content: url('~assets/icons/multiplier.svg');
      display: block;
      position: absolute;
      left: rem(-27px);
      top: rem(8px);

      @include media-breakpoint-only(xs) {
        left: rem(20px);
      }
    }
  }

  @include media-breakpoint-only(xs) {
    margin-left: calc(3.5rem - 10px);

    .buttons-container.multiplier {
      width: 40%;
    }
  }
}

.group-label-multiplier {
  font-size: rem(12px);
  position: absolute;
  top: rem(-18px);
  left: rem(20px);
  width: auto;
  @include media-breakpoint-only(xs) {
    left: rem(90px) !important;
  }
}

label {
  position: relative;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.calculator-ulna,
.calculator-radius,
.calculator-femur,
.calculator-tibia,
.calculator-multiplier {
  margin-right: 0.25rem;
  &:last-child {
    margin-right: 0;
  }
}

.calculator-femur,
.calculator-tibia,
.calculator-multiplier {
  @include media-breakpoint-only(xs) {
    margin-right: 20px;
  }
}
</style>
