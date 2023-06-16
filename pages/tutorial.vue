<template>
  <b-container fluid="xl" class="page">
    <PageTitle
      ><template #title><div v-html="tutorial.intro.title"></div></template
    ></PageTitle>
    <b-row>
      <b-col class="tutorial-header">
        <h2 v-html="tutorial.intro.header"></h2>
        <b-button v-b-modal="'skip-modal'" variant="primary"
          ><span v-html="tutorial.intro.skip"></span>
          <img src="~/assets/icons/nav-arrow.svg" alt=""
        /></b-button>
      </b-col>
    </b-row>
    <section v-show="currentPage === 1" id="page-1">
      <b-row>
        <b-col md="7">
          <h3 v-html="tutorial.intro.welcome"></h3>
          <p v-html="tutorial.intro.welcomeP1"></p>
          <p v-html="tutorial.intro.welcomeP2"></p>
        </b-col>
        <b-col md="5">
          <div class="tips">
            <h4 v-html="tutorial.intro.tipsHeader"></h4>
            <div class="tip">
              <div class="icon">
                <img
                  v-b-tooltip.hover
                  src="~/assets/icons/tips-icon-i.svg"
                  :alt="imgAlt.info"
                  class="info"
                  :title="tutorial.intro.tipsIconTitle"
                />
                <div class="circle i"></div>
              </div>
              <div class="lines">
                <img src="~/assets/icons/tips-line-i.svg" alt="" />
              </div>
              <div class="text">
                <span class="show-xs" v-html="tutorial.intro.tipsClick"></span
                ><span class="show-md" v-html="tutorial.intro.tipsHover"></span>
                <span v-html="tutorial.intro.tipsExtraTips"></span>
                <br />
                <strong v-html="tutorial.intro.tipsTryNow"></strong>
              </div>
            </div>
            <div class="tip reverse">
              <div
                class="icon play-button"
                @click.prevent="playAudio('audioFileTryIt')"
              >
                <img
                  id="playaudioFileTryIt"
                  class="play-button"
                  src="~/assets/icons/tips-icon-audio.svg"
                  :alt="imgAlt.play"
                  style="display: block"
                />
                <img
                  id="pauseaudioFileTryIt"
                  class="pause-button"
                  src="~/assets/icons/tips-icon-pause.svg"
                  :alt="imgAlt.pause"
                  style="display: none"
                />
                <div class="circle play"></div>
              </div>
              <div class="lines">
                <img src="~/assets/icons/tips-line-audio.svg" alt="" />
              </div>
              <div class="text">
                <span v-html="tutorial.intro.tipsAudio"></span>
                <br />
                <strong v-html="tutorial.intro.tipsTryNow"></strong>
              </div>
            </div>
            <div class="tip">
              <div class="icon">
                <img
                  v-show="$i18n.locale === 'en'"
                  v-b-modal.scoring-guide-1
                  src="~/assets/icons/tips-scoring-guide.svg"
                  :alt="imgAlt.scoringGuide"
                />
                <img
                  v-show="$i18n.locale === 'fr'"
                  v-b-modal.scoring-guide-1
                  src="~/assets/icons/tips-scoring-guide-fr.svg"
                  :alt="imgAlt.scoringGuide"
                />
              </div>
              <div class="lines">
                <img src="~/assets/icons/tips-line-scoring-guide.svg" alt="" />
              </div>
              <div class="text">
                <span v-html="tutorial.intro.tipsScoringGuide"></span>
                <br />
                <strong v-html="tutorial.intro.tipsTryNow"></strong>
              </div>
            </div>
          </div>
        </b-col>
        <b-row class="audio-instructions">
          <b-col class="col-3 col-sm-1">
            <div class="img-container">
              <img src="~/assets/icons/soundwave.svg" alt="" />
            </div>
          </b-col>
          <b-col>
            <p class="mb-0">
              <strong v-html="tutorial.intro.tipsAudioInstructions"></strong>
            </p>
          </b-col>
        </b-row>
      </b-row>
    </section>
    <section v-show="currentPage === 2" id="page-2">
      <b-row>
        <b-col md="8" class="order-2 order-sm-1">
          <image-selection
            class="p-0 p-sm-1 mt-3 mt-sm-0"
            :images="pages[1].images"
            :disabled="pages[1].showFeedback"
            @image-selection:selected="pages[1].selectedImage = $event"
          />
          <b-button v-b-modal.scoring-guide-2 class="btn-scoring-guide"
            ><span v-html="button.scoringGuide"></span>
            <img src="~/assets/icons/scoring_guide.svg" alt="" />
          </b-button>
        </b-col>
        <b-col md="4" class="order-1 order-sm-2">
          <b-row>
            <b-col md="12">
              <div class="info-buttons float-right">
                <img
                  v-b-tooltip.hover
                  src="~/assets/icons/icon-i.svg"
                  :alt="imgAlt.info"
                  class="info"
                  :title="tutorial.page2.info"
                />
                <div
                  class="play-button"
                  @click.prevent="playAudio('audioFile2')"
                >
                  <img
                    id="playaudioFile2"
                    class="play-button"
                    src="~/assets/icons/icon-audio.svg"
                    :alt="imgAlt.play"
                    style="display: block"
                  />
                  <img
                    id="pauseaudioFile2"
                    class="pause-button"
                    src="~/assets/icons/icon-pause.svg"
                    :alt="imgAlt.pause"
                    style="display: none"
                  />
                </div>
              </div>
            </b-col>
          </b-row>
          <p class="instructions" v-html="tutorial.page2.instructions1"></p>
          <p
            class="instructions mt-sm-3"
            v-html="tutorial.page2.instructions2"
          ></p>
          <feedback
            class="mt-5 mr-5 d-none d-sm-block"
            :show-feedback.sync="pages[1].showFeedback"
            :disable-button="!pages[1].selectedImage"
          >
            <template #feedback-show>
              <div v-if="pages[1].selectedImage">
                <div
                  v-show="pages[1].selectedImage.isCorrect === true"
                  class="thats-right"
                >
                  <img src="~/assets/icons/icon-thats-right.svg" alt="" />
                  <span v-html="tutorial.feedback.thatsRight"></span>
                </div>
                <div
                  v-show="pages[1].selectedImage.isCorrect === false"
                  class="not-quite"
                >
                  <img src="~/assets/icons/icon-not-quite.svg" alt="" />
                  <span v-html="tutorial.feedback.notQuite"></span>
                </div>
              </div>
              <p v-html="tutorial.page2.feedbackText"></p>
              <div
                class="play-button btn-inner"
                @click.prevent="playAudio('audioFile3')"
              >
                <img
                  id="playaudioFile3"
                  class="play-button"
                  src="~/assets/icons/icon-audio.svg"
                  :alt="imgAlt.play"
                  style="display: block"
                />
                <img
                  id="pauseaudioFile3"
                  class="pause-button"
                  src="~/assets/icons/icon-pause.svg"
                  :alt="imgAlt.pause"
                  style="display: none"
                />
              </div>
            </template>
          </feedback>
        </b-col>
        <b-col class="d-sm-none order-3">
          <feedback
            class="mt-sm-5"
            :show-feedback.sync="pages[1].showFeedback"
            :disable-button="!pages[1].selectedImage"
          >
            <template #feedback-show>
              <div v-if="pages[1].selectedImage">
                <div
                  v-show="pages[1].selectedImage.isCorrect === true"
                  class="thats-right"
                >
                  <img src="~/assets/icons/icon-thats-right.svg" alt="" />
                  <span v-html="tutorial.feedback.thatsRight"></span>
                </div>
                <div
                  v-show="pages[1].selectedImage.isCorrect === false"
                  class="not-quite"
                >
                  <img src="~/assets/icons/icon-not-quite.svg" alt="" />
                  <span v-html="tutorial.feedback.notQuite"></span>
                </div>
              </div>
              <p v-html="tutorial.page2.feedbackText"></p>
              <div
                class="play-button btn-inner"
                @click.prevent="playAudio('audioFile3-1')"
              >
                <img
                  id="playaudioFile3-1"
                  class="play-button"
                  src="~/assets/icons/icon-audio.svg"
                  :alt="imgAlt.play"
                  style="display: block"
                />
                <img
                  id="pauseaudioFile3-1"
                  class="pause-button"
                  src="~/assets/icons/icon-pause.svg"
                  :alt="imgAlt.pause"
                  style="display: none"
                />
              </div>
            </template>
          </feedback>
        </b-col>
      </b-row>
    </section>
    <section v-show="currentPage === 3" id="page-3">
      <b-row>
        <b-col class="d-block d-sm-none">
          <b-row>
            <b-col md="9" class="order-2 order-sm-1">
              <p
                class="instructions smaller"
                v-html="tutorial.page3.instructions1"
              ></p>
            </b-col>
            <b-col md="3" class="order-1 order-sm-2">
              <div class="info-buttons float-right">
                <img
                  v-b-tooltip.hover
                  src="~/assets/icons/icon-i.svg"
                  :alt="imgAlt.info"
                  class="info"
                  :title="tutorial.page3.info"
                />
                <div
                  class="play-button"
                  @click.prevent="playAudio('audioFile4')"
                >
                  <img
                    id="playaudioFile4"
                    class="play-button"
                    src="~/assets/icons/icon-audio.svg"
                    :alt="imgAlt.play"
                    style="display: block"
                  />
                  <img
                    id="pauseaudioFile4"
                    class="pause-button"
                    src="~/assets/icons/icon-pause.svg"
                    :alt="imgAlt.pause"
                    style="display: none"
                  />
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="4">
          <image-zoom
            :regular="
              require(`@/assets/images/${
                pages[2].showFeedback
                  ? pages[2].feedbackImage.src
                  : pages[2].image.src
              }`)
            "
            class="img-zoomer"
            img-class="img-fluid"
            :hover-message="feedback.hoverToZoom"
            :touch-message="feedback.tapToZoom"
            :alt="
              pages[2].showFeedback
                ? imgAlt.leftWristFeedback
                : imgAlt.leftWrist
            "
          />
          <b-button v-b-modal.scoring-guide-3 class="btn-scoring-guide"
            ><span v-html="button.scoringGuide"></span>
            <img src="~/assets/icons/scoring_guide.svg" alt="" />
          </b-button>
        </b-col>
        <b-col md="8">
          <b-row class="d-none d-sm-flex">
            <b-col md="9" class="order-2 order-sm-1">
              <p
                class="instructions smaller"
                v-html="tutorial.page3.instructions1"
              ></p>
            </b-col>
            <b-col md="3" class="order-1 order-sm-2">
              <div class="info-buttons float-right">
                <img
                  v-b-tooltip.hover
                  src="~/assets/icons/icon-i.svg"
                  :alt="imgAlt.info"
                  class="info"
                  :title="tutorial.page3.info"
                />
                <div
                  class="play-button"
                  @click.prevent="playAudio('audioFile4-1')"
                >
                  <img
                    id="playaudioFile4-1"
                    class="play-button"
                    src="~/assets/icons/icon-audio.svg"
                    :alt="imgAlt.play"
                    style="display: block"
                  />
                  <img
                    id="pauseaudioFile4-1"
                    class="pause-button"
                    src="~/assets/icons/icon-pause.svg"
                    :alt="imgAlt.pause"
                    style="display: none"
                  />
                </div>
              </div>
            </b-col>
          </b-row>
          <assessment
            type="wrist"
            layout="tutorial"
            :stepped="true"
            :assessment-scored.sync="pages[2].assessment"
            :class="{ disabled: pages[2].showFeedback }"
            :correct-values="pages[2].wristCorrectValues"
            :show-correct="pages[2].showFeedback"
          >
            <template #radius-title>
              <span v-html="tutorial.page3.step1"></span>
            </template>
            <template #ulna-title
              ><span v-html="tutorial.page3.step2"></span
            ></template>
            <template #total-title
              ><span v-html="tutorial.page3.step3"></span
            ></template>
          </assessment>
          <feedback
            :show-feedback.sync="pages[2].showFeedback"
            :disable-button="
              pages[2].assessment.score === null ||
              pages[2].assessment.score === undefined
            "
            :tooltip-text="feedback.score"
          >
            <template #feedback-show>
              <div
                v-if="
                  pages[2].assessment.radius === 0.5 &&
                  pages[2].assessment.ulna === 1
                "
                class="thats-right"
              >
                <img src="~/assets/icons/icon-thats-right.svg" alt="" />
                <span v-html="tutorial.feedback.thatsRight"></span>:&nbsp;<br
                  class="br-xs"
                />
                <span v-html="tutorial.feedback.correctScore"></span>&nbsp;{{
                  pages[2].wristCorrectValues.total
                }}
              </div>
              <div v-else class="not-quite">
                <img src="~/assets/icons/icon-not-quite.svg" alt="" />
                <span v-html="tutorial.feedback.notQuite"></span>:&nbsp;<br
                  class="br-xs"
                />
                <span v-html="tutorial.feedback.correctScore"></span>&nbsp;{{
                  pages[2].wristCorrectValues.total
                }}
              </div>
              <p v-html="tutorial.page3.feedbackText"></p>
              <div
                class="play-button mt-2"
                @click.prevent="playAudio('audioFile5')"
              >
                <img
                  id="playaudioFile5"
                  class="play-button"
                  src="~/assets/icons/icon-audio.svg"
                  :alt="imgAlt.play"
                  style="display: block"
                />
                <img
                  id="pauseaudioFile5"
                  class="pause-button"
                  src="~/assets/icons/icon-pause.svg"
                  :alt="imgAlt.pause"
                  style="display: none"
                />
              </div>
            </template>
          </feedback>
        </b-col>
      </b-row>
    </section>
    <section v-show="currentPage === 4" id="page-4">
      <b-row>
        <b-col md="8" class="order-2 order-sm-1">
          <image-selection
            class="p-0 p-sm-1 mt-3 mt-sm-0"
            :images="pages[3].images"
            :disabled="pages[3].showFeedback"
            @image-selection:selected="pages[3].selectedImage = $event"
          />
          <b-button v-b-modal.scoring-guide-4 class="btn-scoring-guide"
            ><span v-html="button.scoringGuide"></span>
            <img src="~/assets/icons/scoring_guide.svg" alt="" />
          </b-button>
        </b-col>
        <b-col md="4" class="order-1 order-sm-2">
          <b-row>
            <b-col md="12">
              <div class="info-buttons float-right">
                <img
                  v-b-tooltip.hover
                  src="~/assets/icons/icon-i.svg"
                  :alt="imgAlt.info"
                  class="info"
                  :title="tutorial.page4.info"
                />
                <div
                  class="play-button"
                  @click.prevent="playAudio('audioFileKnee')"
                >
                  <img
                    id="playaudioFileKnee"
                    class="play-button"
                    src="~/assets/icons/icon-audio.svg"
                    :alt="imgAlt.play"
                    style="display: block"
                  />
                  <img
                    id="pauseaudioFileKnee"
                    class="pause-button"
                    src="~/assets/icons/icon-pause.svg"
                    :alt="imgAlt.pause"
                    style="display: none"
                  />
                </div>
              </div>
            </b-col>
          </b-row>
          <p class="instructions" v-html="tutorial.page4.instructions1"></p>
          <p
            class="instructions mt-3 mr-4"
            v-html="tutorial.page4.instructions2"
          ></p>
          <feedback
            class="mt-5 mr-5 d-none d-sm-block"
            :show-feedback.sync="pages[3].showFeedback"
            :disable-button="!pages[3].selectedImage"
          >
            <template #feedback-show>
              <div v-if="pages[3].selectedImage">
                <div
                  v-show="pages[3].selectedImage.isCorrect === true"
                  class="thats-right"
                >
                  <img src="~/assets/icons/icon-thats-right.svg" alt="" />
                  <span v-html="tutorial.feedback.thatsRight"></span>
                </div>
                <div
                  v-show="pages[3].selectedImage.isCorrect === false"
                  class="not-quite"
                >
                  <img src="~/assets/icons/icon-not-quite.svg" alt="" />
                  <span v-html="tutorial.feedback.notQuite"></span>
                </div>
              </div>
              <p v-html="tutorial.page4.feedbackText"></p>
            </template>
          </feedback>
        </b-col>
        <b-col class="d-sm-none order-3">
          <feedback
            class="mt-5"
            :show-feedback.sync="pages[3].showFeedback"
            :disable-button="!pages[3].selectedImage"
          >
            <template #feedback-show>
              <div v-if="pages[3].selectedImage">
                <div
                  v-show="pages[3].selectedImage.isCorrect === true"
                  class="thats-right"
                >
                  <img src="~/assets/icons/icon-thats-right.svg" alt="" />
                  <span v-html="tutorial.feedback.thatsRight"></span>
                </div>
                <div
                  v-show="pages[3].selectedImage.isCorrect === false"
                  class="not-quite"
                >
                  <img src="~/assets/icons/icon-not-quite.svg" alt="" />
                  <span v-html="tutorial.feedback.notQuite"></span>
                </div>
              </div>
              <p>
                In this case, both knees have a similar level of XLH severity.
                For the purposes of the tutorial, we’ll score the right knee.
              </p>
            </template>
          </feedback>
        </b-col>
      </b-row>
    </section>
    <section v-show="currentPage === 5" id="page-5">
      <b-row>
        <b-col class="d-block d-sm-none">
          <b-row>
            <b-col md="10" class="order-2 order-sm-1">
              <p
                class="instructions smaller"
                v-html="tutorial.page5.instructions1"
              ></p>
            </b-col>
            <b-col md="2" class="order-1 order-sm-2">
              <div class="info-buttons float-right">
                <img
                  v-b-tooltip.hover
                  src="~/assets/icons/icon-i.svg"
                  :alt="imgAlt.info"
                  class="info"
                  title="The key characteristics of each severity score should still be discernible, even with some variation in image exposure. Remember to refer to the scoring guide."
                />
                <div
                  class="play-button"
                  @click.prevent="playAudio('audioFileKnee2')"
                >
                  <img
                    id="playaudioFileKnee2"
                    class="play-button"
                    src="~/assets/icons/icon-audio.svg"
                    :alt="imgAlt.play"
                    style="display: block"
                  />
                  <img
                    id="pauseaudioFileKnee2"
                    class="pause-button"
                    src="~/assets/icons/icon-pause.svg"
                    :alt="imgAlt.pause"
                    style="display: none"
                  />
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="4" class="mb-3">
          <image-zoom
            :regular="
              require(`@/assets/images/${
                pages[4].showFeedback
                  ? pages[4].feedbackImage.src
                  : pages[4].image.src
              }`)
            "
            class="img-zoomer"
            img-class="img-fluid"
            :hover-message="feedback.hoverToZoom"
            :touch-message="feedback.tapToZoom"
            :alt="
              pages[4].showFeedback
                ? imgAlt.rightKneeFeedback
                : imgAlt.rightKnee
            "
          >
          </image-zoom>
          <b-button v-b-modal.scoring-guide-5 class="btn-scoring-guide"
            ><span v-html="button.scoringGuide"></span>
            <img src="~/assets/icons/scoring_guide.svg" alt="" />
          </b-button>
        </b-col>
        <b-col md="8">
          <b-row class="d-none d-sm-flex">
            <b-col md="10" class="order-2 order-sm-1">
              <p
                class="instructions smaller"
                v-html="tutorial.page5.instructions1"
              ></p>
            </b-col>
            <b-col md="2" class="order-1 order-sm-2">
              <div class="info-buttons float-right">
                <img
                  v-b-tooltip.hover
                  src="~/assets/icons/icon-i.svg"
                  :alt="imgAlt.info"
                  class="info"
                  :title="tutorial.page5.info"
                />
                <div
                  class="play-button"
                  @click.prevent="playAudio('audioFileKnee2-1')"
                >
                  <img
                    id="playaudioFileKnee2-1"
                    class="play-button"
                    src="~/assets/icons/icon-audio.svg"
                    :alt="imgAlt.play"
                    style="display: block"
                  />
                  <img
                    id="pauseaudioFileKnee2-1"
                    class="pause-button"
                    src="~/assets/icons/icon-pause.svg"
                    :alt="imgAlt.pause"
                    style="display: none"
                  />
                </div>
              </div>
            </b-col>
          </b-row>
          <assessment
            type="knee"
            layout="tutorial"
            :stepped="true"
            :assessment-scored.sync="pages[4].assessment"
            class="mb-4"
            :class="{ disabled: pages[4].showFeedback }"
            :correct-values="pages[4].kneeCorrectValues"
            :show-correct="pages[4].showFeedback"
          >
            <template #femur-title>
              <span v-html="tutorial.page5.step1"></span>
            </template>
            <template #femur-multi-title>
              <span v-html="tutorial.page5.step2"></span>
            </template>
            <template #tibia-title>
              <span v-html="tutorial.page5.step3"></span>
            </template>
            <template #tibia-multi-title>
              <span v-html="tutorial.page5.step4"></span>
            </template>
            <template #total-title>
              <span v-html="tutorial.page5.step5"></span>
            </template>
          </assessment>
          <feedback
            :show-feedback.sync="pages[4].showFeedback"
            :disable-button="
              pages[4].assessment.score === null ||
              pages[4].assessment.score === undefined
            "
            tooltip-text="Please select a score"
          >
            <template #feedback-show>
              <div
                v-if="
                  pages[4].assessment.femur === 1 &&
                  pages[4].assessment.femurMulti === 1 &&
                  pages[4].assessment.tibia === 1 &&
                  pages[4].assessment.tibiaMulti === 0.5
                "
                class="thats-right"
              >
                <img src="~/assets/icons/icon-thats-right.svg" alt="" />
                <span v-html="tutorial.feedback.thatsRight"></span>:&nbsp;<br
                  class="br-xs"
                />
                <span v-html="tutorial.feedback.correctScore"></span>&nbsp;{{
                  pages[4].kneeCorrectValues.total
                }}
              </div>
              <div v-else class="not-quite">
                <img src="~/assets/icons/icon-not-quite.svg" alt="" />
                <span v-html="tutorial.feedback.notQuite"></span>:&nbsp;<br
                  class="br-xs"
                />
                <span v-html="tutorial.feedback.correctScore"></span>&nbsp;{{
                  pages[4].kneeCorrectValues.total
                }}
              </div>
              <p v-html="tutorial.page5.feedbackText"></p>
            </template>
          </feedback>
        </b-col>
      </b-row>
    </section>
    <section v-show="currentPage === 6" id="page-6">
      <b-row>
        <b-col>
          <div
            class="play-button d-block d-sm-none float-right"
            @click.prevent="playAudio('audioFileFinal')"
          >
            <img
              id="playaudioFileFinal"
              class="play-button"
              src="~/assets/icons/icon-audio.svg"
              :alt="imgAlt.play"
              style="display: block"
            />
            <img
              id="pauseaudioFileFinal"
              class="pause-button"
              src="~/assets/icons/icon-pause.svg"
              :alt="imgAlt.pause"
              style="display: none"
            />
          </div>
        </b-col>
      </b-row>
      <b-row class="flex-wrap">
        <b-col class="border-right order-2 order-sm-1 col-12 col-sm-6">
          <div class="img-container">
            <img
              v-show="$i18n.locale === 'en'"
              src="~/assets/images/tutorial-complete-en.svg"
              alt=""
            />
            <img
              v-show="$i18n.locale === 'fr'"
              src="~/assets/images/tutorial-complete-fr.svg"
              alt=""
            />
          </div>
        </b-col>
        <b-col
          class="
            d-flex
            align-items-start
            justify-content-center
            flex-column
            order-1 order-sm-2
            mb-4 mb-sm-0
          "
        >
          <p
            class="instructions smaller"
            v-html="tutorial.page6.instructions1"
          ></p>
          <div
            class="play-button d-none d-sm-block"
            @click.prevent="playAudio('audioFileFinal-1')"
          >
            <img
              id="playaudioFileFinal-1"
              class="play-button"
              src="~/assets/icons/icon-audio.svg"
              :alt="imgAlt.play"
              style="display: block"
            />
            <img
              id="pauseaudioFileFinal-1"
              class="pause-button"
              src="~/assets/icons/icon-pause.svg"
              :alt="imgAlt.pause"
              style="display: none"
            />
          </div>
        </b-col>
      </b-row>
      <b-row no-gutters class="border-top-final pt-5 pb-1 mt-5">
        <b-col>
          <p class="text-center instruction-complete">
            <span v-html="tutorial.page6.instructions2"></span>

            <router-link to="/practice">
              <span v-html="tutorial.page6.continue"></span>&nbsp;<img
                src="~/assets/icons/nav-arrow.svg"
                alt=""
            /></router-link>
          </p>
        </b-col>
      </b-row>
    </section>
    <b-row no-gutters>
      <b-col class="nav-separator">
        <hr />
      </b-col>
    </b-row>
    <b-pagination-nav
      :number-of-pages="pagesCount"
      :link-gen="linkGen"
      :first-number="true"
      :last-number="true"
      use-router
      align="center"
      class="pt-3"
    >
      <template #prev-text>
        <svg
          id="navArrowLeft"
          xmlns="http://www.w3.org/2000/svg"
          width="8.61"
          height="15.22"
          viewBox="0 0 8.61 15.22"
        >
          <polyline
            id="arrowLeft"
            points="7.61 14.22 1 7.61 7.61 1"
            fill="none"
            stroke="#707070"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
        <span @click="pauseAudio()" v-html="pagination.prev"></span>
      </template>
      <template #next-text>
        <span @click="pauseAudio()" v-html="pagination.next"></span>
        <svg
          id="navArrowRight"
          xmlns="http://www.w3.org/2000/svg"
          width="8.61"
          height="15.22"
          viewBox="0 0 8.61 15.22"
        >
          <polyline
            id="arrowRight"
            points="1 1 7.61 7.61 4.31 10.92 1 14.22"
            fill="none"
            stroke="#707070"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </template>
      <template #page="{ active }">
        <div v-if="active">
          <img src="~/assets/icons/dot-active.svg" alt="active" />
        </div>
        <div v-else>
          <img src="~/assets/icons/dot.svg" alt="" />
        </div>
      </template>
    </b-pagination-nav>

    <b-modal id="skip-modal" centered hide-footer>
      <div class="container">
        <div class="row mt-md-3">
          <b-col>
            <p class="warning" v-html="tutorial.warning.question"></p>
            <p v-show="currentPage >= 2" v-html="tutorial.warning.reset"></p>
          </b-col>
        </div>
        <div class="row m-auto">
          <div class="skip-footer">
            <b-button class="yes" variant="primary" to="/practice">{{
              tutorial.warning.yes
            }}</b-button>
            <b-button
              class="no"
              variant="primary"
              @click="$bvModal.hide('skip-modal')"
              >{{ tutorial.warning.no }}</b-button
            >
          </div>
        </div>
      </div>
    </b-modal>

    <audio id="audioFileTryIt" @ended="audioEnded('audioFileTryIt')">
      <source
        :src="
          $i18n.locale === 'fr' ? 'audio/dr-01-fr.mp3' : 'audio/drward-01.mp3'
        "
        type="audio/mp3"
      />
    </audio>
    <audio id="audioFile2" @ended="audioEnded('audioFile2')">
      <source
        :src="
          $i18n.locale === 'fr' ? 'audio/dr-02-fr.mp3' : 'audio/drward-02.mp3'
        "
        type="audio/mp3"
      />
    </audio>
    <audio id="audioFile3" @ended="audioEnded('audioFile3')">
      <source
        :src="
          $i18n.locale === 'fr' ? 'audio/dr-03-fr.mp3' : 'audio/drward-03.mp3'
        "
        type="audio/mp3"
      />
    </audio>
    <audio id="audioFile3-1" @ended="audioEnded('audioFile3-1')">
      <source
        :src="
          $i18n.locale === 'fr' ? 'audio/dr-03-fr.mp3' : 'audio/drward-03.mp3'
        "
        type="audio/mp3"
      />
    </audio>
    <audio id="audioFile4" @ended="audioEnded('audioFile4')">
      <source
        :src="
          $i18n.locale === 'fr' ? 'audio/dr-04-fr.mp3' : 'audio/drward-04.mp3'
        "
        type="audio/mp3"
      />
    </audio>
    <audio id="audioFile4-1" @ended="audioEnded('audioFile4')">
      <source
        :src="
          $i18n.locale === 'fr' ? 'audio/dr-04-fr.mp3' : 'audio/drward-04.mp3'
        "
        type="audio/mp3"
      />
    </audio>
    <audio id="audioFile5" @ended="audioEnded('audioFile5')">
      <source
        :src="
          $i18n.locale === 'fr' ? 'audio/dr-05-fr.mp3' : 'audio/drward-05.mp3'
        "
        type="audio/mp3"
      />
    </audio>
    <audio id="audioFileKnee" @ended="audioEnded('audioFileKnee')">
      <source
        :src="
          $i18n.locale === 'fr' ? 'audio/dr-06-fr.mp3' : 'audio/drward-06.mp3'
        "
        type="audio/mp3"
      />
    </audio>
    <audio id="audioFileKnee2" @ended="audioEnded('audioFileKnee2')">
      <source
        :src="
          $i18n.locale === 'fr' ? 'audio/dr-07-fr.mp3' : 'audio/drward-07.mp3'
        "
        type="audio/mp3"
      />
    </audio>
    <audio id="audioFileKnee2-1" @ended="audioEnded('audioFileKnee2-1')">
      <source
        :src="
          $i18n.locale === 'fr' ? 'audio/dr-07-fr.mp3' : 'audio/drward-07.mp3'
        "
        type="audio/mp3"
      />
    </audio>
    <audio id="audioFileFinal" @ended="audioEnded('audioFileFinal')">
      <source
        :src="
          $i18n.locale === 'fr' ? 'audio/dr-08-fr.mp3' : 'audio/drward-08.mp3'
        "
        type="audio/mp3"
      />
    </audio>
    <audio id="audioFileFinal-1" @ended="audioEnded('audioFileFinal-1')">
      <source
        :src="
          $i18n.locale === 'fr' ? 'audio/dr-08-fr.mp3' : 'audio/drward-08.mp3'
        "
        type="audio/mp3"
      />
    </audio>
    <scoring-guide
      id="scoring-guide-1"
      scoring-guide="wrist"
      :image="pages[0].image"
    ></scoring-guide>
    <scoring-guide id="scoring-guide-2" scoring-guide="wrist"></scoring-guide>
    <scoring-guide
      id="scoring-guide-3"
      scoring-guide="wrist"
      :image="pages[2].image"
    ></scoring-guide>
    <scoring-guide id="scoring-guide-4" scoring-guide="knee"></scoring-guide>
    <scoring-guide
      id="scoring-guide-5"
      scoring-guide="knee"
      :image="pages[4].image"
    ></scoring-guide>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          image: {
            id: 'wrist-left',
            src: 'tutorial/tutorial_scoring_wrist_left.png',
            alt: 'Left wrist',
          },
        },

        {
          images: [
            {
              id: 'wrist-left',
              src: 'tutorial/tutorial_scoring_wrist_left.png',
              alt: 'Left wrist',
              isCorrect: true,
            },
            {
              id: 'wrist-right',
              src: 'tutorial/tutorial_scoring_wrist_right.png',
              alt: 'Right wrist',
              isCorrect: false,
            },
          ],
          selectedImage: null,
          showFeedback: false,
        },

        {
          image: {
            id: 'wrist-left',
            src: 'tutorial/tutorial_scoring_wrist_left.png',
            alt: 'Left wrist',
          },
          feedbackImage: {
            id: 'wrist-left',
            src: 'tutorial/tutorial_scoring_wrist_left_arrow.png',
            alt: 'Left wrist with feedback',
          },
          assessment: {
            radius: null,
            ulna: null,
            total: null,
          },
          wristCorrectValues: {
            radius: 0.5,
            ulna: 1,
            total: 1.5,
          },
          showFeedback: false,
        },

        {
          images: [
            {
              id: 'knee-left',
              src: 'tutorial/left-knee.png',
              alt: 'Left knee',
              isCorrect: true,
            },
            {
              id: 'knee-right',
              src: 'tutorial/right-knee.png',
              alt: 'Right knee',
              isCorrect: true,
            },
          ],
          selectedImage: null,
          showFeedback: false,
        },

        {
          image: {
            id: 'knee-right',
            src: 'tutorial/tutorial_scoring_knee_right.png',
            alt: 'Right knee',
          },
          feedbackImage: {
            id: 'knee-right',
            src: 'tutorial/tutorial_scoring_knee_right_arrow.png',
            alt: 'Right wrist with feedback',
          },
          assessment: {
            femur: null,
            femurMulti: null,
            tibia: null,
            tibiaMulti: null,
            total: null,
          },
          kneeCorrectValues: {
            femur: 1,
            femurMulti: 1,
            tibia: 1,
            tibiaMulti: 0.5,
            total: 1.5,
          },
          showFeedback: false,
        },

        {
          kneeScore: 1.5,
          wristScore: 1.5,
          input: null,
          showFeedback: true,
        },
      ],
    }
  },

  computed: {
    tutorial() {
      return this.$t('tutorial')
    },
    feedback() {
      return this.$t('feedback')
    },
    pagination() {
      return this.$t('pagination')
    },
    button() {
      return this.$t('button')
    },
    imgAlt() {
      return this.$t('imgAlt')
    },
    currentPage() {
      // Current page indexed at 1
      return parseInt(this.$route.query.page)
    },
    pagesCount() {
      return this.pages.length
    },
    showPracticeButton() {
      /*
        Assumes practice button is shown only after
        the feedback on final page is shown.
      */
      return this.pages[this.pages.length - 1].showFeedback
    },
  },
  beforeMount() {
    // Navigate to first page if not defined
    if (!this.$route.query.page) {
      this.$router.replace({ query: { page: 1 } })
    }
  },
  methods: {
    linkGen(pageNum) {
      return {
        query: { page: pageNum },
      }
    },
    playAudio(selected) {
      const allAudio = document.getElementsByTagName('audio')
      const allPause = document.getElementsByClassName('pause-button')
      const allPlay = document.getElementsByClassName('play-button')
      const selectedAudio = document.getElementById(selected)
      const playButton = document.getElementById('play' + selected)
      const pauseButton = document.getElementById('pause' + selected)

      if (selectedAudio.paused) {
        for (const currAudio of allAudio) {
          currAudio.pause()
        }
        for (const currPause of allPause) {
          currPause.style.display = 'none'
        }
        for (const currPlay of allPlay) {
          currPlay.style.display = 'block'
        }
        selectedAudio.play()
        playButton.style.display = 'none'
        pauseButton.style.display = 'block'
      } else {
        selectedAudio.pause()
        playButton.style.display = 'block'
        pauseButton.style.display = 'none'
      }
    },
    pauseAudio() {
      const allAudio = document.getElementsByTagName('audio')
      const allPause = document.getElementsByClassName('pause-button')
      const allPlay = document.getElementsByClassName('play-button')
      for (const currAudio of allAudio) {
        currAudio.pause()
        currAudio.currentTime = 0
      }
      for (const currPause of allPause) {
        currPause.style.display = 'none'
      }
      for (const currPlay of allPlay) {
        currPlay.style.display = 'block'
      }
    },
    audioEnded(selected) {
      const playButton = document.getElementById('play' + selected)
      const pauseButton = document.getElementById('pause' + selected)
      playButton.style.display = 'block'
      pauseButton.style.display = 'none'
    },
  },
}
</script>

