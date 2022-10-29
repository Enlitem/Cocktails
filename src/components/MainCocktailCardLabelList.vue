<template>
  <div class="flex gap-x-[6px] gap-y-[5px] flex-wrap">
    <div
      v-for="label in labels"
      :key="label"
      class="text-[10px] leading-[130%] font-normal text-light-grey py-0.5 px-2 rounded-[4px] border-[1px] border-light-grey"
    >
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainCocktailCardLabelList',
  props: {
    labels: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
