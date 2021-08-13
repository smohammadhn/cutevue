<template>
  <span class="badge" :class="{ small }" :style="{ background }">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'CvBadge',
  props: {
    small: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: '#e35e2a'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

* {
  box-sizing: border-box;
}

.badge {
  padding: 0.2rem 0.5rem;
  border-radius: 50px;
  color: $fontColorLight;
  font-size: 0.8rem;
  display: grid;
  place-items: center;

  &.small {
    padding: 0;
    min-width: 20px;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }
}
</style>
