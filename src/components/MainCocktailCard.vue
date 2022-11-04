<template>
  <div class="max-w-[320px] smx:w-full md:w-[225px] xl:w-[289px]">
    <img class="rounded-[12px] mb-3 md:mb-[5px]" src="@/assets/cocktail.png" alt="" />
    <div class="flex justify-between">
      <span class="text-[18px] font-normal leading-[130%] md:text-[16px] xl:text-[18px]">{{ name }}</span>
      <button>
        <img
          class="w-[21px] h-[18px] md:w-[16px] md:h-[14px] xl:w-[21px] xl:h-[18px]"
          src="@/assets/favourites.svg"
          alt=""
        />
      </button>
    </div>
    <div class="text-[12px] font-normal text-light-grey mt-[-2px] mb-[14px] md:text-[10px] md:mb-[12px] xl:text-[12px]">
      {{ secondName }}
    </div>
    <div
      class="truncate-text mb-[17px] text-[14px] font-normal leading-[130%] text-grey max-h-[53px] md:mb-[10px] xl:text-[14px]"
    >
      {{ ingredients.join(', ') }}
    </div>
    <main-cocktail-card-label-list :labels="labels" />
  </div>
</template>

<script>
import MainCocktailCardLabelList from '@/components/MainCocktailCardLabelList';
export default {
  name: 'MainCocktailCard',
  components: { MainCocktailCardLabelList },

  props: {
    name: {
      type: String,
      required: true,
    },
    secondName: {
      type: String,
      required: false,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    labels: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style scoped>
.truncate-text {
  overflow: hidden;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>
