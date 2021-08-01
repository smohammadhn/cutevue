<template>
  <v-select v-bind="$attrs" v-on="$listeners">
    <!-- Dynamically inherit slots from parent -->
    <!--    <template v-for="slot in parentSlots" #[slot]>-->
    <!--      <slot :name="slot" />-->
    <!--    </template>-->
    <template v-for="slot in parentSlots">
      <slot :name="slot" />
    </template>
  </v-select>
</template>
<script>
export default {
  name: 'CvSelect',
  inheritAttrs: false,
  computed: {
    parentSlots(props) {
      console.log(Object.keys(props.$slots))
      return props.$slots
      // return Object.keys(props.$slots)
    }
  }
}
</script>
