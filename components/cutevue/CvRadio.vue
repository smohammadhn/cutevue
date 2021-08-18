<template>
  <div class="cv-radio">
    <input
      type="radio"
      :name="group"
      :checked="selected"
      @change="$emit('input', selectedValue)"
    />
    <label v-if="label !== ''">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'CvRadio',
  props: {
    value: {
      type: String,
      default: ''
    },
    selectedValue: {
      type: String,
      default: ''
    },
    selected: {
      type: Boolean,
      default: false
    },
    group: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ''
    }
  },
  mounted() {
    if (this.selected) {
      this.$emit('input', this.selectedValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

// never change box-sizing: content-box
*,
*::after,
*::before {
  box-sizing: content-box;
}

.cv-radio {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1rem;
  direction: ltr;
  height: 25px;
}

// hiding original input
input {
  position: relative;
  cursor: pointer;
  width: 0px;
  height: 0px;

  // custom styles to :before and :after
  &:hover:before {
    border-width: 3.5px;
  }

  &:checked:before,
  &:checked:after,
  &:before,
  &:after {
    content: '';
    transform: translate(-50%, -50%);
    position: absolute;
    transition: all 0.1s ease;
    border-color: $color-secondary;
    border-style: solid;
  }

  // square
  &:before {
    width: 17px;
    height: 17px;
    border-width: 2px;
    border-style: solid;
    border-radius: 3px;
    background-color: $panelBackground;
  }

  // floater
  &:after {
    width: 0px;
    height: 0px;
    border-width: 0;
    top: -10px;
    left: 20px;
  }

  // circle
  &:checked:before {
    border-width: 3.5px;
    width: 17px;
    height: 17px;
    border-radius: 20px;
    background-color: $panelBackground;
  }

  // tick
  &:checked:after {
    border-width: 0 3.5px 3.5px 0;
    width: 4px;
    height: 9px;
    transform: rotate(45deg) translate(-100%, -20%);
    top: 0;
    left: 0;
  }
}
</style>
