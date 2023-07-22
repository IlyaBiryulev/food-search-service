<template>
  <div class="slider">
    <div class="slider__wrapper" :style="{ 'margin-left': '-' + (100 * currentSlide) + '%'}">
      <slider-item
        v-for="item in sliderData"
        :key="item.id"
        :itemData="item"
      />
    </div>
    <button @click="prevSlide">prev</button>
    <button @click="nextSlide">next</button>
  </div>
</template>

<script>
import SliderItem from '@/components/SliderItem.vue'
export default {
  components: {
    SliderItem
  },
  props: {
    sliderData: {
      type: Array,
      default: () => []
    },
    interval: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentSlide: 0
    }
  },
  methods: {
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
    },
    nextSlide() {
      if(this.currentSlide >= this.sliderData.length - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++
      }
    }
  },
  mounted() {
    if(this.interval > 0) {
      let vm = this;
      setInterval(function() {
        vm.nextSlide()
      }, vm.interval)
    }
  }
}
</script>

<style>
 .slider {
  width: 800px;
  overflow: hidden;
 }

 .slider__wrapper {
  display: flex;
  transition: all ease .3s;
 }
</style>