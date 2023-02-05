<template>
  <div class="result-container" :class="{ lgCols4: lgCols4 }">
    <main-cocktail-card
      v-for="drink in drinks"
      :name="drink.strDrink"
      :second-name="drink.strDrinkAlternate"
      :ingredients="drink.ingredients"
      :img="drink.strDrinkThumb"
      :labels="drink.strTags"
      :id="drink.idDrink"
      :key="drink.name"
    />
    <slot></slot>
  </div>
</template>

<script>
import MainCocktailCard from '@/components/MainCocktailCard';
export default {
  name: 'MainCocktailCardResult',
  components: { MainCocktailCard },
  props: {
    drinks: {
      type: Array,
      required: true,
    },
    lgCols4: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.result-container {
  @apply grid grid-cols-1 justify-items-center gap-y-[20px] gap-x-[20px] smx:grid-cols-2 smx:justify-items-center md:grid-cols-3;
}

.lgCols4 {
  @apply lg:grid-cols-4 lg:w-full lg:max-w-full;
}
</style>
