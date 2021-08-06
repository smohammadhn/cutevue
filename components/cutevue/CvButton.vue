<template>
  <div
    class="cv-btn"
    :style="{ background: background }"
    :class="{
      primary,
      'cv-secondary': secondary,
      accent,
      stretch,
      'cv-outline': outline
    }"
    @click="blink"
  >
    <!-- ripple effect overlay -->
    <div></div>
    <!-- loading three dots -->
    <div v-if="loading" class="cv-btn-loading">
      <div class="dot dot1"></div>
      <div class="dot dot2"></div>
      <div class="dot dot3"></div>
    </div>
    <!-- if not loading -->
    <div v-show="!loading" class="cv-btn-content" :class="{ reverse }">
      <!-- button text -->
      <slot />
      <!-- line -->
      <span v-if="$scopedSlots.hasOwnProperty('icon')" class="vertical-line" />
      <!-- icon  -->
      <div v-if="$scopedSlots.hasOwnProperty('icon')" class="icon-wrapper">
        <slot name="icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CvButton',
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: ''
    },
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    accent: {
      type: Boolean,
      default: false
    },
    stretch: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      btnText: ''
    }
  },
  mounted() {
    /* setting the initial width and height of the button 
    so that when it is loading, the shape of the button won't change */
    const btn = this.$vnode.elm
    btn.style.width = this.stretch
      ? '100%'
      : btn.children[1].clientWidth + 40 + 'px'
    btn.style.height = btn.children[1].clientHeight + 15 + 'px'
  },
  methods: {
    /**
     * Activates the blink effect for 0.7 second
     * @param {PointerEvent} e
     */
    blink(e) {
      // setting the click position
      const overlay = this.$vnode.elm.childNodes[0]
      overlay.style.left = `${e.offsetX}px`
      overlay.style.top = `${e.offsetY}px`
      // enable overlay. Then, wait for 0.7sec and disable it
      overlay.classList.add('overlay')
      setTimeout(() => {
        overlay.classList.remove('overlay')
      }, 700)

      // Activating @click event for the component
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

* {
  box-sizing: border-box;
}

.cv-btn {
  position: relative;
  background: $color-primary;
  color: $fontColorLight;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease;
  font-size: 1rem;

  &.cv-outline {
    border: 2px solid $fontColorLight;
  }
  &.primary {
    background: $color-primary;
  }
  &.cv-secondary {
    background: $color-secondary !important;
  }
  &.accent {
    background: $color-accent;
  }
  &.stretch {
    width: 100%;
  }

  &-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
    pointer-events: none;

    &.reverse {
      flex-direction: row-reverse;
    }

    .vertical-line {
      width: 2px;
      height: 24px;
      background: $fontColorLight;
      border-radius: 2px;
      transition: all 0.3s ease-out;
      margin: 0 0.2rem;
    }
  }

  &:active {
    transform: scale(0.99);
  }
  &:hover {
    opacity: 0.9;

    .vertical-line {
      margin: 0 0.4rem;
    }
  }
}

// ripple effect
.overlay {
  position: absolute;
  border-radius: 50%;
  background: #fff;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  animation: blink 0.7s linear 1;
  opacity: 0;
}
@keyframes blink {
  0% {
    opacity: 0.5;
    width: 0;
    height: 0;
  }
  100% {
    opacity: 0;
    width: 400px;
    height: 400px;
  }
}

// loading svg
.cv-btn-loading {
  display: flex;
  flex-direction: row;
  align-items: center;

  .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #e5e5e5;
    animation: dotblink 1.5s linear infinite;
    transform: scale(0);
  }
  .dot1 {
    animation-delay: 0s;
  }
  .dot2 {
    animation-delay: 0.25s;
    margin: 0 0.1rem;
  }
  .dot3 {
    animation-delay: 0.5s;
  }
}

@keyframes dotblink {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

// icon
.icon-wrapper {
  fill: $fontColorLight;
  max-width: 24px;
  max-height: 24px;
  svg {
    width: 24px;
    height: 24px;
  }
}
</style>
