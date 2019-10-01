<template>
  <div v-if="asyncDataStatus_ready" class="col-full push-top">
    <h1>Test Unity game</h1>
    <button @click="changeName">This should change the name</button>
    <unity
      src="/Unity/Build/Fly2WinTest.json"
      width="1600"
      height="900"
      unityLoader="/Unity/Build/UnityLoader.js"
      ref="myInstance"
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
  },

  methods: {
    changeName() {
      this.$refs.myInstance.message("CurrentUser", "VueMessageTest", "Testy")
    },
  },
}
</script>
