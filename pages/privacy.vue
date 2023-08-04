<template>
  <div>
    <b-container fluid="xl" class="home page">
      <b-row class="pb-5 mt-3">
        <b-col sm="12" class="d-flex flex-column justify-content-between">
          <b-row>
            <b-col>
              <h1 class="section-header"><span v-html="privacyPolicy.pageTitle1" /><br /><span v-html="privacyPolicy.pageTitle2" class="h1smaller" /></h1>
              <h2 v-html="privacyPolicy.pageSubTitle"></h2>
              <p v-html="privacyPolicy.p1" />
              <p v-html="privacyPolicy.p2" />
              <p v-html="privacyPolicy.p3" />
              <h3 v-html="privacyPolicy.h3_1" />
              <p v-html="privacyPolicy.p4" />
              <p v-html="privacyPolicy.p5" />
              <p v-html="privacyPolicy.p6" />
              <p v-html="privacyPolicy.p7" />
              <ul>
                <li v-html="privacyPolicy.li_1" />
                <li v-html="privacyPolicy.li_2" />
              </ul>
              <p v-html="privacyPolicy.p8" />
              <h3 v-html="privacyPolicy.h3_2" />
              <p v-html="privacyPolicy.p9" />
              <ul>
                <li v-html="privacyPolicy.li_3" />
                <li v-html="privacyPolicy.li_4" />
                <li v-html="privacyPolicy.li_5" />
                <li v-html="privacyPolicy.li_6" />
                <li v-html="privacyPolicy.li_7" />
              </ul>
              <p v-html="privacyPolicy.p10" />
              <h3 v-html="privacyPolicy.h3_3" />
              <p v-html="privacyPolicy.p11" />
              <h3 v-html="privacyPolicy.h3_4" />
              <p v-html="privacyPolicy.p12" />
              <p v-html="privacyPolicy.p13" />
              <h3 v-html="privacyPolicy.h3_5" />
              <p v-html="privacyPolicy.p14" />
              <h3 v-html="privacyPolicy.h3_6" />
              <p v-html="privacyPolicy.p15" />
              <h3 v-html="privacyPolicy.h3_7" />
              <p v-html="privacyPolicy.p16" />
              <p v-html="privacyPolicy.p17" />
              <h3 v-html="privacyPolicy.h3_8" />
              <p v-html="privacyPolicy.p18" />
              <p v-html="privacyPolicy.p19" />
              <p><span v-html="privacyPolicy.p20_1" /><a href="mailto:kkcaprivacyoffice@kyowakirin.com">kkcaprivacyoffice@kyowakirin.com</a><span v-html="privacyPolicy.p20_2" /></p>
              <h3 v-html="privacyPolicy.h3_9" />
              <p v-html="privacyPolicy.p21" />
              <p v-html="privacyPolicy.p22" class="site-footer" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "PrivacyPolicy",

  computed: {
    privacyPolicy() {
      return this.$t("privacyPolicy");
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2.5rem;
  color: $purple;
  line-height: 1;
  span.h1smaller {
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

h3 {
  font-size: rem(16px);
  font-weight: 600;

  color: $purple;
  @include media-breakpoint-down(xs) {
    font-size: rem(12px);
  }
}

ul {
  width: 90%;
  margin: 0;
  padding-left: 20px;
  li {
    margin-bottom: 0.5rem;
  }
}

.site-footer {
  font-size: rem(12px);
}
</style>
