<template>
  <div id="app">
    <div class="container">
      <router-link :to="{ name: 'Home' }">
        <img src="./assets/logo.png" />
      </router-link>
      <router-view />
    </div>
  </div>
</template>

<style>
@import 'assets/css/style.css';
</style>