<style lang="scss" scoped>
.tutorial-header {
  position: relative;
  height: 17px;

  h2 {
    position: absolute;
    top: 0;
    height: 36px;
    width: 208px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $navy;
    font-size: rem(16px);
    color: $white;
    text-transform: uppercase;
    font-weight: bold;
    @include media-breakpoint-down(xs) {
      width: rem(80px);
      font-size: rem(12px);
      top: 8px;
      height: rem(22px);
    }
  }

  .btn-primary {
    position: absolute;
    top: 0;
    right: 15px;
    height: 36px;
    background-color: $white;
    border: 1px solid $dark-grey;
    color: $dark-grey;
    font-size: rem(16px);
    display: flex;
    align-items: center;
    white-space: nowrap;
    @include media-breakpoint-down(xs) {
      font-size: rem(11px);
      top: 8px;
      height: rem(22px);
    }

    img {
      margin-left: 8px;
      @include media-breakpoint-down(xs) {
        width: rem(4px);
      }
    }
  }
}

.assessment-layout-tutorial {
  ::v-deep .assessment-title {
    color: $dark-grey;
  }

  ::v-deep .total-number {
    width: rem(36px);
    height: rem(36px);
    border-radius: 0;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $purple;
      font-weight: 600;
      font-size: rem(18px);
    }
    &.active {
      background: $white;
    }
    &.active-total {
      background: $purple;
      span {
        color: $white;
      }
    }
    &.correct {
      background: $light-green;
    }
  }

  ::v-deep .multiplier-container {
    align-items: flex-start !important;
    @include media-breakpoint-down(xs) {
      &:before {
        left: rem(-44px);
      }
      padding-left: rem(10px);
    }
  }

  ::v-deep .group-label-multiplier {
    @include media-breakpoint-down(xs) {
      display: none;
    }
  }
}

