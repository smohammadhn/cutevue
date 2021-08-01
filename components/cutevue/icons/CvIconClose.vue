<template>
  <div
    @click="$emit('click', $event)"
    class="close"
    :style="{ borderColor: color }"
  >
    <div class="line1" :style="{ background: color }"></div>
    <div class="line2" :style="{ background: color }"></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style lang="scss" scoped>
.close {
  width: 20px;
  height: 20px;
  border: 1px solid;
  border-radius: 50%;

  .line1,
  .line2 {
    position: absolute;
    height: 10%;
    width: 70%;
    top: 50%;
    left: 50%;
    border-radius: 5px;
  }
  .line1 {
    transform: translate(-50%, -50%) rotate(135deg);
  }
  .line2 {
    transform: translate(-50%, -50%) rotate(45deg);
  }
}
</style>
