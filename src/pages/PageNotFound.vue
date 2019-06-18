<template>
  <div class="col-full">
    <h1>Not Found</h1>
    <p>
      Oooops, we could not found what you are looking for. Why don't you
      <router-link :to="{ name: 'Home' }">go home instead?</router-link>
    </p>
  </div>
</template>

<script></script>

<style scoped>
h1 {
  font-size: 60px;
}

p {
  font-size: 32px;
  font-weight: 100;
}

div {
  text-align: center;
}
</style>