section {
  background-image: linear-gradient(180deg, rgba(0, 52, 89, 0.2), $white 50%);
  border-top-width: 4px;
  border-bottom-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-style: solid;
  border-image: linear-gradient(90deg, $navy, $green) 1;
  min-height: 436px;
  padding: 40px 20px 20px;
  color: $navy;
  @include media-breakpoint-only(xs) {
    padding: 35px 25px 25px;
  }

  h3 {
    font-size: rem(40px);
    line-height: rem(42px);
    font-weight: bold;
    width: 70%;
    margin-bottom: 0;
    @include media-breakpoint-down(xs) {
      font-size: (36px);
      width: 100%;
    }
  }

  p {
    font-size: rem(16px);
    line-height: rem(22px);
    margin-bottom: rem(8px);
    @include media-breakpoint-down(xs) {
      font-size: rem(14px);
    }
  }

  .short-stroke {
    // width: 47%;
    margin: rem(8px) 0;
    background-color: none;
  }

  .tips {
    background-color: $white;
    border: 1px solid $light-grey;
    padding: 15px;
    // min-height: 380px;

    h4 {
      color: $navy;
      font-size: rem(16px);
      text-transform: uppercase;
      font-weight: bold;
      margin: 0;
      margin-bottom: 20px;
    }

    .tip {
      display: flex;
      align-items: center;
      flex-direction: row;
      margin-bottom: 25px;
      &:last-child {
        margin-bottom: 0;
      }
      .text {
        font-size: rem(12px);
        line-height: rem(14px);
        color: $dark-grey;
        padding: 0 5px;

        .show-xs {
          display: none;
          @include media-breakpoint-down(sm) {
            display: inline;
          }
        }

        .show-md {
          display: none;
          @include media-breakpoint-up(md) {
            display: inline;
          }
        }

        strong {
          color: $navy;
        }
      }

      &.reverse {
        flex-direction: row-reverse;
      }
    }
  }

  .audio-instructions {
    margin: 0 auto;
    margin-top: rem(25px);
    align-items: center;
    @include media-breakpoint-down(xs) {
      align-items: initial;
    }
    .img-container {
      margin-right: rem(10px);
      width: rem(50px);
      @include media-breakpoint-down(xs) {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
    }
  }

  .btn-scoring-guide {
    background-color: $white;
    color: $purple;
    border: 1px solid $purple;
    text-transform: uppercase;
    width: 251px;
    height: 28px;
    font-size: rem(14px);
    line-height: rem(16px);
    padding: 0;
    margin: 16px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 12px;
      height: 12px;
      margin-left: 8px;
    }
  }

  .image-selection {
    padding: 0 15px;
    ::v-deep button {
      outline: 5px solid $black !important;
    }

    ::v-deep button:hover:not([disabled]) {
      outline: 5px solid $purple-select !important;

      img {
        // hide green border
        border: transparent !important;
      }
    }

    ::v-deep .active {
      outline: 5px solid $purple-select !important;

      img {
        // hide green border
        border: transparent !important;
      }
    }
  }

  // Tap to zoom pill
  ::v-deep .vh--message-bottom {
    // bottom: 375px;
    bottom: 92%;
  }

  ::v-deep .vh--message {
    font-size: 10px;
    line-height: 10px;
    padding: 2px 7px;
  }
  ::v-deep .vh--icon {
    display: none;
  }

  .thats-right,
  .not-quite {
    font-size: rem(16px);
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    @include media-breakpoint-only(xs) {
      line-height: rem(16px);
      margin: 1rem 0;
    }

    img {
      margin-right: 5px;
    }
  }
  .thats-right {
    color: $light-green;
  }

  .not-quite {
    color: $mustard;
  }

  .instructions {
    font-size: rem(28px);
    line-height: rem(32px);
    font-weight: 600;

    @include media-breakpoint-down(xs) {
      font-size: rem(18px);
      line-height: rem(24px);
    }

    &.smaller {
      font-size: rem(18px);
      line-height: rem(24px);
      font-weight: 600;
    }
  }

  .instruction-complete {
    a {
      color: $purple;
      font-weight: 600;
    }
  }

  .feedback {
    p {
      color: $dark-grey;
    }
  }

  .info-buttons {
    display: flex;
    align-items: flex-end;
    margin-bottom: 17px;

    .info {
      margin-right: 14px;
    }

    .play-button {
      cursor: pointer;
    }
  }

  @include media-breakpoint-down(xs) {
    .info,
    .play-button,
    .pause-button {
      width: 35px;
    }
  }

  .border-right {
    border-right: 1px solid #dee2e6 !important;
    @include media-breakpoint-down(xs) {
      border-right: 0px solid #dee2e6 !important;
    }
  }
}

