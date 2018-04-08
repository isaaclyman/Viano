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
  },
  data () {
    return {
      noteValue: null
    }
  },
  inject: ['registerRest'],
  mounted () {
    this.registerRest(blackswan.rest(this.noteValue))
  },
  props: {
    value: {
      required: true
    }
  }
}
</script>

<style>

</style>
