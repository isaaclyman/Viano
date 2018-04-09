import Song from './components/Song.vue'
import Part from './components/Part.vue'
import Sequence from './components/Sequence.vue'
import Note from './components/Note.vue'
import Rest from './components/Rest.vue'
import Chord from './components/Chord.vue'

const components = {
  Song, Part, Sequence, Note, Rest, Chord
}

const viano = {
  install (Vue) {
    for (const comp in components) {
      Vue.component(comp, components[comp])
    }
  }
}

export default viano
