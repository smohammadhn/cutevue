<template>
  <div class="center">
    <cv-checkbox v-model="selected" checked-value="js" checked>
      جاوااسکریپت
    </cv-checkbox>
    <cv-checkbox v-model="selected" checked-value="py"> پایتون </cv-checkbox>
    <cv-checkbox v-model="selected" checked-value="la"> لاراول </cv-checkbox>
    v-model binded value: {{ selected }}
  </div>
</template>

<script>
export default {
  name: 'TestCheckbox',
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
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  padding: 1rem;
  height: 100vh;
}
</style>
