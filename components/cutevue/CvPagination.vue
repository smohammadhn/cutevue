<template>
  <div class="cv-pagination">
    <!-- item per page input -->
    <div class="row-count">
      <input
        v-model.lazy.number="rowCount"
        type="number"
        name="rowCountInput"
        class="input"
        max="100"
        min="1"
        step="1"
      />
      <label for="rowCountInput">:تعداد سطر ها</label>
    </div>
    <!-- select page input -->
    <div class="current-page">
      <input
        v-model.lazy.number="pageNumber"
        type="number"
        name="currentPageInput"
        class="input"
        :max="Math.ceil(totalRows / rowCount)"
        min="1"
        step="1"
      />
      <label for="currentPageInput">:صفحه</label>
    </div>
    <!-- vertical line -->
    <span class="vertical-line" />
    <!-- last page button -->
    <cv-tooltip top>
      <template #content>
        <div
          class="last-page"
          @click="pageNumber = Math.ceil(totalRows / rowCount)"
        >
          <svg xmlns="http://www.w3.org/2000/svg">
            <path
              d="m16.293 17.707 1.414-1.414L13.414 12l4.293-4.293-1.414-1.414L10.586 12zM7 6h2v12H7z"
            ></path>
          </svg>
        </div>
      </template>
      صفحه ی آخر
    </cv-tooltip>
    <!-- next page button -->
    <cv-tooltip top>
      <template #content>
        <div class="next-page" @click="pageNumber++">
          <svg xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
            ></path>
          </svg>
        </div>
      </template>
      صفحه ی بعد
    </cv-tooltip>
    <!-- table information -->
    <p class="data">
      ردیف {{ (pageNumber - 1) * rowCount + 1 }} تا
      {{ (pageNumber - 1) * rowCount + leftover }} از {{ totalRows }}
    </p>
    <!-- previous page button -->
    <cv-tooltip top>
      <template #content>
        <div class="previous-page" @click="pageNumber--">
          <svg xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
            ></path>
          </svg>
        </div>
      </template>
      صفحه ی قبل
    </cv-tooltip>
    <!-- first page button -->
    <cv-tooltip top>
      <template #content>
        <div class="first-page" @click="pageNumber = 1">
          <svg xmlns="http://www.w3.org/2000/svg" viewport="0 0 24 24">
            <path
              d="m16.293 17.707 1.414-1.414L13.414 12l4.293-4.293-1.414-1.414L10.586 12zM7 6h2v12H7z"
            ></path>
          </svg>
        </div>
      </template>
      صفحه ی اول
    </cv-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    totalRows: {
      type: Number,
      default: 100
    },
    rowsPerPage: {
      type: Number,
      default: 10
    },
    leftover: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      pageNumber: 1,
      rowCount: 0
    }
  },
  watch: {
    pageNumber() {
      if (this.pageNumber < 1) this.pageNumber = 1
      this.checkPreviousPageBtn()
      this.checkNextPageBtn()
      this.updatePage(this.pageNumber, this.rowCount)
    },
    rowCount() {
      if (this.rowCount > 100) this.rowCount = 100
      else if (this.rowCount < 1) this.rowCount = 1
      this.checkPreviousPageBtn()
      this.checkNextPageBtn()
      this.updatePage(this.pageNumber, this.rowCount)
    },
    totalRows() {
      this.checkNextPageBtn()
    }
  },
  created() {
    this.rowCount = this.rowsPerPage
  },
  mounted() {
    this.checkPreviousPageBtn()
    this.checkNextPageBtn()
  },
  methods: {
    /**
     * Sends the updated page information
     */
    updatePage() {
      this.$emit('updatePage', {
        pageNumber: this.pageNumber,
        rowCount: this.rowCount
      })
    },

    /**
     * Disables previous and first button if page number is 1
     */
    checkPreviousPageBtn() {
      const firstPageBtn = this.$vnode.elm.children[6]
      const previousPageBtn = this.$vnode.elm.children[7]
      if (this.pageNumber === 1) {
        previousPageBtn.style.opacity = '0.5'
        previousPageBtn.style.pointerEvents = 'none'
        firstPageBtn.style.opacity = '0.5'
        firstPageBtn.style.pointerEvents = 'none'
      } else {
        previousPageBtn.style.opacity = '1'
        previousPageBtn.style.pointerEvents = 'auto'
        firstPageBtn.style.opacity = '1'
        firstPageBtn.style.pointerEvents = 'auto'
      }
    },

    /**
     * Disables next and last button if page number is max
     */
    checkNextPageBtn() {
      const nextPageBtn = this.$vnode.elm.children[3]
      const lastPageBtn = this.$vnode.elm.children[4]
      const maxPages = Math.ceil(this.totalRows / this.rowCount)

      if (this.pageNumber === maxPages) {
        nextPageBtn.style.opacity = '0.5'
        nextPageBtn.style.pointerEvents = 'none'
        lastPageBtn.style.opacity = '0.5'
        lastPageBtn.style.pointerEvents = 'none'
      } else {
        nextPageBtn.style.opacity = '1'
        nextPageBtn.style.pointerEvents = 'auto'
        lastPageBtn.style.opacity = '1'
        lastPageBtn.style.pointerEvents = 'auto'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.cv-pagination {
  direction: ltr;
  display: flex;
  border-top: 1px solid $color-primary;
  padding: 0.5rem 1rem 0;
  margin: 0.5rem;
  gap: 0.5rem;
  justify-content: center;

  .first-page,
  .last-page,
  .next-page,
  .previous-page {
    display: grid;
    place-items: center;
    background: rgba($color: $color-secondary, $alpha: 0.2);
    padding: 0.2rem;
    border-radius: 10px;

    svg {
      width: 24px;
      height: 24px;
      fill: $color-primary;
    }
  }
  .first-page,
  .previous-page {
    transform: rotate(180deg);
  }

  .data {
    display: grid;
    place-items: center;
    margin: 0 1rem;
    color: $fontColorDark;
  }
  .vertical-line {
    width: 2px;
    background: $color-primary;
    border-radius: 2px;
    transition: all 0.3s ease-out;
  }

  .current-page,
  .row-count {
    margin-right: 1rem;
    .input {
      background: rgba($color: $color-secondary, $alpha: 0.2);
      border-radius: 10px;
      padding: 0.1rem 0rem 0.1rem 0.3rem;
      width: 50px;
      text-align: center;

      &:focus {
        outline: none;
      }
    }
    label {
      color: $fontColorDark;
    }
  }
}
</style>
