<template>
  <div class="center">
    <cv-tooltip top>
      <template #content>
        <cv-button>this button has tooltip</cv-button>
      </template>
      tooltip
    </cv-tooltip>
  </div>
</template>

<script>
export default {
  name: 'TestTooltip',
  data() {
    return {
      selected: ''
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
