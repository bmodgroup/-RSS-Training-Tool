<template>
  <modal
    :id="id || `scoring-guide-${scoringGuide}`"
    :title="scoringGuides.header"
  >
    <b-container class="scoring-guide">
      <b-row class="row-gradient">
        <template v-if="scoringGuide === 'knee' && image">
          <b-col md="4" class="knee-with-image p-0 p-sm-2">
            <img
              v-if="image"
              :src="require(`~/assets/images/${image.src}`)"
              :alt="image.alt"
              class="img-fluid"
            />
          </b-col>
          <b-col md="8" class="p-0 p-sm-2">
            <h2 class="mt-2 mt-sm-0" v-html="scoringGuides.knee.header"></h2>
            <img
              src="~/assets/images/knee-chart.svg"
              alt=""
              class="img-fluid d-none d-sm-block"
            />
            <div class="d-flex images-container px-0 flex-wrap flex-sm-nowrap">
              <b-col class="img-container col-6 col-sm-3">
                <img
                  src="~/assets/images/knee-chart-01.svg"
                  alt=""
                  class="d-block d-sm-none img-knee"
                />
                <h4>{{ scoringGuides.knee.imgText.img0.header }}</h4>
                <p>{{ scoringGuides.knee.imgText.img0.text1 }}</p>
              </b-col>
              <b-col class="img-container col-6 col-sm-3">
                <img
                  src="~/assets/images/knee-chart-02.svg"
                  alt=""
                  class="d-block d-sm-none img-knee"
                />
                <h4>{{ scoringGuides.knee.imgText.img1.header }}</h4>
                <p>{{ scoringGuides.knee.imgText.img1.text1 }}</p>
              </b-col>
              <b-col class="img-container col-6 col-sm-3">
                <img
                  src="~/assets/images/knee-chart-03.svg"
                  alt=""
                  class="d-block d-sm-none img-knee"
                />
                <h4>{{ scoringGuides.knee.imgText.img2.header }}</h4>
                <p>{{ scoringGuides.knee.imgText.img2.text1 }}</p>
              </b-col>
              <b-col class="img-container col-6 col-sm-3">
                <img
                  src="~/assets/images/knee-chart-04.svg"
                  alt=""
                  class="d-block d-sm-none img-knee"
                />
                <h4>{{ scoringGuides.knee.imgText.img3.header }}</h4>
                <p>{{ scoringGuides.knee.imgText.img3.text1 }}</p>
              </b-col>
            </div>
            <h2>{{ scoringGuides.knee.table.header }}</h2>
            <table>
              <tbody>
                <tr>
                  <th>{{ scoringGuides.knee.table.subheader1 }}</th>
                  <td>{{ scoringGuides.knee.table.text1 }}</td>
                </tr>
                <tr>
                  <th>{{ scoringGuides.knee.table.subheader2 }}</th>
                  <td>{{ scoringGuides.knee.table.text2 }}</td>
                </tr>
              </tbody>
            </table>
            <p class="note" v-html="scoringGuides.knee.table.footnote"></p>
          </b-col>
        </template>
        <template v-if="scoringGuide === 'wrist' && image">
          <b-col md="4" class="wrist-with-image p-0 p-sm-2">
            <client-only
              ><image-zoom
                :hover-message="feedback.hoverToZoom"
                :touch-message="feedback.tapToZoom"
                :key="image.src"
                :regular="require(`@/assets/images/${image.src}`)"
                :alt="image.alt"
                img-class="img-fluid"
                class="img-zoomer mb-3"
              ></image-zoom
            ></client-only>
          </b-col>
          <b-col md="8" class="p-0 p-sm-2">
            <h2 class="mt-0" v-html="scoringGuides.wrist.header"></h2>
            <img
              src="~/assets/images/wrist-chart.svg"
              alt=""
              class="img-fluid d-none d-sm-block"
            />
            <div class="d-flex images-container px-0 flex-wrap flex-sm-nowrap">
              <b-col class="img-container col-4 col-sm-2">
                <img
                  src="~/assets/images/wrist-chart-01.svg"
                  alt=""
                  class="d-block d-sm-none img-wrist"
                />
                <h4>{{ scoringGuides.wrist.imgText.img0.header }}</h4>
                <p>{{ scoringGuides.wrist.imgText.img0.text1 }}</p>
              </b-col>
              <b-col class="img-container col-4 col-sm-2 col-half-offset">
                <img
                  src="~/assets/images/wrist-chart-02.svg"
                  alt=""
                  class="d-block d-sm-none img-wrist"
                />
                <h4>{{ scoringGuides.wrist.imgText.img05.header }}</h4>
                <p>{{ scoringGuides.wrist.imgText.img05.text1 }}</p>
              </b-col>
              <b-col class="img-container col-4 col-sm-2 col-half-offset">
                <img
                  src="~/assets/images/wrist-chart-03.svg"
                  alt=""
                  class="d-block d-sm-none img-wrist"
                />
                <h4>{{ scoringGuides.wrist.imgText.img1.header }}</h4>
                <p>{{ scoringGuides.wrist.imgText.img1.text1 }}</p>
              </b-col>
              <b-col class="img-container col-4 col-sm-2 col-half-offset">
                <img
                  src="~/assets/images/wrist-chart-04.svg"
                  alt=""
                  class="d-block d-sm-none img-wrist"
                />
                <h4>{{ scoringGuides.wrist.imgText.img15.header }}</h4>
                <p>{{ scoringGuides.wrist.imgText.img15.text1 }}</p>
              </b-col>
              <b-col class="img-container col-4 col-sm-2 col-half-offset">
                <img
                  src="~/assets/images/wrist-chart-05.svg"
                  alt=""
                  class="d-block d-sm-none img-wrist"
                />
                <h4>{{ scoringGuides.wrist.imgText.img2.header }}</h4>
                <p>{{ scoringGuides.wrist.imgText.img2.text1 }}</p>
              </b-col>
            </div>
            <p class="note">
              {{ scoringGuides.wrist.imgText.footnote }}
            </p>
          </b-col>
        </template>
        <template v-if="scoringGuide === 'wrist' && !image">
          <b-row class="wrist-no-image">
            <b-col md="12">
              <h2 class="mt-0" v-html="scoringGuides.wrist.header"></h2>
              <div class="img-container">
                <img
                  src="~/assets/images/wrist-chart.svg"
                  alt=""
                  class="img-fluid d-none d-sm-block"
                />
              </div>
              <div
                class="d-flex images-container px-0 flex-wrap flex-sm-nowrap"
              >
                <b-col class="img-container col-4 col-sm-2">
                  <img
                    src="~/assets/images/wrist-chart-01.svg"
                    alt=""
                    class="d-block d-sm-none img-wrist"
                  />
                  <h4>{{ scoringGuides.wrist.imgText.img0.header }}</h4>
                  <p>{{ scoringGuides.wrist.imgText.img0.text1 }}</p>
                </b-col>
                <b-col class="img-container col-4 col-sm-2 col-half-offset">
                  <img
                    src="~/assets/images/wrist-chart-02.svg"
                    alt=""
                    class="d-block d-sm-none img-wrist"
                  />
                  <h4>{{ scoringGuides.wrist.imgText.img05.header }}</h4>
                  <p>{{ scoringGuides.wrist.imgText.img05.text1 }}</p>
                </b-col>
                <b-col class="img-container col-4 col-sm-2 col-half-offset">
                  <img
                    src="~/assets/images/wrist-chart-03.svg"
                    alt=""
                    class="d-block d-sm-none img-wrist"
                  />
                  <h4>{{ scoringGuides.wrist.imgText.img1.header }}</h4>
                  <p>{{ scoringGuides.wrist.imgText.img1.text1 }}</p>
                </b-col>
                <b-col class="img-container col-4 col-sm-2 col-half-offset">
                  <img
                    src="~/assets/images/wrist-chart-04.svg"
                    alt=""
                    class="d-block d-sm-none img-wrist"
                  />
                  <h4>{{ scoringGuides.wrist.imgText.img15.header }}</h4>
                  <p>{{ scoringGuides.wrist.imgText.img15.text1 }}</p>
                </b-col>
                <b-col class="img-container col-4 col-sm-2 col-half-offset">
                  <img
                    src="~/assets/images/wrist-chart-05.svg"
                    alt=""
                    class="d-block d-sm-none img-wrist"
                  />
                  <h4>{{ scoringGuides.wrist.imgText.img2.header }}</h4>
                  <p>{{ scoringGuides.wrist.imgText.img2.text1 }}</p>
                </b-col>
              </div>
            </b-col>
          </b-row>
        </template>
        <template v-if="scoringGuide === 'knee' && !image">
          <b-row class="knee-no-image">
            <b-col md="8">
              <h2 class="mt-0" v-html="scoringGuides.knee.header"></h2>
              <div class="img-container">
                <img
                  src="~/assets/images/knee-chart.svg"
                  alt=""
                  class="img-fluid d-none d-sm-block"
                />
              </div>
              <div
                class="d-flex images-container px-0 flex-wrap flex-sm-nowrap"
              >
                <b-col class="img-container col-6 col-sm-3">
                  <img
                    src="~/assets/images/knee-chart-01.svg"
                    alt=""
                    class="d-block d-sm-none img-knee"
                  />
                  <h4>{{ scoringGuides.knee.imgText.img0.header }}</h4>
                  <p>{{ scoringGuides.knee.imgText.img0.text1 }}</p>
                </b-col>
                <b-col class="img-container col-6 col-sm-3">
                  <img
                    src="~/assets/images/knee-chart-02.svg"
                    alt=""
                    class="d-block d-sm-none img-knee"
                  />
                  <h4>{{ scoringGuides.knee.imgText.img1.header }}</h4>
                  <p>{{ scoringGuides.knee.imgText.img1.text1 }}</p>
                </b-col>
                <b-col class="img-container col-6 col-sm-3">
                  <img
                    src="~/assets/images/knee-chart-03.svg"
                    alt=""
                    class="d-block d-sm-none img-knee"
                  />
                  <h4>{{ scoringGuides.knee.imgText.img2.header }}</h4>
                  <p>{{ scoringGuides.knee.imgText.img2.text1 }}</p>
                </b-col>
                <b-col class="img-container col-6 col-sm-3">
                  <img
                    src="~/assets/images/knee-chart-04.svg"
                    alt=""
                    class="d-block d-sm-none img-knee"
                  />
                  <h4>{{ scoringGuides.knee.imgText.img3.header }}</h4>
                  <p>{{ scoringGuides.knee.imgText.img3.text1 }}</p>
                </b-col>
              </div>
            </b-col>
            <b-col md="4">
              <h2 class="mt-0">{{ scoringGuides.knee.table.header }}</h2>
              <table>
                <tbody>
                  <tr>
                    <th>{{ scoringGuides.knee.table.subheader1 }}</th>
                    <td>{{ scoringGuides.knee.table.text1 }}</td>
                  </tr>
                  <tr>
                    <th>{{ scoringGuides.knee.table.subheader2 }}</th>
                    <td>{{ scoringGuides.knee.table.text2 }}</td>
                  </tr>
                </tbody>
              </table>
              <p class="note" v-html="scoringGuides.knee.table.footnote"></p>
            </b-col>
          </b-row>
        </template>
      </b-row>
    </b-container>
  </modal>
