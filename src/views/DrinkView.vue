<template>
  <div>
    <div class="mb-[35px] pt-[65px] md:pt-[70px] lg:pt-[85px]">История</div>
    <div v-if="isLoading" class="fixed top-0 left-0 flex w-full h-full">
      <main-loader class="m-auto"></main-loader>
    </div>
    <main-recipe
      v-if="!isLoading"
      :name="this.drink.strDrink"
      :second-name="this.drink.strDrinkAlternate"
      :drink-thumb="this.drink.strDrinkThumb"
      :ingredients="this.drink.ingredients"
      :measures="this.drink.measures"
      :instruction="this.drink.strInstructions"
      :glass="this.drink.strGlass"
      :preparation="this.drink.preparation"
      :tags="this.drink.strTags"
      :id="this.drink.idDrink"
    />
  </div>
</template>

<script>
import axios from 'axios';
import MainRecipe from '@/components/MainRecipe';
import MainLoader from '@/components/MainLoader';

export default {
  name: 'DrinkView',
  components: { MainLoader, MainRecipe },
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
  created() {
    this.fetchDrink();
  },
};
</script>

<style scoped></style>
