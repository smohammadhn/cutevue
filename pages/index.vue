<template>
  <div class="parent">
    <!-- place the test component here -->
    <cv-button>
      ورود
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"
          ></path>
        </svg>
      </template>
    </cv-button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {}
  },
  created() {},
  updated() {},
  methods: {},
}
</script>

<style scoped>
.parent {
  outline: 20px solid red;
  display: grid;
  place-items: center;
  height: 100vh;
  padding: 2rem;
}
.test {
  display: block;
  place-items: center;
}
</style>
