<template>
  <Song title="Hot cross buns" :tempo="150" :time-signature="[4, 4]">
    <Part :measure="0">
      <Sequence :repeat="2">
        <Note name="e4" value="1/4">                    Hot
        </Note><Note name="d4" value="1/4">             cross
        </Note><Note name="c4" value="1/4">             buns
        </Note><Rest value="1/4"></Rest>
      </Sequence>
    </Part>
    <Part :measure="2">
      <Sequence>
        <Note name="c4" value="1/8" :repeat="4">        One a penny
        </Note><Note name="d4" value="1/8" :repeat="4"> Two a penny
        </Note><Note name="e4" value="1/4">             Hot
        </Note><Note name="d4" value="1/4">             cross
        </Note><Note name="c4" value="1/4">             buns
        </Note><Rest value="1/4"></Rest>
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
