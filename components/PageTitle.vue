<template>
  <div>
    <h2 class="page-title mt-3 mb-4">
      <slot name="title"></slot>
    </h2>
  </div>
</template>

<style lang="scss">
.page-title {
  font-size: rem(16px);
  color: $purple;
  padding: rem(10px) 0;
  border-bottom: 1px solid $light-grey;
  @media (max-width: 415px) {
    font-size: rem(12px);
  }
  span {
    color: $green;
    font-weight: 600;
  }
}
</style>
