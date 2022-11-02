<template>
  <div class="spacing">
    <app-navbar class="mb-[30px]" />
    <div class="font-medium text-[18px] leading-[130%] mb-2">Найдено {{ drinks.length }} коктейлей</div>
    <div class="mb-[30px]">История</div>
    <ingredient-list class="mb-4" :ingredients="this.ingredients" />
    <main-cocktail-card-result v-if="!isLoading" :drinks="drinks" />
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar';
import MainCocktailCardResult from '@/components/MainCocktailCardResult';
import axios from 'axios';
import IngredientList from '@/components/IngredientList';
export default {
  name: 'CocktailsView',
  components: { IngredientList, MainCocktailCardResult, AppNavbar },
  data() {
    return {
      drinks: [],
      ingredients: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchDrinks() {
      try {
        this.isLoading = true;
        const response = await axios.get(this.getUrl());
        this.drinks = response.data;
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    },
    getUrl() {
      let url = new URL('http://localhost:3000/drinks');
      for (let i = 0; i < this.ingredients.length; i++) {
        url.searchParams.append('ingredients_like', this.ingredients[i].ingredient);
      }
      console.log(url);
      return url;
    },
    getIngredientsFromQuery() {
      let arr = this.$route.query.ingredients.split(',');
      arr.forEach(item => this.ingredients.push({ ingredient: item, id: Date.now() }));
    },
  },
  mounted() {
    this.getIngredientsFromQuery();
    this.fetchDrinks();
  },
};
</script>

<style scoped></style>
