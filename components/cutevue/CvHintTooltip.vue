<template>
  <div class="cardHintWrapper">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24">
      <path
        d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"
      ></path>
      <path d="M11 11H13V17H11zM11 7H13V9H11z"></path>
    </svg>
    <div class="cardHint" :class="pos">
      <div class="topSection">{{ title }}</div>
      <div class="body">
        <ul>
          <li v-for="line in content" :key="line">
            {{ line }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardHint',
  props: {
    content: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    },
    pos: {
      type: String,
      default: 'top-right'
    },
    title: {
      type: String,
      default: 'راهنما'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

* {
  box-sizing: border-box;
}

.cardHintWrapper {
  direction: rtl;
  position: relative;
  white-space: nowrap;
  z-index: 90;
  display: inline-block;
  font-size: 1rem;
  height: 31px;
  width: 31px;

  .icon {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    fill: $color-secondary;
    animation: iconAnimation 1.5s linear infinite;
    animation-delay: 1s;

    &:hover ~ .cardHint {
      padding: 1rem 1rem 0 1rem;
      border-radius: 15px;
      font-size: 100%;
      opacity: 1;
    }
  }
  @keyframes iconAnimation {
    0% {
      transform: rotate(0) scale(1);
    }
    15% {
      transform: rotate(20deg) scale(1.1);
    }
    30% {
      transform: rotate(0) scale(1.2);
    }
    40% {
      transform: rotate(-20deg) scale(1.1);
    }
    50% {
      transform: rotate(0deg) scale(1);
    }
    100% {
      transform: rotate(0deg) scale(1);
    }
  }

  .icon::before,
  .icon::after {
    margin: 0;
  }

  .cardHint {
    position: absolute;
    border: 2px solid #eee;
    color: #1d1d1d;
    background-color: $panelBackground;
    overflow: hidden;
    border-radius: 50%;
    border-top-right-radius: 15px;
    transition: all 0.5s ease;
    font-size: 0;
    opacity: 0;

    .topSection {
      border-bottom: 2px solid #eee;
      padding-bottom: 0.5rem;
      padding-right: 1rem;
      text-align: start;
    }

    .body {
      padding-right: 1rem;
      text-align: start;

      ul {
        list-style-type: square;

        li {
          margin: 0.7rem 0;
        }
      }
    }

    &.top-left {
      top: 0;
      left: 0;
    }
    &.top-right {
      top: 0;
      right: 0;
    }
    &.bottom-left {
      bottom: 0;
      left: 0;
    }
    &.bottom-right {
      bottom: 0;
      right: 0;
    }
  }
}
</style>
