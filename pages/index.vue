<template>
  <div class="parent">
    <!-- place the test component here -->
    <cv-button @click="$router.push('/test-button')">Button</cv-button>
    <cv-button @click="$router.push('/test-dataTable')">DataTable</cv-button>
    <cv-button @click="$router.push('/test-select')">Select</cv-button>
    <cv-button @click="$router.push('/test-textField')">TextField</cv-button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      test: false
    }
  }
}
</script>

<style scoped>
.parent {
  display: grid;
  place-items: center;
  height: 100vh;
  grid-template-columns: repeat(4, 1fr);
}
</style>
