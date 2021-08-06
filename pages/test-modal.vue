<template>
  <div class="center">
    <cv-button @click="modalActive = true">open modal</cv-button>
    <cv-modal v-model="modalActive"></cv-modal>
  </div>
</template>

<script>
export default {
  name: 'TestModal',
  data() {
    return {
      modalActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
.center {
  display: grid;
  place-items: center;
  padding: 1rem;
  height: 100vh;
}
</style>
