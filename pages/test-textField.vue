<template>
  <div class="center">
    <cv-text-field v-model="val1" placeholder="نام خانوادگی" loading />
    {{ val1 }}
    <cv-money-text-field v-model="val2" placeholder="مقدار پول" />
    {{ val2 }}
  </div>
</template>

<script>
export default {
  name: 'TestSelect',
  data() {
    return {
      val1: null,
      val2: null
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
