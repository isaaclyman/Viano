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
    registerNote (note) {
      this.toRegister.push(note)
    },
    registerSequence (sequence) {
      this.toRegister.push(sequence)
    },
    registerChord (chord) {
      this.toRegister.push(chord)
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
