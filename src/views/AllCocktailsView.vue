<template>
  <div class="pt-[80px] lg:pt-[105px]">
    <div class="font-medium text-[18px] mb-2 smx:text-[24px]">Найдено {{ this.totalDrinks }} коктейлей</div>
    <div class="mb-[30px]">История</div>
    <ingredient-list
      class="mb-4 lg:pb-4 lg:mb-10"
      :ingredients="this.ingredients"
      @remove="removeIngredient"
      :underline="true"
    />
    <div class="lg:grid lg:grid-cols-4 lg:gap-x-[20px] xl:grid-cols-12">
      <main-filter
        class="mb-[30px] lg:col-span-1 xl:col-span-3 xl:max-w-[251px]"
        @check="changeFilters"
        :window-width="this.windowWidth"
        :checked-filters="this.filters"
      />
      <main-cocktail-card-result class="mb-[50px] lg:col-span-3 xl:col-span-9" v-if="!isLoading" :drinks="drinks">
        <main-pages
          class="col-span-full"
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
import MainCocktailCardResult from '@/components/MainCocktailCardResult';
import axios from 'axios';
import IngredientList from '@/components/IngredientList';
import MainPages from '@/components/MainPages';
import MainFilter from '@/components/MainFilter';
import router from '@/router';
export default {
  name: 'AllCocktailsView',
  components: { MainFilter, MainPages, IngredientList, MainCocktailCardResult },
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
            strTags_like: this.filters,
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
      if (this.$route.query.ingredients) {
        let arr = this.$route.query.ingredients.split(',');
        arr.forEach(item => this.ingredients.push({ ingredient: item, id: Math.random().toString(16).slice(2) }));
      }
    },
    getFiltersFromQuery() {
      if (this.$route.query.filters) {
        this.filters = this.$route.query.filters.split(',');
      }
    },
    changePage(pageNumber) {
      this.page = pageNumber;
      this.fetchDrinks();
    },
    nextPage() {
      if (this.page !== this.totalPages) {
        this.page += 1;
        this.fetchDrinks();
      }
    },
    previousPage() {
      if (this.page !== 1) {
        this.page -= 1;
        this.fetchDrinks();
      }
    },
    removeIngredient(ingredient) {
      this.ingredients = this.ingredients.filter(i => i.id !== ingredient.id);
      router.push({
        path: '/cocktails',
        query: {
          ingredients: this.ingredients.map(item => item.ingredient).join(','),
          filers: this.$route.query.filters,
        },
      });
    },
    changeFilters(filter) {
      if (!this.filters.includes(filter)) {
        this.filters.push(filter);
        this.$router.push({
          path: '/cocktails',
          query: {
            ingredients: this.$route.query.ingredients,
            filters: this.filters.join(','),
          },
        });
      } else {
        this.filters = this.filters.filter(i => i !== filter);
        this.$router.push({
          path: '/cocktails',
          query: {
            ingredients: this.$route.query.ingredients,
            filters: (this.filters = this.filters.filter(i => i !== filter)),
          },
        });
      }
      this.fetchDrinks();
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
    this.getFiltersFromQuery();
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
