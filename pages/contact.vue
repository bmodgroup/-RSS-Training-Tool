<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <b-container fluid="xl" class="home page">
      <b-row class="pb-5 mt-3">
        <b-col sm="12" class="d-flex flex-column justify-content-between">
          <b-row>
            <b-col>
              <h1 class="section-header">Contact Us</h1>
              <h2>How to Contact Us:</h2>
              <p>
                Kyowa Kirin Canada, Inc.<br />
                Attention: Legal Department,<br />
                550 Burrard Street, Suite 2300, Bentall 5,<br />
                Vancouver, BC&nbsp;&nbsp;V6C 2B5
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2.5rem;
  color: $purple;
  line-height: 1;
  span {
    font-size: 1rem;
  }
  @include media-breakpoint-down(xs) {
    font-size: rem(42px);
  }
}

h2 {
  font-size: rem(18px);
  font-weight: 600;
  color: $purple;
  @include media-breakpoint-down(xs) {
    width: 100% !important;
    font-size: rem(14px);
  }
}
</style>
