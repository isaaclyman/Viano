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
    if (typeof this.value === 'string' && !isNaN(fractionStringToNum(this.value))) {
      this.noteValue = fractionStringToNum(this.value)
    } else if (typeof this.value === 'number' && this.value > 0) {
      this.noteValue = this.value
    } else {
      throw new Error(`Invalid note value. Expected a value of format "1/4". Instead received: ${this.value}`)
    }

    if (this.repeat <= 0) {
      throw new Error(`Invalid note repeat value. Expected a value above 0. Instead received: ${this.repeat}`)
    }
  },
  data () {
    return {
      noteValue: null
    }
  },
  inject: ['registerNote'],
  mounted () {
    for (let i = 0; i < this.repeat; i++) {
      this.registerNote(() => blackswan.note(this.name, this.noteValue, ...this.styles))
    }
  },
  props: {
    name: {
      required: true,
      type: String
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
