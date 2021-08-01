<template>
  <div class="cv-data-table" :class="{ border, shadow }">
    <!-- fixed header -->
    <div class="tr tr-header">
      <div class="td td-numbers th">ردیف</div>
      <div v-for="header in headers" :key="header.text" class="td th">
        {{ header.text }}
      </div>
      <div v-if="hasOptions" class="td td-options th">عملیات</div>
    </div>
    <!-- skeleton page -->
    <div
      v-if="rows.length === 0 && loading"
      class="skeleton"
      :style="{ maxHeight: maxHeight }"
      @mousewheel.prevent
    >
      <span v-for="i in 3" :key="i" class="skeleton-box"></span>
    </div>
    <!-- if no-content section -->
    <div v-if="rows.length === 0 && !loading" class="no-content">
      داده ای وجود ندارد
    </div>
    <!-- loading floating dots -->
    <div v-if="loading" class="loading">
      <cv-floating-dot />
    </div>
    <!-- table rows -->
    <div class="tbody" :style="{ maxHeight: maxHeight }">
      <div
        v-for="(row, index) in rows"
        :key="row.id"
        class="tr"
        @click="onRowClick(row)"
      >
        <!-- numbers column -->
        <div class="td td-numbers">
          {{ (page - 1) * rowsPerPage + index + 1 }}
        </div>
        <!-- rest of the columns -->
        <div
          v-for="header in headers"
          :key="header.value"
          class="td"
          :style="{ textAlign: header.align }"
          @click="onCellClick(row, header.value)"
        >
          <div @mouseenter="checkMarquee" @mouseleave="removeMarquee">
            {{ getObj(row, header.value) }}
          </div>
        </div>
        <!-- Options column -->
        <div v-if="hasOptions" class="td td-options">
          <slot name="options" :rowValue="row" />
        </div>
      </div>
    </div>
    <cv-pagination
      v-if="totalRows > rowsPerPage"
      :total-rows="totalRows"
      :rows-per-page="rowsPerPage"
      :leftover="rows.length"
      @updatePage="$emit('syncPagination', $event)"
    />
  </div>
</template>

<script>
export default {
  props: {
    maxHeight: {
      type: String,
      default: 'auto'
    },
    totalRows: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 1
    },
    rowsPerPage: {
      type: Number,
      default: 1
    },
    headers: {
      type: Array,
      default() {
        return []
      }
    },
    rows: {
      type: Array,
      default() {
        return []
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hasOptions: false
    }
  },
  mounted() {
    this.hasOptions = !!this.$scopedSlots.hasOwnProperty('options')
    this.updateWidths()
  },
  updated() {
    this.updateWidths()
  },
  methods: {
    checkMarquee(e) {
      if (e.srcElement.scrollWidth > e.srcElement.clientWidth) {
        e.srcElement.classList.add('marquee')
      }
    },
    removeMarquee(e) {
      if (e.srcElement.classList.contains('marquee')) {
        e.srcElement.classList.remove('marquee')
      }
    },
    onRowClick(rowValue) {
      this.$emit('click:row', rowValue)
    },
    onCellClick(rowValue, headerValue) {
      this.$emit('click:cell', this.getObj(rowValue, headerValue))
    },
    getObj(row, value) {
      if (!value.includes('.')) {
        return row[value]
      } else {
        let result = 'row'
        value.split('.').forEach((element) => {
          result += `['${element}']`
        })
        return eval(result)
      }
    },
    updateWidths() {
      let widths = '60px'
      this.headers.forEach((e) => {
        if (e.hasOwnProperty('width')) {
          widths += ' ' + e.width
        } else {
          widths += ' 1fr'
        }
      })
      if (this.hasOptions) {
        document.querySelectorAll('.tr').forEach((element) => {
          element.style.gridTemplateColumns = widths + ' 100px'
        })
      } else {
        document.querySelectorAll('.tr').forEach((element) => {
          element.style.gridTemplateColumns = widths
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.cv-data-table {
  direction: rtl;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;

  &.border {
    border: 1px solid $color-primary;
  }

  &.shadow {
    box-shadow: rgba(0, 0, 0, 0.25) 0 0 6px;
  }

  .tr {
    padding: 0.5rem 0;
    display: grid;
    justify-content: space-between;
    min-width: 768px;
    color: $fontColorDark;

    &:nth-child(even) {
      background: #e5e5e5;
    }

    &:hover {
      font-weight: bold;
    }

    .td {
      text-align: center;
      overflow: hidden;
      position: relative;

      div {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }

    .td-numbers {
      text-align: center;
    }

    .td-options {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;

      div {
        cursor: pointer;
      }
    }
  }
  .tr-header {
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 0.8rem 0;
    color: $fontColorDark;
    background-color: #f6f9fc;
    font-size: 90%;
    border-radius: 10px 10px 0 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0 2px 1px 1px;

    &:hover {
      transform: none;
    }

    .th {
      border-left: 2px solid $color-primary;
      text-align: center;
      font-weight: bold;

      &:last-child {
        border-left: none;
      }
    }
  }

  .tbody {
    overflow-y: auto;
  }
}

.toggle-icon {
  display: grid;
  place-items: center;
  border-radius: 50%;
  transition: 0.3s ease;

  svg {
    fill: $color-warning;
    width: 24px;
    height: 24px;
  }

  &.expanded {
    transform: rotate(90deg);
  }

  svg {
    pointer-events: none;
  }
}

// loading dots
.cv-data-table .loading {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(2px);
  display: flex;
  z-index: 1;
}

// skeleton
.cv-data-table .skeleton {
  position: relative;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
  overflow: auto;
  margin-top: 0.5rem;

  .skeleton-box {
    position: relative;
    display: inline-block;
    min-height: 1.9rem;
    width: 95%;
    border-radius: 10px;
    overflow: hidden;
    background-color: #dddbdd;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(#fff, 0) 0,
        rgba(#fff, 0.2) 20%,
        rgba(#fff, 0.5) 60%,
        rgba(#fff, 0)
      );
      animation: loading 0.5s infinite;
    }

    @keyframes loading {
      100% {
        transform: translateX(100%);
      }
    }
  }
}
// no-content
.no-content {
  display: grid;
  place-items: center;
  padding: 2rem;
  color: $fontColorDark;
  font-size: 1rem;
  font-weight: bold;
}

.marquee {
  animation: marqueeSlide 5s linear infinite;
  position: absolute;
}
@keyframes marqueeSlide {
  0% {
    transform: translatex(0);
  }
  100% {
    transform: translatex(120%);
  }
}
</style>
