<template>
  <div class="center">
    <cv-data-table
      :rows="testData"
      :headers="headers"
      shadow
      max-height="500px"
    />
  </div>
</template>

<script>
export default {
  name: 'TestDataTable',
  data() {
    return {
      headers: [
        { text: 'کد', value: 'id' },
        { text: 'مشخصات', value: 'title' },
        { text: 'توضیحات', value: 'snippet' },
        { text: 'وضعیت', value: 'status' }
      ],
      testData: [
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        },
        {
          id: 452684,
          title: 'test title',
          snippet: 'test description',
          status: 'active'
        }
      ]
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
