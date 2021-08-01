<template>
  <div class="stage">
    <div class="dot-floating"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.dot-floating {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: $color-primary;
  animation: dotFloating 3s infinite cubic-bezier(0.15, 0.6, 0.9, 0.1);
}

.dot-floating::before,
.dot-floating::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
}

.dot-floating::before {
  left: -12px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: $color-primary;
  animation: dotFloatingBefore 3s infinite ease-in-out;
}

.dot-floating::after {
  left: -24px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: $color-primary;
  animation: dotFloatingAfter 3s infinite cubic-bezier(0.4, 0, 1, 1);
}

@keyframes dotFloating {
  0% {
    left: calc(-50% - 5px);
  }
  75% {
    left: calc(50% + 105px);
  }
  100% {
    left: calc(50% + 105px);
  }
}

@keyframes dotFloatingBefore {
  0% {
    left: -50px;
  }
  50% {
    left: -12px;
  }
  75% {
    left: -50px;
  }
  100% {
    left: -50px;
  }
}

@keyframes dotFloatingAfter {
  0% {
    left: -100px;
  }
  50% {
    left: -24px;
  }
  75% {
    left: -100px;
  }
  100% {
    left: -100px;
  }
}

.stage {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
}
</style>
