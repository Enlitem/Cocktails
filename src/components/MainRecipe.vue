<template>
  <div>
    <div
      class="md:grid md:grid-cols-5 md:grid-rows-none md:gap-x-[20px] md:mb-[40px] lg:gap-x-[46px] lg:mb-[30px] lg:flex xl:gap-x-[52px]"
    >
      <img
        class="rounded-[20px] hidden md:block md:w-100% md:col-span-2 md:row-span-full xl:col-span-4 lg:max-w-[360px] lg:max-h-[458px]"
        :src="this.drinkThumb"
        alt=""
      />
      <div class="md:col-span-3 md:col-start-3 lg:grow">
        <div class="md:col-span-3 md:mb-[40px]">
          <div class="flex justify-between">
            <div class="font-normal text-[24px] font-medium lg:text-[36px]">
              {{ this.name }}
            </div>
            <button v-if="!likedCocktails.includes(this.id)" @click="this.addLike(this.id)">
              <img class="lg:w-[29px]" src="@/assets/favourites.svg" alt="Like" />
            </button>
            <button v-else @click="this.removeLike(this.id)">
              <img class="lg:w-[29px]" src="@/assets/favouritesEnabled.svg" alt="Like" />
            </button>
          </div>
          <div class="mb-[20px] text-[16px] text-grey">{{ this.secondName }}</div>
          <main-cocktail-card-label-list class="mb-[35px] md:mb-0" :labels="this.tags" />
        </div>
        <img
          class="rounded-[20px] mb-[20px] smx:max-w-[440px] smx:ml-auto smx:mr-auto md:hidden"
          :src="this.drinkThumb"
          alt=""
        />
        <div class="title">Необходимые ингредиенты</div>
        <hr class="mb-[17px] border-[#999999]" />
        <div class="mb-[35px] md:grid md:grid-cols-2 md:gap-x-[20px]">
          <div v-for="i in this.ingredients.length" :key="i">
            <div class="flex justify-between mb-[10px]">
              <div class="text-[14px]">{{ this.ingredients[i - 1] }}</div>
              <div class="text-[16px] text-grey">{{ this.measures[i - 1] }}</div>
            </div>
            <hr class="hr mb-[17px]" />
          </div>
        </div>
      </div>
    </div>
    <div class="md:flex md:gap-x-[51px] md:justify-between lg:gap-x-[41px]">
      <div class="mb-[35px] md:grow">
        <div class="mb-[10px] text-[18px] font-medium md:text-[36px]">Рецепт коктейля</div>
        <hr class="mb-[21px] border-[#999999]" />
        <div class="" v-for="i in instructionToArray" :key="i">
          <div class="mb-[12px] md:text-[18px]">{{ i }}</div>
          <hr class="hr mb-[11px]" />
        </div>
      </div>
      <div>
        <div class="mb-[10px] text-[18px] font-medium md:text-[20px] md:mb-[19px]">Также&nbsp;понадобятся:</div>
        <div class="flex flex-wrap gap-x-5 gap-y-3 md:grid md:grid-cols-2 lg:grid-cols-3 lg:min-w-[349px]">
          <div class="flex flex-col items-center w-[93px] md:w-[103px]">
            <img class="preparation-img" :src="glassRoute" :alt="this.glass" />
            <div class="text-center text-[14px]">{{ this.glass }}</div>
          </div>
          <div class="flex flex-col items-center max-w-[93px] md:max-w-[103px]" v-for="i in this.preparation" :key="i">
            <img class="preparation-img" :src="require(`@/assets/${i}.png`)" :alt="i" />
            <div class="text-center text-[14px]">{{ i }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainCocktailCardLabelList from '@/components/MainCocktailCardLabelList';
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'MainRecipe',
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
      required: true,
    },
    drinkThumb: {
      type: String,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    measures: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    instruction: {
      type: String,
      required: true,
      default: '',
    },
    glass: {
      type: String,
      required: true,
    },
    preparation: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    tags: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
    id: {
      required: true,
    },
  },
  computed: {
    ...mapState({ likedCocktails: state => state.likes.likedCocktails }),
    instructionToArray() {
      return this.instruction.split('. ');
    },
    glassRoute() {
      switch (this.glass) {
        case 'Коктейльная рюмка':
          return require(`@/assets/коктейльнаярюмка.png`);
        case 'Рокс или Олд фэшен':
          return require(`@/assets/рокс.png`);
        case 'Рокс':
          return require(`@/assets/рокс.png`);
        case 'Олд фэшен':
          return require(`@/assets/рокс.png`);
        case 'Флюте':
          return require(`@/assets/флюте.png`);
        case 'Тумблер или Олд фэшен':
          return require(`@/assets/рокс.png`);
        case 'Хайбол':
          return require(`@/assets/хайбол.png`);
        case 'Коллинз или Хайбол':
          return require(`@/assets/хайбол.png`);
        case 'Медная кружка':
          return require(`@/assets/медная кружка.png`);
        case 'Слинг':
          return require(`@/assets/слинг.png`);
        default:
          return null;
      }
    },
  },
};
</script>

<style scoped>
.hr {
  border-top: 1px solid #cccccc;
}

.title {
  @apply mb-[10px] text-[18px] font-medium md:text-[20px];
}

.preparation-img {
  @apply mb-[1px] w-[93px] h-[93px] md:w-[103px] md:h-[103px] md:mr-0;
  border: 1px solid #eeeeee;
  border-radius: 8px;
}
</style>
