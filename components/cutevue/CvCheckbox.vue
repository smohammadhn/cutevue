<template>
  <div class="cv-checkbox">
    <input v-model="selected" type="checkbox" @change="onSelect" />
    <label><slot /></label>
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
    checkedValue: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selected: false
    }
  },
  mounted() {
    if (this.checked) {
      this.selected = true
      this.onSelect()
    }
  },
  methods: {
    onSelect() {
      const result = this.value
      if (this.selected) {
        result.push(this.checkedValue)
      } else {
        result.splice(result.indexOf(this.checkedValue), 1)
      }
      this.$emit('input', result)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

* {
  box-sizing: border-box;
}

.cv-checkbox {
  display: flex;
  align-items: center;
  gap: 1rem;
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
    border-color: $color-warning;
    border-style: solid;
  }

  // square
  &:before {
    width: 20px;
    height: 20px;
    border-width: 2px;
    border-style: solid;
    border-radius: 3px;
    background-color: $color-primary;
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
    background-color: $color-primary;
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
