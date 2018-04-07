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


export default {
  beforeCreate () {

  },
  data () {
    return {
      playing: false
    }
  },
  methods: {
    togglePlay () {
      this.playing = !this.playing
    }
  },
  props: {
    title: {
      required: false,
      default: 'Untitled',
      type: String
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
$transition-speed: 200ms;

.play-control {
  background-color: transparent;
  border-bottom: $triangle-hypotenuse solid transparent;
  border-left: $triangle-side solid #888;
  border-right: 0 solid transparent;
  border-top: $triangle-hypotenuse solid transparent;
  cursor: pointer;
  display: block;
  transition:
    border-left-width $transition-speed,
    border-right-width $transition-speed,
    border-top-width $transition-speed,
    height $transition-speed;
  height: 0;
  width: 0;
}

.play-control.stop {
  border-bottom-width: 0;
  border-left-width: 1em;
  border-right-width: 0;
  border-top-width: 0;
  height: 1em;
  width: 0;
}

.title {
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
}
</style>