.nav-separator {
  background-color: $white;
  hr {
    margin: 0 auto;
    width: calc(100% - 60px);
    background-color: $dark-grey;
  }
}

.border-top-final {
  border-top: 1px solid $dark-grey;
}

nav {
  background-color: $white;
  border-image: linear-gradient(90deg, $navy, $green) 1;
  border-bottom-width: 4px;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-style: solid;
  margin-bottom: 25px;
  #navArrowLeft {
    margin-right: 5px;
  }
  #navArrowRight {
    margin-left: 5px;
  }
  span {
    &:hover {
      color: $light-green;
    }
  }
}

#page-2 {
  ::v-deep .play-button.btn-inner {
    margin: 10px 0;
  }
}

#page-2,
#page-4 {
  ::v-deep .btn-feedback {
    width: 100%;
  }
  ::v-deep .feedback-btn-container {
    display: block;
  }
}

#page-3,
#page-5 {
  ::v-deep .btn-feedback {
    margin: rem(16px) 0;
    width: 180px;
    @include media-breakpoint-down(xs) {
      width: 100%;
    }
  }
  ::v-deep .feedback-btn-container {
    @include media-breakpoint-down(xs) {
      width: 100%;
    }
  }
}

// ANIMATIONS
.icon {
  position: relative;
  // border: 1px solid red;
  .circle {
    opacity: 0;
    animation: pulse 2s ease-in 2s infinite;
    border: 1px solid $navy;
    border-radius: 50%;
    transform-origin: center center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    pointer-events: none;

    &.i {
      width: 63px;
      height: 63px;

      @include media-breakpoint-down(xs) {
        width: 35px;
        height: 35px;
      }
    }

    &.play {
      width: 65px;
      height: 65px;

      @include media-breakpoint-down(xs) {
        width: 35px;
        height: 35px;
      }
    }
  }
}

