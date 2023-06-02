/* eslint-disable vue/no-v-html */
<template>
  <span
    @click="showModal()"
    :id="`popover-target-${id}`"
    class="popover-target with-glossary"
  >
    <!-- Popover content -->
    <b-popover
      :target="`popover-target-${id}`"
      triggers="hover"
      placement="bottom"
    >
      <template #title><span v-html="title"></span></template>
      <div v-html="content"></div>
    </b-popover>
    <!-- Popover target label -->
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  methods: {
    showModal() {
      // Hide glossary on touch screens
      if (!navigator.maxTouchPoints > 0) {
        this.$bvModal.show('refs')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.popover-target {
  color: var(--primary);
  text-decoration: underline;
  white-space: nowrap;
  cursor: pointer;
}

.popover {
  background-color: $white;

  ::v-deep .popover-header {
    background-color: $white;
    border-bottom: transparent;
    font-weight: 700;
    padding: 0.5rem 0.75rem 0;
    margin-bottom: 0;
    span {
      color: $purple;
      padding: 0;
    }
  }
}
</style>
