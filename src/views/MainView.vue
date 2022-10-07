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
    <MainSearch class="mb-10" :ingredients="ingredients" @create="addIngredient" />
    <div>
      <img class="main-img" src="@/assets/MainImg.png" alt="IMG" />
    </div>
  </div>
</template>

<script>
import MainSearch from '@/components/MainSearch';
export default {
  name: 'MainView',
  components: { MainSearch },
  data() {
    return {
      ingredients: [],
    };
  },
  methods: {
    addIngredient(ingredient) {
      this.ingredients.push(ingredient);
      console.log(this.ingredients);
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
  max-height: 320px;
  object-fit: fill;
  object-position: center;
  border-radius: 40px;
}
</style>