@keyframes pulse {
  0% {
    opacity: 0;
    transform: scale(1);
  }

  15% {
    opacity: 0.4;
  }

  100% {
    opacity: 0;
    transform: scale(1.4);
  }
}

#skip-modal {
  ::v-deep .modal-footer {
    justify-content: center;
  }

  .modal-content {
    .modal-body {
      p {
        font-size: rem(18px);
        text-align: center;

        &.warning {
          font-weight: 600;
          font-size: rem(28px);
          line-height: rem(32px);
          color: $navy;
        }
      }
    }
    .skip-footer {
      display: flex;
      align-items: center;
      justify-content: center;

      @include media-breakpoint-only(xs) {
        flex-direction: column;
      }

      button,
      a {
        background-color: $white;
        text-transform: uppercase;
        font-size: rem(14px);
        line-height: rem(18px);
        font-weight: 600;

        @include media-breakpoint-only(xs) {
          width: 100%;
        }

        &.yes {
          border: 1px solid $purple;
          color: $purple;
          margin-right: 1rem;

          @include media-breakpoint-only(xs) {
            margin: 0 0 1rem;
          }
        }

        &.no {
          border: 1px solid $light-green;
          color: $light-green;

          @include media-breakpoint-only(xs) {
            margin: 0 0 1rem;
          }
        }
      }
    }
  }
}

::v-deep .tooltip-inner {
  background-color: $navy;
  color: $white;
  font-size: rem(14px);
  line-height: rem(16px);
  z-index: 100;
  padding: 0.75rem;
  text-align: left;
  min-width: 210px;
}

::v-deep .arrow::before {
  border-bottom-color: $navy;
}

.br-xs {
  display: none;
  @include media-breakpoint-only(xs) {
    display: block;
  }
}
</style>
