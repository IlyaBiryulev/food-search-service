<template>
  <div class="slider">
    <div class="slider__wrapper" :style="{ 'margin-left': '-' + (100 * currentSlide) + '%'}">
      <slider-item
        v-for="item in sliderData"
        :key="item.id"
        :itemData="item"
      />
    </div>
    <button @click="prevSlide" class="slider__btn slider__btn_prev"></button>
    <button @click="nextSlide" class="slider__btn slider__btn_next"></button>
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
    height: 500px;
    overflow: hidden;
    position: relative;
  }

 .slider__wrapper {
    display: flex;
    transition: all ease .3s;
  }

 .slider__btn {
    width: 48px;
    height: 48px;
    border: none;
    opacity: .8;
    background: transparent;
    cursor: pointer;
  }

 .slider__btn_next {
    background: url('../assets/img/next.png') no-repeat center;
  }

 .slider__btn_prev {
    background: url('../assets/img/prev.png') no-repeat center;
  }

 .slider:hover .slider__btn_prev {
    position: absolute;
    left: 0;
    bottom: 250px;
  }

 .slider:hover .slider__btn_next {
    position: absolute;
    right: 0;
    bottom: 250px;
  }

  @media screen and (max-width: 820px) {
    .slider {
      width: 600px;
    }
  }

  @media screen and (max-width: 619px) {
    .slider {
      width: 300px;
      height: 300px;
    }

    .slider:hover .slider__btn_prev {
      bottom: 150px;
    }

    .slider:hover .slider__btn_next {
      bottom: 150px;
    }
  }
</style>