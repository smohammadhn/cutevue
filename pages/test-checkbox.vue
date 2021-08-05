<template>
  <div class="center">
    <cv-checkbox v-model="selected" checked-value="js" checked>
      جاوااسکریپت
    </cv-checkbox>
    <cv-checkbox v-model="selected" checked-value="py"> پایتون </cv-checkbox>
    {{ selected }}
  </div>
</template>

<script>
export default {
  name: 'TestButton',
  data() {
    return {
      selected: []
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
