<template>
  <div>
    <router-link :to="{ name: 'drink', params: { drinkName: secondName } }" append>
      <img class="rounded-[12px] mb-3 md:mb-[5px]" :src="img" alt=""
    /></router-link>
    <div class="flex justify-between">
      <span class="text-[18px] font-normal leading-[130%] md:text-[16px] xl:text-[18px]">{{ name }}</span>
      <button v-if="!likedCocktails.includes(this.id)" @click="this.addLike(this.id)">
        <img
          class="w-[21px] h-[18px] md:w-[16px] md:h-[14px] xl:w-[21px] xl:h-[18px]"
          src="@/assets/favourites.svg"
          alt=""
        />
      </button>
      <button v-else @click="this.removeLike(this.id)">
        <img
          class="w-[21px] h-[18px] md:w-[16px] md:h-[14px] xl:w-[21px] xl:h-[18px]"
          src="@/assets/favouritesEnabled.svg"
          alt=""
        />
      </button>
    </div>
    <div class="text-[12px] font-normal text-light-grey mt-[-2px] mb-[14px] md:text-[10px] md:mb-[12px] xl:text-[12px]">
      {{ secondName }}
    </div>
    <div
      class="truncate-text mb-[17px] text-[14px] font-normal leading-[130%] text-grey max-h-[53px] md:mb-[10px] xl:text-[14px]"
    >
      {{ ingredients.join(', ') }}
    </div>
    <main-cocktail-card-label-list :labels="labels" />
  </div>
</template>

<script>
import MainCocktailCardLabelList from '@/components/MainCocktailCardLabelList';
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'MainCocktailCard',
  components: { MainCocktailCardLabelList },
  methods: {
    ...mapMutations({ addLike: 'likes/addLike', removeLike: 'likes/removeLike' }),
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    secondName: {
      type: String,
      required: false,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    labels: {
      type: Array,
      required: false,
    },
    img: {
      type: String,
      required: false,
    },
    id: {
      required: true,
    },
  },
  computed: {
    ...mapState({ likedCocktails: state => state.likes.likedCocktails }),
  },
};
</script>

<style scoped>
.truncate-text {
  overflow: hidden;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>
