<template>
  <div class="center">
    <cv-text-field v-model="test" placeholder="میزان" />
    <!-- <cv-money-text-field v-model="test" placeholder="میزان" /> -->
  </div>
</template>

<script>
export default {
  name: 'TestSelect',
  data() {
    return {
      test: null
    }
  },
  watch: {
    test() {
      console.log('this.test :>> ', this.test)
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
