<template>
  <div class="cv-text-area">
    <textarea
      :rows="rows"
      :style="{ resize: resize, width: width }"
      :value="value"
      :maxlength="maxChars"
      class="cv-text-area__body"
      @input="$emit('input', $event.target.value)"
    />
    <div class="cv-text-area__underline"></div>
    <div v-if="counter" class="cv-text-area__counter">{{ value.length }}</div>
    <div class="cv-text-area__clear">
      <cv-icon-close class="close" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CvTextArea',
  props: {
    value: {
      type: String
    },
    rows: {
      type: Number,
      default: 10
    },
    maxChars: {
      type: Number,
      default: 100
    },
    resize: {
      type: String,
      default: 'none'
    },
    width: {
      type: String,
      default: '100%'
    },
    counter: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.cv-text-area {
  direction: rtl;
  position: relative;
  background-color: $panelBackground;
  box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.3);
  width: fit-content;
  border-radius: 10px 10px 0 0;

  &__body {
    display: block;
    resize: both;
    outline: none;
    padding: 1rem;

    &:focus ~ .cv-text-area__underline {
      transform: scale(1);
    }
  }

  &__underline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: $color-primary;
    transform: scale(0);
    transition: 0.3s ease;
  }

  &__counter {
    position: absolute;
    bottom: 5px;
    left: 8px;
  }

  &__clear {
    position: absolute;
    top: 5px;
    left: 5px;
    border-radius: 50%;

    .close {
      background: $color-primary;
    }
  }
}
</style>
