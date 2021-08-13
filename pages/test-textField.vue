<template>
  <div class="center">
    <cv-text-field v-model="val1" placeholder="نام خانوادگی" loading />
    v-model binded value: {{ val1 }}
    <cv-money-text-field v-model="val2" placeholder="مقدار پول" />
    v-model binded value: {{ val2 }}
  </div>
</template>

<script>
export default {
  name: 'TestTextField',
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