</template>

<script>
export default {
  props: {
    // only accepts 'wrist' or 'knee'
    scoringGuide: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      default: null,
    },
    image: {
      type: Object,
      default: null,
    },
  },
  computed: {
    scoringGuides() {
      return this.$t('scoringGuides')
    },
    feedback() {
      return this.$t('feedback')
    },
  },
}
</script>

<style lang="scss" scoped>
.scoring-guide {
  &.container {
    padding-right: 0;
    padding-left: 0;
  }

  .row-gradient {
    padding: 20px 0;
    border-top-width: 4px;
    border-bottom-width: 4px;
    border-left-width: 0;
    border-right-width: 0;
    border-style: solid;
    border-image: linear-gradient(90deg, $purple, $light-green) 1;
  }

  h2 {
    font-size: rem(20px);
    line-height: rem(22px);
    text-transform: uppercase;
    font-weight: bold;
    color: $purple;
    margin: 1rem 0;
  }
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 6px;
    th {
      color: $white;
      background-color: $purple;
      width: 47px;
      height: 33px;
      font-size: rem(16px);
      text-align: center;
      border: 1px solid $purple;
    }
    td {
      padding: 5px 10px;
      border: 1px solid $purple;
      font-size: rem(12px);
      line-height: rem(12px);
      color: $dark-grey;
    }
  }

  .note {
    font-size: rem(20px);
    line-height: rem(24px);
    color: $dark-grey;
    margin-top: 0.5rem;
    font-weight: 700;
  }
}

