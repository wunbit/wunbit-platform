<template>
  <div v-if="asyncDataStatus_ready" class="col-full push-top">
    {{ user.nickname }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import asyncDataStatus from '@/mixins/asyncDataStatus'

export default {
  mixins: [asyncDataStatus],
  computed: {
    ...mapGetters({
      user: 'auth/authUser'
    })
  },
  created() {
    this.asyncDataStatus_fetched()
  }
}
</script>
