<template>
  <span class="badge">{{ text }}</span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'به زودی'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.badge {
  width: fit-content;
  height: fit-content;
  background: $color-warning;
  padding: 0.3rem 0.7rem;
  border-radius: 50px;
  color: $fontColorLight;
  font-size: 80%;
  display: grid;
  place-items: center;
}
</style>
