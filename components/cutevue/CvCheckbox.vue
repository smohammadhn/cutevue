<template>
  <div class="cv-checkbox">
    <input v-model="selected" type="checkbox" @change="onSelect" />
    <label v-if="label !== ''">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'CvCheckbox',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    checkedValue: [String, Object],
    checked: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selected: false
    }
  },
  mounted() {
    /**
     * If check prop is passed,
     * activates the checkbox and updates its binded value (v-model)
     */
    if (this.checked) {
      this.selected = true
      this.onSelect()
    }
  },
  methods: {
    /**
     * Updates the value of the component v-model everytime any changes occur
     */
    onSelect() {
      // make a copy
      const result = this.value
      // if selected then remove the value from array, otherwise add it
      if (this.selected) result.push(this.checkedValue)
      else result.splice(result.indexOf(this.checkedValue), 1)
      // send it for v-model
      this.$emit('input', result)
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

// wrapper
.cv-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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
