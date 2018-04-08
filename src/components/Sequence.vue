<template>
  <span>
    <slot></slot>
  </span>
</template>

<script>
import blackswan from 'blackswan-js'

export default {
  data () {
    return {
      toRegister: []
    }
  },
  inject: ['registerSequence'],
  methods: {
    registerChord (chord) {
      this.toRegister.push(chord)
    },
    registerNote (note) {
      this.toRegister.push(note)
    },
    registerRest (rest) {
      this.toRegister.push(rest)
    }
  },
  mounted () {
    const fullSequence = this.toRegister.slice()
    if (this.repeat) {
      for (let i = 0; i < this.repeat; i++) {
        fullSequence.push.apply(fullSequence, this.toRegister)
      }
    }
    this.registerSequence(blackswan.sequence(fullSequence))
  },
  props: {
    repeat: {
      required: false,
      type: Number
    }
  },
  provide () {
    return {
      registerChord: this.registerChord,
      registerNote: this.registerNote,
      registerRest: this.registerRest
    }
  }
}
</script>

<style>

</style>
