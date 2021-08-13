<template>
  <div class="secondary-nav-drawer">
    <!-- this -data is for preventing line wrap when is clipping  -->
    <div class="secondary-nav-drawer-data">
      <!-- icon -->
      <slot />
      <!-- title -->
      <div class="secondary-nav-drawer__title">
        {{ data.title }}
      </div>
      <!-- dot dot dot -->
      <div class="secondary-nav-drawer__dotDotDot">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 10 12 10zM18 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S19.1 10 18 10zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S7.1 10 6 10z"
          />
        </svg>
      </div>
      <!-- items -->
      <ul class="secondary-nav-drawer__ul">
        <li
          v-for="subItem in data.subItems"
          :key="subItem.title"
          class="secondary-nav-drawer__ul__li"
          :class="subItem.comingSoon ? 'comingSoon' : ''"
        >
          <nuxt-link
            :to="subItem.path"
            class="link"
            :class="subItem.comingSoon ? 'comingSoon' : ''"
          >
            <b />
            <b />
            <cv-badge v-if="subItem.comingSoon">به زودی</cv-badge>
            <span class="title">{{ subItem.title }}</span>
            <div v-if="!subItem.comingSoon" class="triangle" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondaryNavDrawer',
  props: {
    data: {
      type: Object,
      default() {
        return {
          title: 'پیشفرض',
          path: '#',
          comingSoon: false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.secondary-nav-drawer {
  height: 100%;
  background-color: $secondaryNavDrawerBackgroundColor;
  transition: 0.5s ease;
  color: $fontColorLight;
  overflow-y: auto;
  overflow-x: hidden;
  width: $secondaryNavDrawerWidth;

  &-data {
    min-width: $secondaryNavDrawerWidth;
  }

  &__title {
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  &__dotDotDot {
    display: grid;
    place-items: center;
    fill: $fontColorLight;
  }

  &__ul {
    list-style-type: none;

    .link {
      position: relative;
      margin: 1rem;
      padding: 0.5rem;
      display: flex;
      text-align: right;
      align-items: center;
      color: $fontColorLight;
      justify-content: flex-end;
      border-radius: 10px;
      transition: 0.3s ease;

      &:hover,
      &.nuxt-link-exact-active {
        background-color: $fontColorLight;
        color: $fontColorDark;

        b {
          position: absolute;
          width: 100%;
          height: 16px;
          background: $panelBackground;
          left: 0;

          &:nth-child(1) {
            top: -16px;
          }
          &:nth-child(2) {
            bottom: -16px;
          }

          &::before {
            content: '';
            position: absolute;
            right: 0;
            width: 100%;
            height: 100%;
            background: $secondaryNavDrawerBackgroundColor;
            transition: 0.3s ease;
          }
        }

        .triangle {
          border-left-color: $secondaryNavDrawerBackgroundColor;
          transform: rotate(180deg);
          margin-left: 0.7rem;
        }
      }

      &.nuxt-link-exact-active {
        margin-left: 0;
        border-radius: 0 10px 10px 0;

        b {
          z-index: 1;

          &:nth-child(1) {
            &::before {
              border-bottom-left-radius: 15px;
            }
          }
          &:nth-child(2) {
            &::before {
              border-top-left-radius: 15px;
            }
          }
        }
      }

      &.comingSoon {
        justify-content: space-between;
        pointer-events: none;
        opacity: 0.8;
      }
    }

    .title {
      display: grid;
      place-items: center;
    }

    .triangle {
      width: 0px;
      height: 0px;
      border-top: 5px solid transparent;
      border-left: 10px solid #fff;
      border-bottom: 5px solid transparent;
      margin-left: 0.3rem;
      transition: 0.3s ease-out;
    }
  }
}

.secondary-nav-drawer.clipped {
  opacity: 0;
  width: 0;
}
</style>
