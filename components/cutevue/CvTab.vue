<template>
  <div class="parent">
    <ul id="nav">
      <!-- primary slider activates on click -->
      <li id="slide1"></li>
      <!-- secondary slider activates on hover -->
      <li id="slide2"></li>
      <li
        v-for="(menuItem, index) in menuItems"
        :key="index"
        @click="activateClick($event, menuItem.value)"
        @mouseover="activateHover"
        @mouseout="activateLeave"
      >
        {{ menuItem.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CvTab',
  props: {
    menuItems: {
      type: Array,
      default() {
        return [
          { title: 'information', value: 'info' },
          { title: 'contact', value: 'con' }
        ]
      }
    }
  },
  computed: {
    initialTab() {
      return this.$vnode.elm.children[0].children[2]
    }
  },
  mounted() {
    // SETS the initial slider width
    this.initialWidthCalculator()
    this.$emit('input', this.menuItems[0].value)

    // CORRECTS the initial slider width
    setTimeout(() => {
      this.initialWidthCalculator()
    }, 500)
  },
  methods: {
    /**
     * Finds the clicked li and activates it
     * (sets the width and the position of the PRIMARY slider relative to that li)
     * @param {PointerEvent} e - click $event
     * @param {String} target - the value to be sent to the user on update event
     */
    activateClick(e, to) {
      const slider1 = this.$vnode.elm.children[0].children[0]
      const li = e.target
      slider1.style.width = li.clientWidth + 'px'
      slider1.style.left = li.offsetLeft + 'px'

      // sends the name of the selected component/path back to parent
      // (notify which one is clicked)
      this.$emit('input', to)
    },

    /**
     * Finds the hovered li and activates it
     * (sets the width and the position of the SECONDARY slider relative to that li)
     * @param {PointerEvent} e - mouseover $event
     */
    activateHover(e) {
      const slider2 = this.$vnode.elm.children[0].children[1]
      const li = e.target
      slider2.style.width = li.clientWidth + 'px'
      slider2.style.left = li.offsetLeft + 'px'
      slider2.classList.add('squeeze')
    },

    /**
     * Smooth leave effect on mouseout
     */
    activateLeave() {
      const slider2 = this.$vnode.elm.children[0].children[1]
      slider2.classList.remove('squeeze')
    },

    /**
     * Selecting the first li and activating it
     * (sets the width and the position of the PRIMARY slider relative to that li)
     */
    initialWidthCalculator() {
      const slider1 = this.$vnode.elm.children[0].children[0]
      slider1.style.width = this.initialTab.clientWidth + 'px'
      slider1.style.left = this.initialTab.offsetLeft + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

* {
  box-sizing: border-box;
}

.parent {
  width: 100%;
}

#nav {
  font-weight: bold;
  border: none;
  position: relative;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style-type: none;
  background: $toolbarBackground;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 8px 0;

  #slide1,
  #slide2 {
    position: absolute;
    display: inline-block;
    height: 2em;
    border-radius: 10px;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1.05);
  }

  #slide1 {
    background-color: $panelBackground;
    z-index: 2;
  }

  #slide2 {
    opacity: 0;
    background: #ddd;
    z-index: 1;

    &.squeeze {
      opacity: 1;
      transform: scale(0.9);
    }
  }

  li {
    margin: 0px;
    position: relative;
    padding: 0.2rem 0.6rem;
    font-size: 1.1rem;
    border: none;
    outline: none;
    color: #333;
    display: inline-block;
    text-decoration: none;
    z-index: 3;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 80px;
    text-align: center;
  }
}
</style>
