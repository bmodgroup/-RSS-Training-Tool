<template>
  <footer class="site-footer">
    <b-container fluid="xl">
      <b-row class="site-footer-row">
        <b-col sm="8" class="footer-item">
          <span v-html="footer.privacy1"></span>
          <router-link to="privacy">
            <span v-html="footer.privacy2"></span></router-link
          >.<br />
          <span v-html="footer.copyright"></span>
          <br />
          <span v-html="footer.code"></span>
        </b-col>
        <b-col class="footer-item d-flex col-12" sm="2">
          <b-button v-b-modal.refs class="btn-refs"
            >{{ footer.refsGlossary }}
          </b-button>
        </b-col>
        <b-col class="footer-item d-flex col-12" sm="2">
          <router-link class="link contact" to="contact">{{
            footer.contact
          }}</router-link>
        </b-col>
      </b-row>

      <modal id="refs" :title="footer.refsGlossary">
        <b-container>
          <b-row class="section">
            <b-row class="d-flex flex-column" md="6">
              <h2 v-html="footer.glossary"></h2>
              <b-row class="d-flex images-container">
                <b-col class="img-container">
                  <img src="~/assets/images/glossary-margin.png" alt="" />
                  <h3 v-html="popOver.metaphysealMargin.title"></h3>
                  <p v-html="popOver.metaphysealMargin.content"></p>
                </b-col>
                <b-col class="img-container">
                  <img src="~/assets/images/glossary-cupping.png" alt="" />
                  <h3 v-html="popOver.metaphysealCupping.title"></h3>
                  <p v-html="popOver.metaphysealCupping.content"></p>
                </b-col>
                <b-col class="img-container">
                  <img src="~/assets/images/glossary-fraying.png" alt="" />
                  <h3 v-html="popOver.metaphysealFraying.title"></h3>
                  <p v-html="popOver.metaphysealFraying.content"></p>
                </b-col>
                <b-col class="img-container">
                  <img src="~/assets/images/glossary-lucency.png" alt="" />
                  <h3 v-html="popOver.lucency.title"></h3>
                  <p v-html="popOver.lucency.content"></p>
                </b-col>
                <b-col class="img-container">
                  <img src="~/assets/images/glossary-plate.png" alt="" />
                  <h3 v-html="popOver.widening.title"></h3>
                  <p v-html="popOver.widening.content"></p>
                </b-col>
              </b-row>
            </b-row>
            <b-row class="refs">
              <h2 v-html="footer.references"></h2>
              <ol>
                <li>
                  Thacher TD, Pettifor JM, Tebben PJ, et al. Rickets severity
                  predicts clinical outcomes in children with X-linked
                  hypophosphatemia: Utility of the radiographic Rickets Severity
                  Score. Bone. 2019;122(February):76-81.
                  doi:10.1016/j.bone.2019.02.010
                </li>
                <li>
                  <a
                    href="pdfs/Thacher_J_Tropical_Pediatrics_2000.pdf"
                    target="_blank"
                    >Thacher, TD, Fischer PR, Pettifor JM, et al. Radiographic
                    scoring method for the assessment of the severity of
                    nutritional rickets. Journal of Tropical Pediatrics. 2000;
                    46(3):132-139. doi:10.1093/tropej/46.3.132</a
                  >
                </li>
                <li>
                  National Center for Biotechnology Information. MedGen.
                  Metaphyseal cupping. Accessed March 16, 2021.
                  <a
                    href="https://www.ncbi.nlm.nih.gov/medgen/323062"
                    target="_blank"
                    >https://www.ncbi.nlm.nih.gov/medgen/323062</a
                  >
                </li>
                <li>
                  National Center for Biotechnology Information. MedGen.
                  Metaphyseal irregularity. Accessed March 16, 2021.
                  <a
                    href="https://www.ncbi.nlm.nih.gov/medgen/?term=metaphyseal+fraying"
                    target="_blank"
                    >https://www.ncbi.nlm.nih.gov/medgen/?term=metaphyseal+fraying</a
                  >
                </li>
                <li>
                  Department of Radiology St. Vincent’s University Hospital.
                  Radiological descriptive terms. Accessed March 31, 2021.
                  <a
                    href="http://www.svuhradiology.ie/diagnostic-imaging/radiological-descriptive-terms/"
                    target="_blank"
                    >http://www.svuhradiology.ie/diagnostic-imaging/radiological-descriptive-terms/</a
                  >
                </li>
              </ol>
            </b-row>
          </b-row>
        </b-container>
      </modal>
    </b-container>
  </footer>
</template>
<script>
export default {
  computed: {
    footer() {
      return this.$t("footer");
    },
    popOver() {
      return this.$t("popOver");
    },
  },
};
</script>
<style lang="scss" scoped>
.site-footer {
  font-size: rem(12px);
  background: $white;
  display: flex;
  align-items: center;
  @include media-breakpoint-down(xs) {
    padding: 25px 0;
    margin-top: 60px;
  }
  .site-footer-row {
    .footer-item {
      @include media-breakpoint-down(xs) {
        justify-content: center;
        text-align: center;
      }
    }
  }
}

.btn-refs {
  font-size: rem(12px);
  background: none;
  border: none;
  color: #212529;
  padding: 0;
  display: flex;
  align-items: center;
  text-decoration: underline;
}

.link {
  color: #212529;
  align-items: center;
  text-decoration: underline;

  &.contact {
    display: flex;
  }
}

// modal styles
#refs {
  .section {
    padding: 20px;
    border-top-width: 4px;
    border-bottom-width: 4px;
    border-left-width: 0;
    border-right-width: 0;
    border-style: solid;
    border-top: 4px solid $purple;
    border-bottom: 4px solid $purple;
    // border-image: linear-gradient(90deg, $navy, $green) 1;
  }

  ol {
    padding-left: rem(18px);
    li {
      font-size: rem(12px);
    }
  }

  h2 {
    font-size: rem(20px);
    line-height: rem(22px);
    text-transform: uppercase;
    font-weight: bold;
    color: $purple;
    margin: 1rem 0;
    margin-top: 0;
  }

  .refs {
    border: none;
  }

  .images-container {
    padding: 0 15px;
  }

  .img-container {
    padding: 0 5px;
    width: 20%;
    @include media-breakpoint-down(xs) {
      min-width: 50%;
      max-width: 50%;
    }
    h3 {
      color: $purple;
      font-size: 14px;
      font-weight: 700;
      margin-top: 10px;
      margin-bottom: 5px;
    }
    p {
      font-size: rem(12px);
      line-height: rem(15px);
    }
  }

  .note {
    font-size: rem(12px);
    line-height: rem(12px);
    color: $dark-grey;
    margin-top: 0.5rem;
  }
  a {
    color: #212529;
    text-decoration: underline;
  }
}
</style>
