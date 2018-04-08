import Song from './components/Song.vue'

const viano = {
  install (Vue, options) {
    Vue.component('Song', Song)
  }
}

export default viano
