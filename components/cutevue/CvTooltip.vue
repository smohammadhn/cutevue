<template>
  <div class="cv-tooltip">
    <slot name="content"></slot>
    <span class="cv-tooltip-data" :class="{ top, bottom, left, right }">
      <slot />
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
* {
  box-sizing: border-box;
}

.cv-tooltip {
  position: relative;

  &-data {
    position: absolute;
    opacity: 0;
    height: 0;
    min-width: fit-content;
    white-space: nowrap;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
    color: #000;
    z-index: 101;
    padding: 0 1rem;

    &.top {
      transform: translate(-50%, 0);
      top: calc(-100% - 10px);
      left: 50%;
    }
    &.bottom {
      transform: translate(-50%, 0);
      bottom: calc(-100% - 10px);
      left: 50%;
    }
    &.left {
      transform: translate(0, -50%);
      top: 50%;
      right: calc(100% + 20px);
    }
    &.right {
      transform: translate(0, -50%);
      top: 50%;
      left: calc(100% + 20px);
    }
  }

  &:hover {
    .cv-tooltip-data {
      opacity: 1;
      height: 2rem;
    }
  }
}
</style>
