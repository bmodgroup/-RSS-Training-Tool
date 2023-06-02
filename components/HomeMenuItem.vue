<template>
  <router-link :to="to">
    <b-card class="mb-2">
      <b-row class="justify-content-between flex-nowrap">
        <b-col sm="10" class="pr-0 col-10">
          <b-card-title class="mb-0">
            <slot name="title"></slot>
          </b-card-title>
          <b-card-text>
            <slot name="text"></slot>
          </b-card-text>
        </b-col>
        <b-col sm="2">
          <img src="~/assets/icons/arrow_purple.svg" />
        </b-col>
      </b-row>
    </b-card>
  </router-link>
</template>

<script>
export default {
  name: 'HomeMenuItem',
  props: {
    to: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
a {
  color: $purple;
  &:hover {
    text-decoration: none;
    color: $purple;
  }
}
.card-body {
  border: 1px solid $dark-grey;
  border-radius: 4px;
}
.card-title {
  font-size: rem(24px);
  span {
    color: $green;
    font-weight: 700;
  }
}

.card-text {
  font-size: rem(14px);
  width: 90%;
  span {
    font-weight: 700;
  }
}
</style>
