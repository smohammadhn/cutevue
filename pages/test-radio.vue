<template>
  <div class="center">
    <cv-radio v-model="selected" selected-value="male" group="gender"
      >اقا</cv-radio
    >
    <cv-radio v-model="selected" selected-value="female" group="gender"
      >خانم</cv-radio
    >
    <cv-radio v-model="selected" selected-value="unknown" group="gender"
      >نامشخص</cv-radio
    >
    {{ selected }}
  </div>
</template>

<script>
export default {
  name: 'TestButton',
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
