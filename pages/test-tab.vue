<template>
  <div class="center">
    <cv-tab v-model="selected" :menu-items="menuItems" />
    v-model binded value: {{ selected }}
  </div>
</template>

<script>
export default {
  name: 'TestTab',
  data() {
    return {
      menuItems: [
        { title: 'Home', value: 'home' },
        { title: 'Contact', value: 'contact' },
        { title: 'Information', value: 'info' },
        { title: 'Sales', value: 'sales' }
      ],
      selected: null
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
