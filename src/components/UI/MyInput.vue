<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  /* width: 585px; */
  border: 1px solid #000;
  padding: 5px 5px;
}

/* @media screen and (max-width: 781px) {
  .input {
  width: 400px;
}
} */

</style>