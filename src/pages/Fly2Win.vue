<template>
  <div v-if="asyncDataStatus_ready" class="col-full push-top">
    <h1>Test Unity game</h1>
    <unity
      src="/Unity/Build/testbuild1.json"
      width="1600"
      height="900"
      unityLoader="/Unity/Build/UnityLoader.js"
    >
    </unity>
  </div>
</template>

<script>
import asyncDataStatus from '@/mixins/asyncDataStatus'
import Unity from 'vue-unity-webgl'

export default {
  components: {
    Unity
  },

  mixins: [asyncDataStatus],

  created() {
    this.asyncDataStatus_fetched()
  }
}
</script>
