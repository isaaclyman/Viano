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
    registerChord (chordFn) {
      this.toRegister.push(chordFn)
    },
    registerNote (noteFn) {
      this.toRegister.push(noteFn)
    },
    registerRest (restFn) {
      this.toRegister.push(restFn)
    }
  },
  mounted () {
    const fullSequenceFns = this.toRegister.slice()
    if (this.repeat) {
      for (let i = 1; i < this.repeat; i++) {
        fullSequenceFns.push.apply(fullSequenceFns, this.toRegister)
      }
    }
    this.registerSequence(() => blackswan.sequence(fullSequenceFns.map(fn => fn())))
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
