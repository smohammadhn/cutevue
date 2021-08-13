<template>
  <div class="center">
    <div>
      Hover on the info icon:
      <cv-hint-tooltip :content="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestHintTooltip',
  data() {
    return {
      content: [
        'this is a test String',
        'and here is another line',
        'and this is a looooooooooooooooooooooooooong test String'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.center {
  position: relative;
  padding: 1rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: grid;
    place-items: center;
  }
}
</style>
