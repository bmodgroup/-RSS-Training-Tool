<template>
  <b-modal
    :id="id"
    :title="title"
    :hide-footer="hideFooter"
    :size="size"
    scrollable
    centered
  >
    <template v-if="!title" #modal-title>
      <slot name="modal-title"></slot>
    </template>
    <slot></slot>
    <template #modal-footer>
      <slot name="modal-footer"></slot>
    </template>
  </b-modal>
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
      default: null,
    },
    size: {
      type: String,
      default: 'lg',
    },
    hideFooter: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
