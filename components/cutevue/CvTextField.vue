<template>
  <div class="wrapper">
    <div class="input-data">
      <!-- input -->
      <input
        :value="value"
        type="text"
        name="textInput"
        class="textInput"
        required
        @input="$emit('input', $event.target.value)"
      />
      <!-- label -->
      <label v-if="!!placeholder" class="input-label" for="textInput">
        {{ placeholder }}
        <span v-if="!!isRequiredText">{{ isRequiredText }}</span>
      </label>
      <!-- underline -->
      <div class="underline" :class="{ accent }"></div>
      <!-- loading slider -->
      <div v-if="loading" class="slider">
        <div class="subline inc"></div>
        <div class="subline dec"></div>
      </div>
    </div>
    <!-- warning text -->
    <div class="warning">
      {{ warningText }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    accent: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    isRequiredText: {
      type: String,
      default: ''
    },
    rules: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    /**
     * Checks all the rules, to see if they are false (valid)
     * @returns {String} the warning text of the rule (when not false)
     */
    warningText() {
      for (const i in this.rules) {
        if (this.rules[i] !== false) return this.rules[i]
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

* {
  box-sizing: border-box;
}
.wrapper {
  text-align: right;
  min-width: 10ch;
  max-width: 50ch;
  height: 3.4rem;
  margin-top: 0.9rem;

  .input-data {
    background-color: $panelBackground;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
    position: relative;
    transition: all 0.3s ease;

    .textInput {
      text-align: inherit;
      width: 100%;
      border: none;
      border-bottom: 2px solid silver;
      outline: none;
      padding: 0.5rem 1rem;

      &:focus ~ .input-label,
      &:valid ~ .input-label {
        top: -10%;
        right: 0;
        opacity: 1;
        font-size: 0.7rem;
        background-color: $panelBackground;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }

      &:focus ~ .underline,
      &:valid ~ .underline {
        width: 100%;
      }

      &:hover .warning {
        font-size: 5rem;
      }
    }

    .input-label {
      position: absolute;
      transform: translateY(-50%);
      right: 5%;
      top: 50%;
      pointer-events: none;
      opacity: 0.8;
      transition: all 0.3s ease;
      padding: 0 0.5rem;
      white-space: nowrap;
      color: $fontColorDark;
      border-radius: 5px;

      > span {
        color: $color-warning;
        font-weight: bold;
      }
    }

    .underline {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 2px;
      width: 0;
      background-color: $color-primary;
      z-index: 10;
      transition: inherit;

      .accent {
        background-color: $color-warning;
      }
    }
  }

  .warning {
    margin-right: 1rem;
    color: $color-warning;
    font-size: 0.7rem;
    opacity: 1;
    background-color: inherit !important;
  }
}

//  loading slider
.slider {
  position: absolute;
  width: 100%;
  height: 2px;
  overflow-x: hidden;
  bottom: 0;
  left: 0;

  .subline {
    position: absolute;
    background: dodgerblue;
    height: inherit;
    z-index: 99;
  }
}
.inc {
  animation: increase 2s infinite;
}
.dec {
  animation: decrease 2s 0.5s infinite;
}

@keyframes increase {
  from {
    right: -5%;
    width: 5%;
  }
  to {
    right: 130%;
    width: 100%;
  }
}
@keyframes decrease {
  from {
    right: -80%;
    width: 80%;
  }
  to {
    right: 110%;
    width: 10%;
  }
}
</style>
