<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-dialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false);
    }
  }
}
</script>

<style>
  .dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0, .5);
    position: fixed;
    display: flex;
  }

  .dialog__content {
    margin: auto;
    background: #fff;
    border-radius: 12px;
    min-width: 800px;
    min-height: 300px;
    padding: 15px 15px;
  }

  .dialog__content-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: center;
    column-gap: 10px;
    row-gap: 20px;
  }

  .dialog__title {
    font-weight: 500;
    font-size: 50px;
    line-height: 45px;
    margin: 0;
  }

  .dialog__img {
    width: 100%;
    height: 300px;
    border-radius: 12px;
  }

  .dialog__text {
    font-weight: 500;
    font-size: 20px;
    line-height: 15px;
    margin: 20px 0 0;
  }
</style>