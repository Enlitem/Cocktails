<template>
  <form class="flex items-center" :class="formMargin" @submit.prevent>
    <div class="text-field__icon text-field__icon_search text-field">
      <input
        class="input"
        v-model.trim="query"
        type="text"
        placeholder="Поиск по ингредиентам"
        @keyup.enter="addIngredient"
      />
      <main-search-results
        class="absolute top-0 left-0"
        v-show="results.length && query.length"
        :results="results"
        @add="addIngredient"
      />
    </div>
    <MainButton class="w-[25%]" text="Поиск" />
  </form>
  <ingredient-list class="mb-5" :ingredients="ingredients" @remove="removeIngredient" />
</template>

<script>
import MainButton from '@/components/MainButton';
import MainSearchResults from '@/components/MainSearchResults';
import IngredientList from '@/components/IngredientList';
export default {
  name: 'MainSearch',
  components: { IngredientList, MainSearchResults, MainButton },
  data() {
    return {
      ingredients: [
        { id: 1, ingredient: 'водка' },
        { id: 2, ingredient: 'джин' },
      ],
      keywords: ['водка', 'джин', 'текила', 'ром', 'трипл-сек', 'светлый ром', 'темный ром', 'апероль'],
      query: '',
    };
  },
  methods: {
    addIngredient(result) {
      console.log(result);
      this.ingredient = {
        id: Date.now(),
        ingredient: result,
      };
      this.ingredients.push(this.ingredient);
      this.query = '';
    },
    removeIngredient(ingredient) {
      this.ingredients = this.ingredients.filter(i => i.id !== ingredient.id);
    },
  },
  computed: {
    results() {
      return this.keywords.filter(result => {
        return result.includes(this.query);
      });
    },
    formMargin() {
      return {
        'labels-empty': this.ingredients.length === 0,
        'labels-not-empty': this.ingredients.length !== 0,
      };
    },
  },
};
</script>

<style scoped>
.input {
  @apply w-[95%] relative;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
}

.text-field {
  @apply h-[35px] flex items-center w-full;
  border-width: 1px 0 1px 1px;
  border-style: solid;
  border-color: #999999;
  border-radius: 9px 0 0 9px;
  padding-left: 32px;
}

.text-field__icon {
  position: relative;
}

.text-field__icon::before {
  content: '';
  position: absolute;
  display: flex;
  align-items: center;
  left: 12px;
}
.text-field__icon .input {
  /*padding-left: 32px;*/
}
.text-field__icon_search::before {
  @apply w-[15px] h-[15px];
  background-image: url('@/assets/search-icon_sm.svg');
  background-repeat: no-repeat;
  background-position: center;
}

.labels-not-empty {
  margin-bottom: 15px;
}

.labels-empty {
  margin-bottom: 30px;
}
</style>
