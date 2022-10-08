<template>
  <div class="spacing">
    <nav class="flex items-center justify-between pt-[11px] pb-[10px] mb-[60px]">
      <div class="logo">LOGO</div>
      <div class="flex justify-between">
        <img class="mr-5" src="@/assets/favourites.svg" alt="Favourites" />
        <img src="@/assets/burger.svg" alt="Favourites" />
      </div>
    </nav>
    <h1 class="mb-[6px] text-[24px] font-[500] leading-[29px]">Рецепты коктейлей в одном месте</h1>
    <h2 class="text-grey text-[14px] leading-[129%] mb-[32px]">
      Господа, сложившаяся структура организации способствует повышению качества поставленных обществом задач.
    </h2>
    <MainSearch :class="searchMargin" :ingredients="ingredients" @create="addIngredient" />
    <ingredient-list class="mb-5" :ingredients="ingredients" @remove="removeIngredient" />
    <div>
      <img class="main-img" src="@/assets/MainImg.png" alt="IMG" />
    </div>
  </div>
</template>

<script>
import MainSearch from '@/components/MainSearch';
import IngredientList from '@/components/IngredientList';
export default {
  name: 'MainView',
  components: { IngredientList, MainSearch },
  data() {
    return {
      ingredients: [
        { id: 1, ingredient: 'водка' },
        { id: 2, ingredient: 'джин' },
      ],
    };
  },
  methods: {
    addIngredient(ingredient) {
      this.ingredients.push(ingredient);
      console.log(this.ingredients);
    },
    removeIngredient(ingredient) {
      this.ingredients = this.ingredients.filter(i => i.id !== ingredient.id);
    },
  },
  computed: {
    searchMargin() {
      return {
        'search-empty': this.ingredients.length === 0,
        'search-not-empty': this.ingredients.length !== 0,
      };
    },
  },
};
</script>

<style scoped>
nav {
  border-bottom: 1px solid #cccccc;
}

.logo {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #443e3e;
}

.main-img {
  height: 250px;
  object-fit: fill;
  object-position: center;
  border-radius: 30px;
}

.search-empty {
  margin-bottom: 30px;
}

.search-not-empty {
  margin-bottom: 15px;
}
</style>
