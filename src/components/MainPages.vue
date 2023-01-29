<template>
  <div class="flex flex-col items-center">
    <button v-if="page !== totalPages" class="btn" @click="$emit('loadMoreDrinks')">Смотреть еще</button>
    <div class="flex gap-x-5 justify-items-center">
      <img class="arrow" src="@/assets/arrow.svg" alt="Previous page" @click="$emit('previousPage')" />
      <div v-if="totalPages <= 7" class="flex gap-x-[18px]">
        <div
          class="page"
          :class="{ 'current-page': page === pageNumber }"
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          @click="$emit('changePage', pageNumber)"
        >
          {{ pageNumber }}
        </div>
      </div>
      <div v-if="totalPages > 7" class="flex gap-x-[18px]">
        <div class="page" :class="{ 'current-page': page === 1 }" @click="$emit('changePage', 1)">1</div>
        <div v-if="page < 5" class="flex gap-x-5">
          <div
            class="page"
            :class="{ 'current-page': page === pageNumber + 1 }"
            v-for="pageNumber in 4"
            :key="pageNumber"
            @click="$emit('changePage', pageNumber + 1)"
          >
            {{ pageNumber + 1 }}
          </div>
          <div>...</div>
        </div>
        <div v-if="page >= 5 && page <= totalPages - 4" class="flex gap-x-5">
          <div>...</div>
          <div class="page" @click="$emit('changePage', page - 1)">
            {{ page - 1 }}
          </div>
          <div class="current-page page">
            {{ page }}
          </div>
          <div class="page" @click="$emit('changePage', page + 1)">
            {{ page + 1 }}
          </div>
          <div>...</div>
        </div>
        <div v-if="page > totalPages - 4" class="flex flex-row-reverse gap-x-5">
          <div
            class="page"
            :class="{ 'current-page': page === totalPages - pageNumber }"
            v-for="pageNumber in 4"
            :key="pageNumber"
            @click="$emit('changePage', totalPages - pageNumber)"
          >
            {{ totalPages - pageNumber }}
          </div>
          <div>...</div>
        </div>
        <div class="page" :class="{ 'current-page': page === totalPages }" @click="$emit('changePage', totalPages)">
          {{ totalPages }}
        </div>
      </div>
      <img class="arrow right-arrow" src="@/assets/arrow.svg" alt="Next page" @click="$emit('nextPage')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPages',
  props: {
    page: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.btn {
  width: 203px;
  height: 38px;
  border: 1px solid #eb2d47;
  border-radius: 8px;
  color: #eb2d47;
  margin-bottom: 20px;
}
.btn:hover {
  background-color: #eb2d47;
  color: #ffffff;
}

.btn:active {
  background-color: #c92037;
}

.right-arrow {
  transform: scale(-1, 1);
}

.page {
  @apply h-[20px] flex justify-center items-center font-normal text-[12px] cursor-pointer;
}

.current-page {
  width: 20px;
  height: 20px;
  color: white;
  background: #eb2d47;
  border-radius: 3px;
}

.arrow {
  cursor: pointer;
}
</style>
