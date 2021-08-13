<template>
  <div class="cv-checkbox">
    <input
      type="radio"
      :name="group"
      :checked="selected"
      @change="$emit('input', selectedValue)"
    />
    <label><slot /></label>
  </div>
</template>

<script>
export default {
  name: 'CvCheckbox',
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

.cv-checkbox {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1rem;
  direction: ltr;
}

// hiding original input
input {
  position: relative;
  cursor: pointer;
  width: 0px;
  height: 0px;

  // custom styles to :before and :after
  &:hover:before {
    border-width: 5px;
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
    width: 20px;
    height: 20px;
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
    border-width: 4px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: $panelBackground;
  }

  // tick
  &:checked:after {
    border-width: 0 4px 4px 0;
    width: 5px;
    height: 10px;
    transform: rotate(45deg) translate(-100%, -20%);
    top: 0;
    left: 0;
  }
}
</style>
