<template>
  <span>
    <slot></slot>
  </span>
</template>

<script>
export default {
  created () {
    if (this.measure < 0) {
      throw new Error(`Invalid measure. Expected a measure of 0 or greater. Instead received: ${this.measure}`)
    }
  },
  data () {
    return {
      toRegister: []
    }
  },
  inject: ['registerMeasure'],
  methods: {
    registerNote (noteFn) {
      this.toRegister.push(noteFn())
    },
    registerSequence (sequenceFn) {
      this.toRegister.push(sequenceFn())
    },
    registerChord (chordFn) {
      this.toRegister.push(chordFn())
    }
  },
  mounted () {
    this.toRegister.forEach(content => this.registerMeasure(this.measure, content))
  },
  props: {
    measure: {
      required: false,
      default: 0,
      type: Number
    }
  },
  provide () {
    return {
      registerChord: this.registerChord,
      registerNote: this.registerNote,
      registerSequence: this.registerSequence
    }
  }
}
</script>

<style>

</style>