.wrist-no-image,
.knee-no-image {
  .row {
    padding: 20px 0;
    border-top-width: 4px;
    border-bottom-width: 4px;
    border-left-width: 0;
    border-right-width: 0;
    border-style: solid;
    border-top: 4px solid $purple;
    border-bottom: 4px solid $purple;
    // border-image: linear-gradient(90deg, $navy, $green) 1;
  }

  h2 {
    font-size: rem(20px);
    line-height: rem(22px);
    text-transform: uppercase;
    font-weight: bold;
    color: $purple;
    margin: 1rem 0;
  }
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 6px;
    th {
      color: $white;
      background-color: $purple;
      width: 47px;
      height: 33px;
      font-size: rem(16px);
      text-align: center;
      border: 1px solid $purple;
    }
    td {
      padding: 5px 10px;
      // border: 1px solid $purple;
      border: none;
      font-size: rem(12px);
      line-height: rem(12px);
      color: $dark-grey;
    }
  }
  .img-container {
    // display: flex;
    // align-items: center;
    h3 {
      color: $purple;
      font-size: 20px;
      margin-right: 10px;
    }
  }
  .note {
    font-size: rem(20px);
    line-height: rem(24px);
    font-weight: 700;
    color: $dark-grey;
    margin-top: 0.5rem;
  }
}

.images-container {
  padding: 0 15px;
  .img-container {
    padding: 0 5px;
    width: 20%;
    .img-wrist {
      height: 100px;
    }
    .img-knee {
      height: 205px;
    }
    h3,
    h4 {
      color: $purple;
      font-size: 14px;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 5px;
    }
    h4 {
      font-size: rem(26px);
    }
    p {
      font-size: rem(12px);
      line-height: rem(15px);
    }
  }
}
</style>
