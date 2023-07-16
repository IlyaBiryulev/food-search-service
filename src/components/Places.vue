<template>
  <div class="places">
    <cafe-list />
  </div>
</template>

<script>
import CafeList from './CafeList.vue';
export default {
 components: {
    CafeList
 }
}
</script>

<style>
  .places {
    width: 750px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
  }
</style>