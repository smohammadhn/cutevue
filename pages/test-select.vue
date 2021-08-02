<template>
  <div class="center">
    <cv-select
      v-model="test"
      :items="items"
      placeholder="اسامی"
      label="name"
      required
    />
  </div>
</template>

<script>
export default {
  name: 'TestSelect',
  data() {
    return {
      items: [
        { name: 'محسن', id: 212 },
        { name: 'محمد', id: 786 },
        { name: 'سعید', id: 999 }
      ],
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
