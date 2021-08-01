<template>
  <transition name="snack">
    <div class="snackbar" v-if="show">
      <p>{{ message }}</p>
      <cv-button @click="show = false" outline :background="color"
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
  created: function () {
    this.$store.watch(
      (state) => state.snackbar.snackMessage,
      () => {
        const msg = this.$store.state.snackbar.snackMessage
        if (msg !== '') {
          this.show = true
          this.message = this.$store.state.snackbar.snackMessage
          this.color = this.$store.state.snackbar.snackColor
          this.$store.commit('snackbar/setSnack', { content: '', color: '' })

          setTimeout(() => {
            this.show = false
          }, 4000)
        }
      }
    )
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.snackbar {
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
