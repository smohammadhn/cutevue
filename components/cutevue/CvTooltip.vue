<template>
  <div class="cv-tooltip">
    <slot name="content"></slot>
    <span class="cv-tooltip-data" :class="{ top, bottom, left, right }">
      <span><slot /></span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    top: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.cv-tooltip {
  position: relative;

  &-data {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    background-color: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
    color: #000;
    z-index: 101;

    span {
      min-width: 122px;
      text-align: center;
    }
    &.top {
      transform: translate(-50%, 0);
      top: -150%;
      left: 50%;
    }
    &.bottom {
      transform: translate(-50%, 0);
      bottom: -150%;
      left: 50%;
    }
    &.left {
      transform: translate(0, -50%);
      top: 50%;
      right: 150%;
    }
    &.right {
      transform: translate(0, -50%);
      top: 50%;
      left: 150%;
    }
  }

  &:hover {
    .cv-tooltip-data {
      opacity: 1;
      width: 122px;
      height: 35px;
    }
  }
}
</style>
