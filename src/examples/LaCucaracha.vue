<template>
  <Song title="La cucaracha" :tempo="200" :time-signature="[4, 4]">
    <Part :measure="0">
      <Sequence>
        <Note name="c4" value="1/8" :repeat="3">La cuca</Note>
        <Note name="f4" value="3/8">ra</Note>
        <Note name="a4" value="1/4">cha</Note>
        <Note name="c4" value="1/8" :repeat="3">La cuca</Note>
        <Note name="f4" value="3/8">ra</Note>
        <Note name="a4" value="1/4">cha</Note>
        <Rest value="3/8"></Rest>
        <Note name="f4" value="1/4">ya</Note>
        <Note name="f4" value="1/8">no</Note>
        <Note name="e4" value="1/8" :repeat="2">puede</Note>
        <Note name="d4" value="1/8" :repeat="2">cami</Note>
        <Note name="c4" value="3/8">nar</Note>
      </Sequence>
    </Part>
  </Song>
</template>

<script>
import Song from '../components/Song.vue'
import Part from '../components/Part.vue'
import Sequence from '../components/Sequence.vue'
import Note from '../components/Note.vue'
import Rest from '../components/Rest.vue'

export default {
  components: {
    Song,
    Part,
    Sequence,
    Note,
    Rest
  }
}
</script>

<style>

</style>
