<template>
  <div class="image-selection">
    <b-button-group>
      <b-button
        v-for="image in renderedImages"
        :key="image.id"
        :disabled="disabled"
        :class="{ active: selected && selected.id === image.id }"
        class="btn-image"
        @click="selectImage(image)"
      >
        <b-img
          :blank="!image.src"
          blank-color="#e5e5e5"
          :src="require(`@/assets/images/${image.src}`)"
          :alt="image.alt"
          fluid
        />
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    images: {
      type: Array,
      required: true,
    },
    max: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      selected: null,
    }
  },
  computed: {
    renderedImages() {
      return this.images.slice(0, this.max)
    },
  },
  watch: {
    selected() {
      this.$emit('image-selection:selected', this.selected)
    },
  },
  methods: {
    selectImage(image) {
      this.selected = image
    },
  },
}
</script>

<style lang="scss">
.image-selection {
  .btn-image {
    width: 50%;
    padding: 0;
    border: none;
    border-radius: 0;
    background: none;
  }

  .active {
    &:disabled {
      opacity: 1;
    }

    img {
      border: 5px solid $light-green !important;
    }
  }

  .btn-group {
    button:last-of-type {
      margin-left: rem(13px);
    }
  }
}
</style>
