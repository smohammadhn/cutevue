<template>
  <div class="center">
    <cv-button v-for="i in 5" :key="i" :loading="test">
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
    <cv-button @click="test = !test">
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
import CvButton from '~/components/cutevue/CvButton.vue'
export default {
  name: 'Test',
  components: { CvButton },
  data() {
    return {
      test: false,
    }
  },
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
