<template>
  <div class="cv-text-area">
    <textarea
      :rows="rows"
      :style="{ resize: resize, width: width }"
      :value="value"
      :maxlength="maxChars"
      :placeholder="placeholder"
      class="cv-text-area__body"
      @input="$emit('input', $event.target.value)"
    />
    <div class="cv-text-area__underline"></div>
    <!-- counter -->
    <div v-if="counter" class="cv-text-area__counter">{{ value.length }}</div>
    <!-- clear btn -->
    <cv-icon-close class="cv-text-area__clear" @click="$emit('input', '')" />
  </div>
</template>

<script>
export default {
  name: 'CvTextArea',
  props: {
    value: {
      type: String,
      default: ''
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
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

* {
  box-sizing: border-box;
}

textarea {
  border: none;
  outline: none;
}

.cv-text-area {
  direction: rtl;
  position: relative;
  background-color: $panelBackground;
  box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
  width: 100%;
  border-radius: 5px 5px 0 0;

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
    background: $color-primary;
    position: absolute;
    top: 5px;
    left: 5px;
    border-radius: 50%;
    transition: 0.2s ease;

    &:hover {
      transform: rotate(90deg);
    }
  }
}
</style>
