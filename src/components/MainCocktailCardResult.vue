<template>
  <div class="flex flex-wrap gap-y-[20px] gap-x-[20px] justify-center md:justify-between md:gap-x-[25px]">
    <main-cocktail-card
      class="last:mr-auto"
      v-for="drink in drinks"
      :name="drink.name"
      :second-name="drink.secondName"
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
  data() {
    return {
      drinks: [
        {
          name: 'Лонг Айленд Айс Ти',
          secondName: 'Long Island Iced Tea',
          ingredients: ['example', 'example', 'example', 'example', 'example'],
        },
        { name: 'Бостонский чай', secondName: 'Boston Tea', ingredients: ['example', 'example', 'example', 'example'] },
        { name: 'Голубая лагуна', secondName: 'Blue Water', ingredients: ['example', 'example', 'example'] },
        {
          name: 'Бостонский чай',
          secondName: 'Boston Tea',
          ingredients: ['example', 'example', 'example', 'example', 'example'],
        },
        { name: 'Голубая лагуна', secondName: 'Blue Water', ingredients: ['example'] },
      ],
    };
  },
};
</script>

<style scoped></style>
