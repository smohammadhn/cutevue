<template>
  <transition name="snack">
    <div v-if="show" class="snackbar">
      <!-- message -->
      <p>{{ message }}</p>
      <!-- button -->
      <cv-button outline :background="color" @click="show = false"
        >بستن</cv-button
      >
      <!-- underline -->
      <div class="snack-underline" :style="{ background: color }"></div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: '',
      color: ''
    }
  },
  created() {
    /**
     * Creates a watcher for anytime 'setSnack' mutation is commited
     * when triggered, it updates the data, then shows it for 4 seconds.
     */
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'setSnack') {
        this.message = state.content
        this.color = state.color
        this.show = true
        setTimeout(() => {
          this.show = false
        }, 4000)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

* {
  box-sizing: border-box;
}

.snackbar {
  align-items: center;
  animation: snk-show 1s ease 1;
  backdrop-filter: blur(2px);
  background: rgba($color: #000000, $alpha: 0.1);
  border-left: 2px solid rgba($color: #fff, $alpha: 0.5);
  border-radius: 10px 10px 0 0;
  border-top: 2px solid rgba($color: #fff, $alpha: 0.5);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  color: $fontColorDark;
  direction: rtl;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  left: 50%;
  min-width: 400px;
  padding: 1rem;
  position: fixed;
  top: 20px;
  transform: translateX(-50%);
  z-index: 999;

  p {
    margin: 0;
    text-align: center;
  }

  .snack-underline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    animation: snk-underline 4s linear 1;
  }
}

// underline transition
@keyframes snk-underline {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

// show transition (will only trigger once)
@keyframes snk-show {
  0% {
    top: -100%;
  }
  50% {
    top: 35px;
  }
  100% {
    top: 20px;
  }
}

// hide transition
.snack-leave-active {
  transition: opacity 0.5s;
}
.snack-leave-to {
  opacity: 0;
}
</style>
