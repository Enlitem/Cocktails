<template>
  <div class="spacing">
    <app-navbar class="mb-[30px]" />
    <div class="font-medium text-[18px] mb-2 smx:text-[24px]">Найдено {{ this.totalDrinks }} коктейлей</div>
    <div class="mb-[30px]">История</div>
    <ingredient-list class="mb-4 lg:pb-4 lg:mb-10" :ingredients="this.ingredients" @remove="removeIngredient" />
    <div class="lg:grid lg:grid-cols-4 lg:gap-x-[20px] xl:grid-cols-12">
      <main-filter
        class="mb-[30px] lg:col-span-1 xl:col-span-3 xl:max-w-[251px]"
        @check="changeFilters"
        :window-width="this.windowWidth"
      />
      <main-cocktail-card-result class="mb-[50px] lg:col-span-3 xl:col-span-9" v-if="!isLoading" :drinks="drinks">
        <main-pages
          class="smx:col-start-1 smx:col-span-full md:col-start-2 md:col-span-1"
          :page="this.page"
          :totalPages="this.totalPages"
          @changePage="changePage"
          @nextPage="nextPage"
          @previousPage="previousPage"
          @loadMoreDrinks="loadMoreDrinks"
        />
      </main-cocktail-card-result>
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar';
import MainCocktailCardResult from '@/components/MainCocktailCardResult';
import axios from 'axios';
import IngredientList from '@/components/IngredientList';
import MainPages from '@/components/MainPages';
import MainFilter from '@/components/MainFilter';
export default {
  name: 'CocktailsView',
  components: { MainFilter, MainPages, IngredientList, MainCocktailCardResult, AppNavbar },
  data() {
    return {
      drinks: [],
      ingredients: [],
      filters: [],
      isLoading: false,
      page: 1,
      limit: Number,
      totalPages: 0,
      totalDrinks: 0,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    async fetchDrinks() {
      try {
        this.isLoading = true;
        let url = this.getUrl().href;
        const response = await axios.get(url, {
          params: {
            _page: this.page,
            _limit: this.limit,
            strTags_like: this.filters,
          },
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.totalDrinks = response.headers['x-total-count'];
        this.drinks = response.data;
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    },
    async loadMoreDrinks() {
      try {
        this.page++;
        let url = this.getUrl().href;
        const response = await axios.get(url, {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        });
        this.drinks = [...this.drinks, ...response.data];
      } catch (e) {
        console.log(e);
      }
    },
    getUrl() {
      let url = new URL('http://localhost:3000/drinks');
      for (let i = 0; i < this.ingredients.length; i++) {
        url.searchParams.append('ingredients_like', this.ingredients[i].ingredient);
      }
      return url;
    },
    getIngredientsFromQuery() {
      let arr = this.$route.query.ingredients.split(',');
      arr.forEach(item => this.ingredients.push({ ingredient: item, id: Math.random().toString(16).slice(2) }));
    },
    changePage(pageNumber) {
      this.page = pageNumber;
      this.fetchDrinks();
    },
    nextPage() {
      this.page += 1;
      this.fetchDrinks();
    },
    previousPage() {
      this.page -= 1;
      this.fetchDrinks();
    },
    removeIngredient(ingredient) {
      this.ingredients = this.ingredients.filter(i => i.id !== ingredient.id);
    },
    changeFilters(filters) {
      this.filters = filters;
    },
    updateWidth() {
      this.windowWidth = window.innerWidth;
      this.calculateLimit();
    },
    calculateLimit() {
      if (this.windowWidth < 480) {
        this.limit = 5;
      }
      if (this.windowWidth < 768 && this.windowWidth >= 480) {
        this.limit = 8;
      }
      if (this.windowWidth >= 768) {
        this.limit = 9;
      }
    },
  },
  mounted() {
    this.calculateLimit();
    this.getIngredientsFromQuery();
    this.fetchDrinks();
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
  },
  watch: {
    ingredients() {
      this.fetchDrinks();
    },
    filters() {
      this.fetchDrinks();
    },
    limit() {
      this.fetchDrinks();
    },
  },
};
</script>

<style scoped></style>
