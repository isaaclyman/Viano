<template>
  <div id="app">
    <la-cucaracha></la-cucaracha>
    <hot-cross-buns></hot-cross-buns>
  </div>
</template>

<script>
import LaCucaracha from './examples/LaCucaracha.vue'
import HotCrossBuns from './examples/HotCrossBuns.vue'

export default {
  name: 'app',
  components: {
    LaCucaracha,
    HotCrossBuns
  }
}
</script>

<style scoped>

</style>
