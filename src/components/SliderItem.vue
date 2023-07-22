<template>
  <div class="slider-item">
    <img :src="itemData.photo" :alt="itemData.name" class="slider-item__img">
  </div>
</template>

<script>
export default {
  props: {
    itemData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>
  .slider-item__img {
    min-width: 800px;
    height: 500px;
    border-radius: 10px 0 0 10px;
  }
</style>