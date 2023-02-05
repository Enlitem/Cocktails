<template>
  <div v-if="isLoading" class="fixed top-0 left-0 flex w-full h-full">
    <main-loader class="m-auto"></main-loader>
  </div>
  <div class="pt-[80px] pb-[18px] border-b border-[#CCCCCC] md:pt-[105px]">
    <h1 class="mb-2 font-medium text-[24px]">Избранное</h1>
    <div>История</div>
  </div>
  <div v-if="likedCocktails.length">
    <main-cocktail-card-result
      class="pt-[30px] mb-[30px] md:pt-[40px] lg:grid lg:grid-cols-4"
      v-if="!isLoading"
      :drinks="drinks"
      :lg-cols4="true"
    >
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
  <div v-else class="pt-10">Вы еще не добавили ни одного коктейля в избранное</div>
</template>

<script>
import MainCocktailCardResult from '@/components/MainCocktailCardResult';
import MainPages from '@/components/MainPages';
import axios from 'axios';
import { mapState, mapMutations } from 'vuex';
import MainLoader from '@/components/MainLoader';
export default {
  name: 'LikesView',
  components: { MainLoader, MainPages, MainCocktailCardResult },
  data() {
    return {
      drinks: [],
      isLoading: false,
      page: 1,
      limit: Number,
      totalPages: 0,
      totalDrinks: 0,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    ...mapMutations({ addLike: 'likes/addLike', removeLike: 'likes/removeLike' }),
    async fetchDrinks() {
      try {
        this.isLoading = true;
        const url = this.getUrl().href;
        const response = await axios.get(url, {
          params: {
            _page: this.page,
            _limit: this.limit,
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
      for (let i = 0; i < this.likedCocktails.length; i++) {
        url.searchParams.append('idDrink', this.likedCocktails[i]);
      }
      return url;
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
  },
  computed: {
    ...mapState({ likedCocktails: state => state.likes.likedCocktails }),
  },
  watch: {
    limit() {
      this.fetchDrinks();
    },
    likedCocktails() {
      this.fetchDrinks();
    },
  },
  mounted() {
    this.calculateLimit();
    this.fetchDrinks();
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
  },
};
</script>

<style scoped></style>
