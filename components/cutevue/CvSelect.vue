<template>
  <div class="select" :class="{ expanded }">
    <div class="main" @click.self="onClickMain">
      {{ selected }}
      <!-- toggler -->
      <div class="toggle" @click="onClear">&#9650;</div>
      <!-- underline -->
      <div class="underline" :class="{ expanded }" />
      <!-- loading slider -->
      <div v-if="loading" class="slider">
        <div class="subline inc"></div>
        <div class="subline dec"></div>
      </div>
      <!-- options box -->
      <transition name="sbox">
        <ul v-show="expanded" class="box">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="option"
            @click="onClickOption(item)"
          >
            {{ item[label] }}
          </li>
        </ul>
      </transition>
    </div>
    <!-- warning text -->
    <div v-show="showWarning" class="warning">
      {{ warningText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CvSelect',
  props: {
    warningText: {
      type: String,
      default: 'انتخاب یک مورد اجباریست.'
    },
    items: {
      type: Array,
      default() {
        return []
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selected: {},
      expanded: false,
      showWarning: false
    }
  },
  created() {
    this.selected = this.placeholder
  },
  methods: {
    /**
     * When clicked on the parent div:
     * expands option box, toggles warning message
     */
    onClickMain() {
      if (!this.loading) this.expanded = !this.expanded
      if (this.required && this.selected === {}) this.showWarning = true
    },

    /**
     * When clicked on each option:
     * selects it, collapses option box, toggles clear btn, emits the result
     * @param {Object} item - An option as an Object in this format {name: 'lorem', id: 1}
     */
    onClickOption(item) {
      this.selected = item[this.label]
      this.showWarning = false
      this.expanded = false

      const toggle = this.$vnode.elm.children[0].children[0]
      toggle.style.color = 'red'
      toggle.style.pointerEvents = 'auto'
      toggle.innerText = 'x'

      this.$emit('input', item)
    },

    /**
     * When clicked on each option:
     * Selects it, collapses option box, toggles clear btn, emits the result
     * @param {Object} item - An option as an Object in this format {name: 'lorem', id: 1}
     */
    onClear() {
      this.selected = this.placeholder
      this.showWarning = true

      const toggle = this.$vnode.elm.children[0].children[0]
      toggle.style.color = 'blue'
      toggle.style.pointerEvents = 'none'
      toggle.innerText = '▲'

      this.$emit('input', {})
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

* {
  box-sizing: border-box;
}

ul,
li {
  padding: 0;
  margin: 0;
}

.select {
  position: relative;
  direction: rtl;
  min-width: 200px;
  color: $fontColorDark;
  font-size: 1rem;
  margin-top: 0.9rem;
  height: 3.4rem;

  .main {
    border-radius: 5px;
    background-color: $panelBackground;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
    position: relative;
    cursor: pointer;
    padding: 0.5rem 1rem;

    .toggle {
      font-weight: bolder;
      color: $color-primary;
      width: 25px;
      height: 25px;
      position: absolute;
      display: grid;
      place-items: center;
      top: 50%;
      left: 25px;
      border-radius: 50%;
      pointer-events: none;
      cursor: pointer;
      transition: all 0.5s ease;
      transform: translate(-50%, -50%) rotate(180deg);
    }

    .underline {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 2px;
      width: 0;
      background-color: $color-primary;
      z-index: 10;
      transition: all 0.3s ease;

      &.expanded {
        width: 100%;
      }
    }
  }

  .box {
    list-style-type: none;
    overflow: hidden;
    box-shadow: 0 0 2px rgba($color: #000000, $alpha: 0.1);
    border-radius: 10px;
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 100%;
    transition: all 0.3s ease;
    z-index: 100;
    background: $panelBackground;

    .option {
      padding: 0.3rem;
      border-bottom: 1px solid #e5e5e5;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: all 0.3s ease;
      font-size: 0.9rem;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        backdrop-filter: contrast(80%);
      }
    }
  }

  &.expanded .toggle {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  .warning {
    background-color: transparent !important;
    margin-right: 1rem;
    color: $color-warning;
    font-size: 0.7rem;
    opacity: 1;
  }
}

.sbox-enter-active,
.sbox-leave-active {
  transition: all 0.5s ease;
}
.sbox-enter,
.sbox-leave-to {
  opacity: 0;
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
