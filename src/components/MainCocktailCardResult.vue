<template>
  <div class="result-container">
    <main-cocktail-card
      class=""
      v-for="drink in drinks"
      :name="drink.strDrink"
      :second-name="drink.strDrinkAlternate"
      :ingredients="drink.ingredients"
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
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.result-container {
  @apply max-w-[728px] grid grid-cols-1 justify-items-center gap-y-[20px] gap-x-[20px] smx:grid-cols-2 smx:justify-items-center md:grid-cols-3 xl:max-w-[907px];
}
</style>
