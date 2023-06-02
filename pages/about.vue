<template>
  <b-container fluid="xl" class="page">
    <PageTitle
      ><template #title><div v-html="about.title"></div></template
    ></PageTitle>
    <b-tabs content-class="my-4">
      <b-tab :title="about.introduction.tabTitle" active>
        <b-col>
          <b-row>
            <b-col sm="12" class="px-0">
              <h2
                class="section-header"
                v-html="about.introduction.rickets.header"
              ></h2>
              <p>
                <span v-html="about.introduction.rickets.paragraph1"></span>
                <popover
                  id="metaphyseal-fraying-1"
                  :title="popOver.metaphysealFraying.title"
                  :content="popOver.metaphysealFraying.content"
                  >{{ popOver.metaphysealFraying.text }}</popover
                >,
                <popover
                  id="metaphyseal-cupping-1"
                  :title="popOver.metaphysealCupping.title"
                  :content="popOver.metaphysealCupping.content"
                  >{{ popOver.metaphysealCupping.text }}</popover
                ><span v-html="about.introduction.rickets.paragraph2"></span>
              </p>

              <div class="img-container intro">
                <img
                  v-show="$i18n.locale === 'en'"
                  src="~/assets/images/about_intro.svg"
                  alt=""
                />
                <img
                  v-show="$i18n.locale === 'fr'"
                  src="~/assets/images/about_intro-fr.svg"
                  alt=""
                />
              </div>
              <div
                class="figure-caption px-0 border-top"
                v-html="about.introduction.rickets.figcaption"
              ></div>

              <div class="tip mt-3">
                <p>
                  <strong v-html="about.introduction.rickets.tip"></strong>
                  <span v-html="about.introduction.rickets.tipText"></span>
                </p>
              </div>
              <h2
                class="section-header"
                v-html="about.introduction.hypophosphatemicRickets.header"
              ></h2>

              <p
                v-html="about.introduction.hypophosphatemicRickets.paragraph1"
              ></p>

              <p
                v-html="about.introduction.hypophosphatemicRickets.paragraph2"
              ></p>
              <p
                v-html="about.introduction.hypophosphatemicRickets.paragraph3"
              ></p>
            </b-col>
          </b-row>
        </b-col>
      </b-tab>

      <b-tab :title="about.usingTheRss.tabTitle">
        <b-col>
          <b-row>
            <b-col sm="12" class="px-0">
              <h2 class="section-header" v-html="about.usingTheRss.header"></h2>
              <p>
                <span v-html="about.usingTheRss.paragraph1p1"></span>,
                <popover
                  id="metaphyseal-fraying-2"
                  :title="popOver.metaphysealFraying.title"
                  :content="popOver.metaphysealFraying.content"
                  >{{ popOver.metaphysealFraying.text }}</popover
                >,
                <popover
                  id="metaphyseal-cupping-2"
                  :title="popOver.metaphysealCupping.title"
                  :content="popOver.metaphysealCupping.content"
                  >{{ popOver.metaphysealCupping.text }}</popover
                >, <span v-html="about.usingTheRss.paragraph1p2"></span>
                <popover
                  id="widening-0"
                  :title="popOver.widening.title"
                  :content="popOver.widening.content"
                  >{{ popOver.widening.text }}</popover
                >. <span v-html="about.usingTheRss.paragraph1p3"></span>
                <popover
                  id="metaphyseal-margins"
                  :title="popOver.metaphysealMargin.title"
                  :content="popOver.metaphysealMargin.content"
                  >{{ popOver.metaphysealMargin.text }}</popover
                >
                <span v-html="about.usingTheRss.paragraph1p4"></span>
              </p>
              <p v-html="about.usingTheRss.paragraph2"></p>
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
            </b-col>
          </b-row>
        </b-col>
      </b-tab>
      <b-tab :title="about.wristScoring.tabTitle">
        <b-col>
          <b-row>
            <b-col sm="12" class="px-0">
              <h2
                class="section-header"
                v-html="about.wristScoring.header"
              ></h2>
              <p v-html="about.wristScoring.paragraph1"></p>

              <h2
                class="section-header"
                v-html="about.wristScoring.header2"
              ></h2>
              <p v-html="about.wristScoring.paragraph2"></p>
              <h3 class="img-title" v-html="about.wristScoring.header3"></h3>
              <b-row class="d-flex images-container">
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/radius-0.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/radius-0-fr.png"
                    alt=""
                  />
                  <h4 v-html="about.wristScoring.radius0.header"></h4>
                  <p v-html="about.wristScoring.radius0.text1"></p>
                </b-col>
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/radius-05.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/radius-05-fr.png"
                    alt=""
                  />
                  <h4 v-html="about.wristScoring.radius05.header"></h4>
                  <p>
                    <popover
                      id="lucency-1"
                      :title="popOver.lucency.title"
                      :content="popOver.lucency.content"
                      >{{ popOver.lucency.text }}</popover
                    >
                    <span v-html="about.wristScoring.radius05.text1"></span>
                    <popover
                      id="metaphyseal-margin-1"
                      :title="popOver.metaphysealMargin.title"
                      :content="popOver.metaphysealMargin.content"
                      >{{ popOver.metaphysealMargin.text2 }}</popover
                    >
                    <span v-html="about.wristScoring.radius05.text2"></span>
                  </p>
                </b-col>
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/radius-1.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/radius-1-fr.png"
                    alt=""
                  />
                  <h4 v-html="about.wristScoring.radius1.header"></h4>
                  <p>
                    <span v-html="about.wristScoring.radius1.text1"></span>

                    <popover
                      id="metaphyseal-margin-2"
                      :title="popOver.metaphysealMargin.title"
                      :content="popOver.metaphysealMargin.content"
                      >{{ popOver.metaphysealMargin.text2 }}</popover
                    >, <span v-html="about.wristScoring.radius1.text2"></span>
                  </p>
                </b-col>
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/radius-15.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/radius-15-fr.png"
                    alt=""
                  />
                  <h4 v-html="about.wristScoring.radius15.header"></h4>
                  <p>
                    <span v-html="about.wristScoring.radius15.text1"></span>
                    <popover
                      id="metaphyseal-margin-3"
                      :title="popOver.metaphysealMargin.title"
                      :content="popOver.metaphysealMargin.content"
                      >{{ popOver.metaphysealMargin.text2 }}</popover
                    >
                  </p>
                </b-col>
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/radius-2.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/radius-2-fr.png"
                    alt=""
                  />
                  <h4 v-html="about.wristScoring.radius2.header"></h4>
                  <p v-html="about.wristScoring.radius2.text1"></p>
                </b-col>
              </b-row>
              <b-row>
                <div
                  class="figure-caption border-top pb-0"
                  v-html="about.wristScoring.figcaption1"
                ></div>
                <div
                  class="figure-caption mt-0 mb-3"
                  v-html="about.wristScoring.figcaption11"
                ></div>
              </b-row>
              <h2
                class="section-header"
                v-html="about.wristScoring.header4"
              ></h2>
              <p v-html="about.wristScoring.paragraph3"></p>
              <h3 class="img-title" v-html="about.wristScoring.header5"></h3>
              <b-row class="d-flex images-container">
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/ulna-0.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/ulna-0-fr.png"
                    alt=""
                  />
                  <h4 v-html="about.wristScoring.ulna0.header"></h4>
                  <p v-html="about.wristScoring.ulna0.text1"></p>
                </b-col>
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/ulna-05.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/ulna-05-fr.png"
                    alt=""
                  />
                  <h4 v-html="about.wristScoring.ulna05.header"></h4>
                  <p>
                    <popover
                      id="lucency-11"
                      :title="popOver.lucency.title"
                      :content="popOver.lucency.content"
                      >{{ popOver.lucency.text }}</popover
                    >
                    <span v-html="about.wristScoring.ulna05.text1"></span>
                    <popover
                      id="metaphyseal-margin-11"
                      :title="popOver.metaphysealMargin.title"
                      :content="popOver.metaphysealMargin.content"
                      >{{ popOver.metaphysealMargin.text2 }}</popover
                    >
                    <span v-html="about.wristScoring.ulna05.text2"></span>
                  </p>
                </b-col>
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/ulna-1.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/ulna-1-fr.png"
                    alt=""
                  />
                  <h4 v-html="about.wristScoring.ulna1.header"></h4>
                  <p>
                    <span v-html="about.wristScoring.ulna1.text1"></span>
                    <popover
                      id="metaphyseal-margin-21"
                      :title="popOver.metaphysealMargin.title"
                      :content="popOver.metaphysealMargin.content"
                      >{{ popOver.metaphysealMargin.text2 }}</popover
                    >, <span v-html="about.wristScoring.ulna1.text2"></span>
                  </p>
                </b-col>
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/ulna-15.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/ulna-15-fr.png"
                    alt=""
                  />
                  <h4 v-html="about.wristScoring.ulna15.header"></h4>
                  <p>
                    <span v-html="about.wristScoring.ulna15.text1"></span>
                    <popover
                      id="metaphyseal-margin-31"
                      :title="popOver.metaphysealMargin.title"
                      :content="popOver.metaphysealMargin.content"
                      >{{ popOver.metaphysealMargin.text2 }}</popover
                    >
                  </p>
                </b-col>
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/ulna-2.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/ulna-2-fr.png"
                    alt=""
                  />
                  <h4 v-html="about.wristScoring.ulna2.header"></h4>
                  <p v-html="about.wristScoring.ulna2.text1"></p>
                </b-col>
              </b-row>
              <b-row>
                <div
                  class="figure-caption border-top"
                  v-html="about.wristScoring.figcaption2"
                ></div>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-tab>
      <b-tab :title="about.kneeScoring.tabTitle">
        <b-col>
          <b-row>
            <b-col sm="12" class="px-0">
              <h2 class="section-header" v-html="about.kneeScoring.header"></h2>
              <p v-html="about.kneeScoring.introduction"></p>

              <h2
                class="section-header"
                v-html="about.kneeScoring.femur.header"
              ></h2>
              <p v-html="about.kneeScoring.femur.text1"></p>
              <h3
                class="img-title"
                v-html="about.kneeScoring.femur.header2"
              ></h3>
              <b-row class="d-flex images-container">
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/femur-0.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/femur-0-fr.png"
                    alt=""
                  />
                  <h4 v-html="about.kneeScoring.imgText.img0.header"></h4>
                  <p v-html="about.kneeScoring.imgText.img0.text1"></p>
                </b-col>
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/femur-1.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/femur-1-fr.png"
                    alt=""
                  />
                  <h4 v-html="about.kneeScoring.imgText.img1.header"></h4>
                  <p v-show="$i18n.locale === 'en'">
                    <span v-html="about.kneeScoring.imgText.img1.text1"></span>
                    <popover
                      id="lucency-2"
                      :title="popOver.lucency.title"
                      :content="popOver.lucency.content"
                      >{{ popOver.lucency.text }}</popover
                    >,
                    <span v-html="about.kneeScoring.imgText.img1.text2"></span>
                  </p>
                  <p v-show="$i18n.locale === 'fr'">
                    <popover
                      id="lucency2-2"
                      :title="popOver.lucency.title"
                      :content="popOver.lucency.content"
                      >{{ popOver.lucency.title }}</popover
                    >
                    <span v-html="about.kneeScoring.imgText.img1.text1"></span>,
                    <span v-html="about.kneeScoring.imgText.img1.text2"></span>
                  </p>
                </b-col>
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/femur-2.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/femur-2-fr.png"
                    alt=""
                  />
                  <h4 v-html="about.kneeScoring.imgText.img2.header"></h4>
                  <p v-show="$i18n.locale === 'en'">
                    <span v-html="about.kneeScoring.imgText.img2.text1"></span>
                    <popover
                      id="lucency-3"
                      :title="popOver.lucency.title"
                      :content="popOver.lucency.content"
                      >{{ popOver.lucency.text }}</popover
                    >,
                    <span v-html="about.kneeScoring.imgText.img2.text2"></span>
                  </p>
                  <p v-show="$i18n.locale === 'fr'">
                    <popover
                      id="lucency2-3"
                      :title="popOver.lucency.title"
                      :content="popOver.lucency.content"
                      >{{ popOver.lucency.title }}</popover
                    >
                    <span v-html="about.kneeScoring.imgText.img2.text1"></span>,
                    <span v-html="about.kneeScoring.imgText.img2.text2"></span>
                  </p>
                </b-col>
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/femur-3.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/femur-3-fr.png"
                    alt=""
                  />
                  <h4 v-html="about.kneeScoring.imgText.img3.header"></h4>
                  <p v-show="$i18n.locale === 'en'">
                    <span v-html="about.kneeScoring.imgText.img3.text1"></span>
                    <popover
                      id="lucency-4"
                      :title="popOver.lucency.title"
                      :content="popOver.lucency.content"
                      >{{ popOver.lucency.text }}</popover
                    >,
                    <span v-html="about.kneeScoring.imgText.img3.text2"></span>
                  </p>
                  <p v-show="$i18n.locale === 'fr'">
                    <popover
                      id="lucency2-4"
                      :title="popOver.lucency.title"
                      :content="popOver.lucency.content"
                      >{{ popOver.lucency.title }}</popover
                    >
                    <span v-html="about.kneeScoring.imgText.img3.text1"></span>,
                    <span v-html="about.kneeScoring.imgText.img3.text2"></span>
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <div
                  class="figure-caption border-top"
                  v-html="about.kneeScoring.femur.figcaption"
                ></div>
              </b-row>
              <h2
                class="section-header"
                v-html="about.kneeScoring.tibia.header"
              ></h2>
              <p v-html="about.kneeScoring.tibia.text1"></p>
              <h3
                class="img-title"
                v-html="about.kneeScoring.tibia.header2"
              ></h3>
              <b-row class="d-flex images-container">
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/tibia-0.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/tibia-0-fr.png"
                    alt=""
                  />
                  <h4 v-html="about.kneeScoring.imgText.img0.header"></h4>
                  <p v-html="about.kneeScoring.imgText.img0.text1"></p>
                </b-col>
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/tibia-1.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/tibia-1-fr.png"
                    alt=""
                  />
                  <h4>1</h4>
                  <p v-show="$i18n.locale === 'en'">
                    <span v-html="about.kneeScoring.imgText.img1.text1"></span>
                    <popover
                      id="lucency-22"
                      :title="popOver.lucency.title"
                      :content="popOver.lucency.content"
                      >{{ popOver.lucency.text }}</popover
                    >,
                    <span v-html="about.kneeScoring.imgText.img1.text2"></span>
                  </p>
                  <p v-show="$i18n.locale === 'fr'">
                    <popover
                      id="lucency2-22"
                      :title="popOver.lucency.title"
                      :content="popOver.lucency.content"
                      >{{ popOver.lucency.title }}</popover
                    >
                    <span v-html="about.kneeScoring.imgText.img1.text1"></span>,
                    <span v-html="about.kneeScoring.imgText.img1.text2"></span>
                  </p>
                </b-col>
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/tibia-2.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/tibia-2-fr.png"
                    alt=""
                  />
                  <h4 v-html="about.kneeScoring.imgText.img2.header"></h4>
                  <p v-show="$i18n.locale === 'en'">
                    <span v-html="about.kneeScoring.imgText.img2.text1"></span>
                    <popover
                      id="lucency-32"
                      :title="popOver.lucency.title"
                      :content="popOver.lucency.content"
                      >{{ popOver.lucency.text }}</popover
                    >,
                    <span v-html="about.kneeScoring.imgText.img2.text2"></span>
                  </p>
                  <p v-show="$i18n.locale === 'fr'">
                    <popover
                      id="lucency2-32"
                      :title="popOver.lucency.title"
                      :content="popOver.lucency.content"
                      >{{ popOver.lucency.title }}</popover
                    >
                    <span v-html="about.kneeScoring.imgText.img2.text1"></span>,
                    <span v-html="about.kneeScoring.imgText.img2.text2"></span>
                  </p>
                </b-col>
                <b-col class="img-container">
                  <img
                    v-show="$i18n.locale === 'en'"
                    src="~/assets/images/tibia-3.png"
                    alt=""
                  />
                  <img
                    v-show="$i18n.locale === 'fr'"
                    src="~/assets/images/tibia-3-fr.png"
                    alt=""
                  />
                  <h4 v-html="about.kneeScoring.imgText.img3.header"></h4>
                  <p v-show="$i18n.locale === 'en'">
                    <span v-html="about.kneeScoring.imgText.img3.text1"></span>
                    <popover
                      id="lucency-42"
                      :title="popOver.lucency.title"
                      :content="popOver.lucency.content"
                      >{{ popOver.lucency.text }}</popover
                    >,
                    <span v-html="about.kneeScoring.imgText.img3.text2"></span>
                  </p>
                  <p v-show="$i18n.locale === 'fr'">
                    <popover
                      id="lucency2-42"
                      :title="popOver.lucency.title"
                      :content="popOver.lucency.content"
                      >{{ popOver.lucency.title }}</popover
                    >
                    <span v-html="about.kneeScoring.imgText.img3.text1"></span>,
                    <span v-html="about.kneeScoring.imgText.img3.text2"></span>
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <div
                  class="figure-caption border-top pb-0"
                  v-html="about.kneeScoring.tibia.figcaption"
                ></div>
                <div
                  class="figure-caption mt-0 mb-3"
                  v-html="about.kneeScoring.tibia.figcaption2"
                ></div>
              </b-row>
              <b-row class="px-3">
                <b-row class="d-flex multiplier-table">
                  <b-col class="col-12 col-sm-6">
                    <table>
                      <tbody>
                        <tr>
                          <th colspan="2">
                            {{ about.kneeScoring.table.header }}
                          </th>
                        </tr>
                        <tr>
                          <td>{{ about.kneeScoring.table.subheader1 }}</td>
                          <td>{{ about.kneeScoring.table.text1 }}</td>
                        </tr>
                        <tr>
                          <td>{{ about.kneeScoring.table.subheader2 }}</td>
                          <td>{{ about.kneeScoring.table.text2 }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </b-col>
                  <b-col class="col-12 col-sm-6">
                    <p
                      class="table-footnote"
                      v-html="about.kneeScoring.table.footnote"
                    ></p>
                  </b-col>
                </b-row>
                <b-row class="tip mt-3 px-3">
                  <p v-html="about.kneeScoring.table.tip"></p>
                </b-row>
              </b-row>
              <b-row class="border-top pt-5 mt-5">
                <b-col md="12">
                  <p class="text-center instruction-complete">
                    <router-link to="tutorial"
                      ><span v-html="about.kneeScoring.continue"></span>
                      <img src="~/assets/icons/nav-arrow.svg" alt=""
                    /></router-link>
                  </p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script>
export default {
  computed: {
    about() {
      return this.$t('about')
    },
    popOver() {
      return this.$t('popOver')
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .nav-tabs {
  border-bottom: none;

  li:nth-of-type(odd) {
    margin-right: rem(10px);
  }
  li:nth-of-type(-n + 2) {
    margin-bottom: rem(10px);
  }
  .nav-item {
    margin-right: rem(14px);
    @include media-breakpoint-down(xs) {
      font-size: rem(12px);
      margin-right: 0;
      width: rem(150px);
    }
  }
  .nav-link {
    border-radius: rem(4px);
    border: 1px solid $purple-secondary;
    text-transform: uppercase;
    background: $white;
    @include media-breakpoint-down(xs) {
      text-align: center;
      padding: rem(3px);
    }
    &.active {
      background: $purple;
      border-color: transparent;
      color: $white;
      font-weight: 700;
    }
    &:hover {
      border-color: transparent;
      border: 1px solid $purple-secondary;
    }
  }
}

.tip,
.caption {
  font-size: rem(12px);
  p {
    line-height: rem(16px);
  }
  ::v-deep strong {
    font-weight: 700;
    color: $purple;
  }
}

.img-title {
  color: $darker-grey;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: rem(5px);
  font-size: rem(18px);
}

.images-container {
  padding: 0 15px;
  .img-container {
    padding: 0 5px;
    width: 20%;
    @include media-breakpoint-down(xs) {
      min-width: 50%;
      max-width: 50%;
    }
    h3,
    h4 {
      color: $purple;
      font-size: 14px;
      font-weight: 700;
      margin-top: 10px;
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

.popover-target {
  color: $purple !important;
  text-decoration: none !important;
  font-weight: 700;
}

.figure-caption {
  font-size: rem(10px);
  margin-top: rem(12px);
  padding: 0 15px;
  padding-bottom: 10px;
  width: 100%;

  ::v-deep strong {
    font-weight: 700;
    color: $purple;
  }
}

.table-header {
  text-transform: uppercase;
  color: $purple;
  font-weight: 700;
  font-size: rem(16px);
}

table {
  border-collapse: separate;
  border-spacing: 0 rem(5px);
  width: -webkit-fill-available;
  tr {
    th {
      text-transform: uppercase;
      color: $purple;
      font-weight: 700;
      font-size: rem(16px);
    }
    td {
      border: solid 1px $purple-secondary;
    }
    td:first-of-type {
      background: $purple;
      font-weight: 700;
      color: $white;
      width: rem(50px);
      height: rem(50px);
      text-align: center;
    }
    td:last-of-type {
      background: $white;
      color: $dark-grey;
      font-size: rem(12px);
      padding: 0 rem(10px);
    }
  }
}

.multiplier-table {
  display: flex;
  align-items: center;
}

.table-footnote {
  color: $darker-grey;
  font-weight: 700;
  margin: rem(18px) 0;
  width: 75%;
  @include media-breakpoint-down(xs) {
    width: 100%;
  }
}
</style>
