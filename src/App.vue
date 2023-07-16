<template>
    <div class="app__content">
      <places />
    </div>
</template>

<script>
import Places from './components/Places.vue';
export default {
  components: {
    Places
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
    font-weight: 400;
  }
</style>
