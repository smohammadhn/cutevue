<template>
  <div class="nav-drawer-container">
    <!-- Secondary Navigation Drawer -->
    <cv-nav-secondary :class="SecondaryNavClasses" :data="secondaryNavData">
      <span class="secondary-nav-icon" v-html="secondaryNavData.icon" />
    </cv-nav-secondary>
    <!-- Primary Navigation Drawer -->
    <div class="primary-nav-drawer">
      <!-- Navigation Toggler -->
      <div class="nav-toggler-container">
        <svg
          :class="SecondaryNavClasses"
          class="nav-toggler"
          height="30"
          viewBox="0 0 24 24"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
          @click="clipSecondaryNavDrawer"
        >
          <path
            d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"
          />
          <path
            d="M13.293 6.293L7.586 12 13.293 17.707 14.707 16.293 10.414 12 14.707 7.707z"
          />
        </svg>
      </div>
      <!-- Items -->
      <ul>
        <li
          v-for="menuItem in menuItems"
          :key="menuItem.title"
          ref="items"
          @click="secondaryNavDataUpdate(menuItem)"
        >
          <b />
          <b />
          <cv-tooltip left>
            <template #content>
              <span class="primary-nav-icon" v-html="menuItem.icon" />
            </template>
            {{ menuItem.title }}
          </cv-tooltip>
        </li>
        <!-- log out Button -->
        <li @click="logout">
          <cv-tooltip left>
            <template #content>
              <span class="primary-nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M2 12L7 16 7 13 16 13 16 11 7 11 7 8z" />
                  <path
                    d="M13.001,2.999c-2.405,0-4.665,0.937-6.364,2.637L8.051,7.05c1.322-1.322,3.08-2.051,4.95-2.051s3.628,0.729,4.95,2.051 s2.051,3.08,2.051,4.95s-0.729,3.628-2.051,4.95s-3.08,2.051-4.95,2.051s-3.628-0.729-4.95-2.051l-1.414,1.414 c1.699,1.7,3.959,2.637,6.364,2.637s4.665-0.937,6.364-2.637c1.7-1.699,2.637-3.959,2.637-6.364s-0.937-4.665-2.637-6.364 C17.666,3.936,15.406,2.999,13.001,2.999z"
                  />
                </svg>
              </span>
            </template>
            خروج
          </cv-tooltip>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  props: {
    menuItems: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      clipped: true,
      secondaryNavData: this.menuItems[0]
    }
  },
  computed: {
    /**
     * Dynamic class of second navigation drawer
     * @return {object}
     */
    SecondaryNavClasses() {
      return {
        clipped: this.clipped
      }
    }
  },
  mounted() {
    this.$refs.items[0].classList.add('selected')
  },
  methods: {
    clipSecondaryNavDrawer() {
      this.clipped = !this.clipped
    },

    /**
     * updates the content of second navbar and activates the corresponding item (hover effect sticks)
     * @param {object} menuItem - information of a single item of navbar
     */
    secondaryNavDataUpdate(menuItem) {
      this.secondaryNavData = menuItem
      this.clipped = false

      this.resetSelection()
      this.$refs.items[menuItem.id].classList.add('selected')
    },

    /**
     * resets the activation of items (hover effect)
     */
    resetSelection() {
      for (let i = 0; i < this.$refs.items.length; i++) {
        this.$refs.items[i].classList.remove('selected')
      }
    },

    /**
     * resets the activation of items (hover effect).
     */
    logout() {
      this.$store
        .dispatch('user/logout')
        .then(() => {
          this.$router.replace('/')
        })
        .catch((e) => {
          // ignore
        })
    }
  }
}
</script>

<style lang="scss">
@import 'assets/styles/variables';

// reset browser defaults
* {
  box-sizing: border-box;
}

ul,
li {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

// custom styles
.nav-drawer-container {
  display: flex;
  position: sticky;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 1;
  width: fit-content;
}

.primary-nav-drawer {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: $primaryNavDrawerWidth;
  background-color: $primaryNavDrawerBackgroundColor;
  transition: 0.5s ease;
  z-index: 50;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    flex-grow: 1;
    margin-top: 20px;
    border-right: 5px solid $primaryNavDrawerBackgroundColor;

    li {
      position: relative;
      border-radius: 10px;
      list-style-type: none;
      transition: 0.3s ease;
      padding: 5px;
      margin-left: 5px;

      &:hover {
        background-color: $fontColorLight;
      }

      &:hover .primary-nav-icon {
        fill: $primaryNavDrawerBackgroundColor;
      }

      &.selected {
        background: $secondaryNavDrawerBackgroundColor;
        border-radius: 0 25px 25px 0;
        padding: 11px 5px;
        margin-left: 0;
      }

      &.selected .primary-nav-icon {
        fill: $fontColorLight;
      }

      &:last-child {
        margin-top: auto;
        margin-bottom: 1rem;
      }

      &.selected b {
        position: absolute;
        width: 100%;
        height: 20px;
        left: 0;
        background: $secondaryNavDrawerBackgroundColor;
        z-index: -1;

        &::before {
          content: '';
          position: absolute;
          width: 100%;
          top: 0;
          right: 0;
          height: 100%;
          background: $primaryNavDrawerBackgroundColor;
        }

        &:nth-child(1) {
          top: -20px;
          &::before {
            border-bottom-left-radius: 15px;
          }
        }

        &:nth-child(2) {
          bottom: -20px;
          &::before {
            border-top-left-radius: 15px;
          }
        }
      }
    }
  }
}

.nav-toggler-container {
  display: grid;
  place-items: center;
  margin-top: 10px;

  .nav-toggler {
    fill: $fontColorLight;
    transition: 0.3s ease-in-out;
    transform: rotate(180deg);

    &.clipped {
      transform: rotate(0);
    }
  }
}

.primary-nav-icon {
  display: grid;
  place-items: center;
  fill: $fontColorLight;

  svg {
    width: 30px;
    height: 30px;
  }
}

/*  -----------------*/

.secondary-nav-icon {
  width: 100%;
  min-width: 160px;
  display: inline-grid;
  place-items: center;
  margin-top: 3rem;
  fill: $fontColorLight;

  svg {
    width: 100px;
    height: 100px;
  }
}
</style>
