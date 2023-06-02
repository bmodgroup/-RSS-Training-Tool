export const state = () => ({
  disclaimer: true,
})

export const mutations = {
  setDisclaimerScreen(state, payload) {
    state.disclaimer = payload
  },
}
