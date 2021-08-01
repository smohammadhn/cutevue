<template>
  <div class="parent">
    <!-- place the test component here -->
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      test: false,
    }
  },
  created() {},
  updated() {},
  methods: {},
}
</script>

<style scoped>
.parent {
  display: grid;
  place-items: center;
  height: 100vh;
  padding: 2rem;
}
</style>
