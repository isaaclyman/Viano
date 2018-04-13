<template>
  <div class="player">
    <div class="controls">
      <div class="play-control" :class="{ 'stop': playing }" @click="togglePlay()"></div>
    </div>
    <div class="title" v-text="title"></div>
    <div v-show="false">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import blackswan from 'blackswan-js'

export default {
  created () {
    if (!this.timeSignature ||
      this.timeSignature.length !== 2 ||
      this.timeSignature.filter(num => typeof num !== 'number').length !== 0) {
        throw new Error(
          `Invalid time signature. Expected an array of format [4, 4]. Instead received: ${this.timeSignature}`
        )
      }

    if (this.tempo <= 0) {
      throw new Error(`Invalid tempo. Expected a tempo above 0 bpm. Instead received: ${this.tempo}`)
    }

    this.song = blackswan.song(this.title)
    this.song.setTempo(this.tempo)
    this.song.setTimeSignature(...this.timeSignature)
  },
  data () {
    return {
      playing: false,
      song: null
    }
  },
  methods: {
    registerMeasure (measure, content) {
      this.song.at(measure).plays(content)
    },
    togglePlay () {
      if (!this.playing) {
        this.song.play()
      } else {
        this.song.stop()
      }
      this.playing = !this.playing
    }
  },
  props: {
    tempo: {
      required: false,
      default: 120,
      type: Number
    },
    timeSignature: {
      required: false,
      default: () => [4, 4],
      type: Array
    },
    title: {
      required: false,
      default: 'Untitled',
      type: String
    }
  },
  provide () {
    return {
      registerMeasure: this.registerMeasure
    }
  }
}
</script>

<style>
html, body {
  border: none;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
</style>

<style scoped lang="scss">
.player {
  background-color: #EEE;
  display: flex;
  height: 3em;
  margin: 1px;
  width: 15em;
}

.controls {
  align-items: center;
  border-right: 1px solid #AAA;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: .3em;
  width: 3em;
}

$triangle-hypotenuse: 0.7em;
$triangle-side: 1em;
$transition-speed: 300ms;

.play-control {
  background-color: transparent;
  border-bottom: $triangle-hypotenuse solid transparent;
  border-left: $triangle-side solid #888;
  border-right: 0 solid transparent;
  border-top: $triangle-hypotenuse solid transparent;
  cursor: pointer;
  display: block;
  transition:
    border-bottom-width $transition-speed ease-out,
    border-left-width $transition-speed,
    border-right-width $transition-speed,
    border-top-width $transition-speed ease-out,
    height $transition-speed ease-out;
  height: 0;
  width: 0;
}

.play-control.stop {
  border-bottom-width: 0;
  border-top-width: 0;
  height: 1em;
}

.title {
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
}
</style>
