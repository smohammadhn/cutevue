<template>
  <div class="center">
    <cv-badge>soon</cv-badge>
    <cv-badge>به زودی</cv-badge>
    <cv-badge small>99</cv-badge>
    <cv-badge small>1</cv-badge>
  </div>
</template>

<script>
export default {
  name: 'TestBadge'
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
