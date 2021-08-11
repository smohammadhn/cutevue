<template>
  <div class="center">
    <cv-select
      v-model="test"
      :items="items"
      placeholder="اسامی"
      label="name"
      required
    />
    v-model binded value: {{ test }}
  </div>
</template>

<script>
export default {
  name: 'TestSelect',
  data() {
    return {
      items: [
        { name: 'محسن', id: 1 },
        { name: 'محمد', id: 2 },
        { name: 'سعید', id: 3 },
        { name: 'سید', id: 4 },
        { name: 'امین', id: 5 }
      ],
      test: {}
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
