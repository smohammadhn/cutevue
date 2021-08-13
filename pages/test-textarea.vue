<template>
  <div class="center">
    <cv-text-area v-model="text" counter resize="both" />
    v-model binded value: {{ text }}
  </div>
</template>

<script>
export default {
  name: 'TestTextArea',
  data() {
    return {
      text: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.center {
  display: grid;
  place-items: center;
  padding: 1rem;
  height: 100vh;
}
</style>
