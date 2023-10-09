<template>
  <div class="app__content">
    <NavTabVue/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavTabVue from './components/NavTab.vue';
export default {
  components: {
    NavTabVue
  }
}
</script>

<style>
  .app {
    max-width: 100vw;
    margin: 0;
  }

  .app__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Inter", "Arial", sans-serif;
  }
</style>
