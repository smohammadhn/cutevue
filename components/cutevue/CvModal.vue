<template>
  <transition name="modal-fade">
    <div v-if="value" class="modal-backdrop" @click.self="close">
      <div class="modal">
        <header class="modal-header">
          <slot name="header"> {{ title }} </slot>
          <cv-icon-close class="btn-close" @click="close" />
        </header>

        <section class="modal-body">
          <slot name="body"></slot>
        </section>

        <footer class="modal-actions">
          <slot name="actions"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CvModal',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'عنوان مدال'
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.modal-backdrop {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
}

.modal {
  background: $panelBackground;
  border-radius: 10px;
  box-shadow: 20px 20px 50px rgba($color: #000000, $alpha: 0.5);
  display: flex;
  flex-direction: column;
  min-height: fit-content;
  min-width: 50%;
  overflow-y: auto;
  padding: 0.5rem 1rem 1rem 1rem;
  position: relative;

  &-header,
  &-actions {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0.5rem 1rem;
  }

  &-header {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid $color-warning;
    color: $color-warning;
  }

  &-body {
    padding: 20px 10px;
  }

  &-actions {
    position: fixed;
    bottom: 0;
    left: 0;
  }
}

.btn-close {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  background: $color-warning;
  transition: 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }
}

// Transitiion effect
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.2s ease;
}
</style>
