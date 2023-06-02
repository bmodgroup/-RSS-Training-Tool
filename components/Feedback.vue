<template>
  <b-card class="feedback">
    <div v-show="showFeedback">
      <slot name="feedback-show"></slot>
    </div>
    <div v-show="!showFeedback">
      <slot name="feedback-hidden">
        <!-- Default content when feedback is hidden -->
        <div :id="tooltipId" tabindex="0" class="feedback-btn-container">
          <b-button
            v-show="!showFeedback"
            class="btn-feedback"
            variant="primary"
            :disabled="disableButton"
            @click="$emit('update:showFeedback', true)"
            >{{ feedback.buttonLabel }}</b-button
          >
        </div>

        <b-tooltip
          :target="tooltipId"
          triggers="hover focus"
          :disabled="!disableButton"
        >
          {{ feedback.tooltipText }}
        </b-tooltip>
      </slot>
    </div>
  </b-card>
</template>

<script>
import uuid from '@/mixins/uuid.js'

export default {
  mixins: [uuid],
  props: {
    buttonLabel: {
      type: String,
      default: 'Check Answer',
    },
    disableButton: {
      type: Boolean,
      required: true,
    },
    showFeedback: {
      type: Boolean,
      required: true,
    },
    tooltipText: {
      type: String,
      default: 'Please select an image',
    },
  },
  computed: {
    feedback() {
      return this.$t('feedback')
    },
    tooltipId() {
      // Tooltips won't trigger properly if they share the same id.
      // A unique id needs to be generated for each component instance.
      return `btn-show-feedback-${this.uuid}`
    },
  },
}
</script>

<style lang="scss">
.feedback {
  padding: 0;
  background-color: transparent;
  border: 0;

  .card-body {
    border: 0;
    padding: 0;

    .btn-primary {
      background-color: $white;
      border: 1px solid $green;
      color: $green;
      text-transform: uppercase;
      font-size: rem(16px);
      padding: 2px 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      margin: 0 auto;
    }

    .btn-primary.disabled,
    .btn-primary:disabled {
      background-color: transparent;
      border: 1px solid $dark-grey;
      color: $dark-grey;
    }

    p {
      font-size: rem(14px);
      line-height: rem(18px);
      margin: 0;
    }
  }
  .feedback-btn-container {
    display: inline-block;
  }
}

.tooltip {
  opacity: 1 !important;
}

.tooltip-inner {
  background-color: $navy;
  color: $white;
  font-size: rem(14px);
  line-height: rem(16px);
  z-index: 100;
  padding: 0.75rem;
  text-align: center;
  min-width: 210px;
}

.arrow::before {
  border-bottom-color: $navy;
}
</style>
