<template>
  <div class="flex flex-wrap gap-y-[20px] gap-x-[20px] justify-center md:justify-between md:gap-x-[25px]">
    <main-cocktail-card
      class="last:mr-auto"
      v-for="drink in drinks"
      :name="drink.strDrink"
      :second-name="drink.strDrinkAlternate"
      :ingredients="drink.ingredients"
      :key="drink.name"
    />
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

<style scoped></style>
