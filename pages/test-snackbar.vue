<template>
  <div class="center">
    <cv-button @click="$notifier.error('An error occured')">error</cv-button>
    <cv-button @click="$notifier.warning('It\'s a warning')">warning</cv-button>
    <cv-button @click="$notifier.info('Extra information')">info</cv-button>
    <cv-button @click="$notifier.success('Hooooooray!!')">success</cv-button>
    <cv-snackbar />
  </div>
</template>

<script>
export default {
  name: 'TestSnackbar',
  data() {
    return {}
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
