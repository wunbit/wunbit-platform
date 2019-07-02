<template>
  <div class="col-full" :class="$style.centered">
    <h1 :class="$style.headingLarge">Not Found</h1>
    <p class="textLarge" :class="$style.textLarge">
      Oooops, we could not found what you are looking for. Why don't you
      <router-link :to="{ name: 'Home' }">go home instead?</router-link>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit('ready')
  }
}
</script>

<style module>
.headingLarge {
  font-size: 60px;
}

.textLarge {
  font-size: 32px;
  font-weight: 100;
}

.centered {
  text-align: center;
}
</style>
