<template>
  <div class="spacing">
    <app-navbar class="mb-[15px]" />
    <div class="mb-[35px]">История</div>
    <main-recipe
      :name="this.drink.strDrink"
      :second-name="this.drink.strDrinkAlternate"
      :drink-thumb="this.drink.strDrinkThumb"
      :ingredients="this.drink.ingredients"
      :measures="this.drink.measures"
      :instruction="this.drink.strInstructions"
      :glass="this.drink.strGlass"
      :preparation="this.drink.preparation"
    />
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar';
import axios from 'axios';
import MainRecipe from '@/components/MainRecipe';

export default {
  name: 'DrinkView',
  components: { MainRecipe, AppNavbar },
  data() {
    return {
      isLoading: false,
      drink: {},
    };
  },
  methods: {
    async fetchDrink() {
      try {
        this.isLoading = true;
        const response = await axios.get('http://localhost:3000/drinks', {
          params: {
            strDrinkAlternate_like: this.$route.params.drinkName,
          },
        });
        this.drink = response.data[0];
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.fetchDrink();
  },
};
</script>

<style scoped></style>
