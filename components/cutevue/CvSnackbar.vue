<template>
  <transition name="snack">
    <div v-if="show" class="snackbar">
      <p>{{ message }}</p>
      <cv-button outline :background="color" @click="show = false"
        >بستن</cv-button
      >
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
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'snackbar/setSnack') {
        this.show = false
        this.message = state.snackbar.content
        this.color = state.snackbar.color
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
  direction: rtl;
  position: fixed;
  left: 50%;
  padding: 1rem;
  background: rgba($color: #000000, $alpha: 0.1);
  border-radius: 10px 10px 0 0;
  z-index: 999;
  transform: translateX(-50%);
  min-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(2px);
  color: $fontColorDark;
  font-weight: bold;
  animation: snk-show 1s ease 1;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  top: 20px;

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
@keyframes snk-underline {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
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

.snack-leave-active {
  transition: opacity 0.5s;
}
.snack-leave-to {
  opacity: 0;
}
</style>
