<template>
  <div class="slider-item">
    <img :src="itemData.photo" :alt="itemData.name" class="slider-item__img">
    <p class="slider-item__title">{{ itemData.name }}</p>
    <p class="slider-item__address">{{ itemData.address }}</p>
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
  .slider-item {
    min-width: 800px;
    position: relative;
  }

  .slider-item__title {
    color: #fff;
    position: absolute;
    top: 0;
    left: 10px;
    font-size: 25px;
    font-weight: 900;
  }

  .slider-item__address {
    color: #fff;
    position: absolute;
    top: 35px;
    left: 10px;
    font-size: 20px;
    font-weight: 900;
    opacity: .7;
  }

  .slider-item__img {
    width: 100%;
    height: 500px;
    border-radius: 10px 0 0 10px;
  }

  @media screen and (max-width: 1007px) {
    .slider-item__img {
      border-radius: 10px 10px 0 0;
    }
  }

  @media screen and (max-width: 820px) {
    .slider-item {
      min-width: 600px;
    }
  }

  @media screen and (max-width: 619px) {
    .slider-item {
      min-width: 300px;
    }

    .slider-item__img {
      height: 300px;
    }

    .slider-item__title {
    font-size: 13px;
  }

  .slider-item__address {
    font-size: 10px;
  }
  }
</style>