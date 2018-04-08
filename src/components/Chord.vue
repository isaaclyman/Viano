<template>
  <span></span>
</template>

<script>
import blackswan from 'blackswan-js'

const fractionStringToNum = function (str) {
  var split = str.split('/')
  var result = split.length === 1 ? Number(split[0]) : Number(split[0]) / Number(split[1])
  return result
}

export default {
  created () {
    const notesArr
    if (typeof this.notes === 'string') {
      notesArr = this.notes.split(' ')
    } else if (Array.isArray(this.notes)) {
      notesArr = this.notes
      if (notesArr.filter(n => typeof n !== 'string').length > 0) {
        throw new Error(`Invalid notes for chord. An element in the array was not a string. Received: ${this.notes}`)
      }
    } else {
      throw new Error(
        `Invalid notes for chord. Expected an array or a space-separated list of notes, e.g. "c4 e4 g4". Instead received: ${this.notes}`
      )
    }

    this.chordNotes = notesArr

    if (typeof this.value === 'string' && !isNaN(fractionStringToNum(this.value))) {
      this.noteValue = fractionStringToNum(this.value)
    } else if (typeof this.value === 'number' && this.value > 0) {
      this.noteValue = this.value
    } else {
      throw new Error(`Invalid note value. Expected a value of format "1/4". Instead received: ${this.value}`)
    }

    if (this.repeat <= 0) {
      throw new Error(`Invalid chord repeat value. Expected a value above 0. Instead received: ${this.repeat}`)
    }
  },
  data () {
    return {
      chordNotes: null,
      noteValue: null
    }
  },
  inject: ['registerChord'],
  mounted () {
    for (let i = 0; i < this.repeat; i++) {
      this.registerChord(blackswan.chord(this.chordNotes, this.noteValue, ...this.styles))
    }
  },
  props: {
    notes: {
      required: true
    },
    repeat: {
      required: false,
      default: 1,
      type: Number
    },
    styles: {
      required: false,
      default: () => [],
      type: Array
    },
    value: {
      required: true
    },
  }
}
</script>

<style>

</style>
