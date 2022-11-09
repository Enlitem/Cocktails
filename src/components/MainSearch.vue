<template>
  <form class="flex items-center" :class="formMargin" @submit.prevent>
    <div class="text-field">
      <input
        class="text-field__input text-field__icon text-field__icon_search"
        :class="[results.length && query.length ? 'text-field-br-not-empty' : 'text-field-br-empty']"
        v-model.trim="query"
        type="text"
        placeholder="Поиск по ингредиентам"
      />
      <main-search-results
        class="w-full absolute left-0"
        v-show="results.length && query.length"
        :results="results"
        @add="addIngredient"
      />
    </div>
    <MainButton class="w-[25%]" text="Поиск" @click="search" />
  </form>
  <ingredient-list class="mb-[30px]" :ingredients="ingredients" @remove="removeIngredient" />
</template>

<script>
import MainButton from '@/components/MainButton';
import MainSearchResults from '@/components/MainSearchResults';
import IngredientList from '@/components/IngredientList';
import router from '@/router';
export default {
  name: 'MainSearch',
  components: { IngredientList, MainSearchResults, MainButton },
  data() {
    return {
      ingredients: [],
      keywords: [
        'водка',
        'джин',
        'текила',
        'ром',
        'трипл-сек',
        'светлый ром',
        'темный ром',
        'апероль',
        'коньяк',
        'кампари',
      ],
      query: '',
    };
  },
  methods: {
    addIngredient(result) {
      const ingredient = {
        id: Date.now(),
        ingredient: result,
      };
      this.ingredients.push(ingredient);
      this.query = '';
    },
    removeIngredient(ingredient) {
      this.ingredients = this.ingredients.filter(i => i.id !== ingredient.id);
    },
    search() {
      router.push({
        name: 'cocktails',
        query: { ingredients: this.ingredients.map(item => item.ingredient).join(',') },
      });
    },
  },
  computed: {
    results() {
      return this.keywords.filter(result => result.includes(this.query));
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
.text-field__input {
  @apply bg-[url('@/assets/search-icon_sm.svg')] bg-left-10 bg-no-repeat w-full h-full relative text-[12px] pl-[32px] md:bg-[url('@/assets/search-icon_md.svg')] md:bg-left-43 md:pl-[85px] md:text-[16px];
  font-weight: 400;
  line-height: 130%;
  border-width: 1px 0 1px 1px;
  border-style: solid;
  border-color: #999999;
  /*background-position: 10px 10px;*/
}

.text-field__input:focus {
  @apply outline-none border-grey bg-[url('@/assets/search-icon_sm_active.svg')] md:bg-[url('@/assets/search-icon_md_active.svg')];
}

.text-field__input:focus::placeholder {
  opacity: 0;
}

.text-field {
  @apply relative h-[35px] flex items-center w-full  md:h-[50px];
  /*border-width: 1px 0 1px 1px;*/
  /*border-style: solid;*/
  /*border-color: #999999;*/
}

.text-field__icon {
  position: relative;
}

.text-field__icon::before {
  /*@apply left-[11px] md:left-[43px];*/
  /*content: '';*/
  /*position: absolute;*/
  /*display: flex;*/
  /*align-items: center;*/
}
.text-field__icon .input {
  /*padding-left: 32px;*/
}
.text-field__icon_search::before {
  /*@apply bg-[url('@/assets/search-icon_sm.svg')] w-[15px] h-[15px] md:w-[22px] md:h-[22px] md:bg-[url('@/assets/search-icon_md.svg')];*/
  /*background-repeat: no-repeat;*/
  /*background-position: center;*/
}

.text-field-br-empty {
  border-radius: 9px 0 0 9px;
}

.text-field-br-not-empty {
  border-radius: 9px 0 0 0;
}

.labels-not-empty {
  margin-bottom: 15px;
}

.labels-empty {
  margin-bottom: 30px;
}
</style>
