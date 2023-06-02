export { default as Assessment } from '../../components/Assessment.vue'
export { default as DisclaimerScreen } from '../../components/DisclaimerScreen.vue'
export { default as Feedback } from '../../components/Feedback.vue'
export { default as HomeMenuItem } from '../../components/HomeMenuItem.vue'
export { default as ImageSelection } from '../../components/ImageSelection.vue'
export { default as Modal } from '../../components/Modal.vue'
export { default as PageTitle } from '../../components/PageTitle.vue'
export { default as PatientCase } from '../../components/PatientCase.vue'
export { default as Popover } from '../../components/Popover.vue'
export { default as PracticeCase } from '../../components/PracticeCase.vue'
export { default as ScoreInput } from '../../components/ScoreInput.vue'
export { default as ScoringGuide } from '../../components/ScoringGuide.vue'
export { default as SiteFooter } from '../../components/SiteFooter.vue'
export { default as SiteHeader } from '../../components/SiteHeader.vue'
export { default as SiteNav } from '../../components/SiteNav.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
