<template>
  <div class="parent">
    <ul id="nav-1">
      <li id="slide1"></li>
      <li id="slide2"></li>
      <li
        v-for="(menuItem, index) in menuItems"
        :key="index"
        @click="activateClick($event, menuItem.to)"
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
  data() {
    return {}
  },
  props: {
    menuItems: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    activateClick(e, target) {
      let slider1 = this.$vnode.elm.children[0].children[0]
      let li = e.srcElement
      slider1.style.width = li.clientWidth + 'px'
      slider1.style.left = li.offsetLeft + 'px'

      // send the name of the component to be shown
      this.$emit('updatecomponent', target)
    },
    activateHover(e) {
      let slider2 = this.$vnode.elm.children[0].children[1]
      let li = e.srcElement
      slider2.style.width = li.clientWidth + 'px'
      slider2.style.left = li.offsetLeft + 'px'
      slider2.style.opacity = 1
      slider2.classList.add('squeeze')
    },
    activateLeave() {
      let slider2 = this.$vnode.elm.children[0].children[1]
      slider2.style.opacity = 0
      slider2.classList.remove('squeeze')
    },
    initialWidthCalculator() {
      let slider1 = this.$vnode.elm.children[0].children[0]
      slider1.style.width = this.initialTab.clientWidth + 'px'
      slider1.style.left = this.initialTab.offsetLeft + 'px'
    }
  },
  mounted() {
    this.initialWidthCalculator()
    setTimeout(() => {
      this.initialWidthCalculator()
    }, 500)
  },
  computed: {
    initialTab() {
      return this.$vnode.elm.children[0].children[2]
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.parent {
  width: 100%;
}
#nav-1 {
  font-weight: bold;
  width: 100%;
  position: relative;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  background: $toolbarBackground;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 8px 0;

  li {
    margin: 0px;
    position: relative;
    padding: 0.2rem 0.6rem;
    font-size: 18px;
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
  }
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
  }
  .squeeze {
    transform: scale(0.9);
  }
}
</style>
