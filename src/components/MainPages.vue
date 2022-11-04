<template>
  <div class="flex flex-col items-center">
    <button class="btn" @click="$emit('loadMoreDrinks')">Смотреть еще</button>
    <div class="flex gap-x-5">
      <img src="@/assets/arrow.svg" alt="Previous page" @click="$emit('previousPage')" />
      <div
        class="h-[20px] flex justify-center items-center font-normal text-[12px] leading-[130%]"
        :class="{ 'current-page': page === pageNumber }"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        @click="$emit('changePage', pageNumber)"
      >
        {{ pageNumber }}
      </div>
      <img class="right-arrow" src="@/assets/arrow.svg" alt="Next page" @click="$emit('nextPage')" />
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

.right-arrow {
  transform: scale(-1, 1);
}

.current-page {
  width: 20px;
  height: 20px;
  color: white;
  background: #eb2d47;
  border-radius: 3px;
}
</style>
