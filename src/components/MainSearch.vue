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
        'Джин',
        'Мараскино',
        'Лимонный сок',
        'Фиалковый ликер',
        'Коньяк',
        'Crème de Cacao коричневый',
        'Сливки',
        'Кампари',
        'Красный вермут',
        'Содовая',
        'Трипл сек',
        'Бренди',
        'Ангостура биттер',
        'Бурбон',
        'Сахарный сироп',
        'Белок яйца',
        'Белый ром',
        'Сок лайма',
        'Олд Том Джин',
        'Апельсиновый биттер',
        'Малиновый сироп',
        'Абрикосовый бренди',
        'Кальвадос',
        'Ржаной виски',
        'Ананасовый сок',
        'Гренадин',
        'Красный биттер',
        'Апельсиновая цедра',
        'Лед',
        'Апельсиновый сок',
        'Абсент',
        'Сахар',
        'Вода без газа',
        'Темный ром',
        'Красный портвейн',
        'Желток яйца',
        'Зеленый Шартрез',
        'Вода цветов апельсина',
        'Ванильный экстракт',
        'Шотландский виски',
        'Драмбуи',
        'Пишо биттер',
        'Сухой вермут',
        'Бенедиктин',
        'Мятный ликер белый',
        'Фернет-Бранка',
        'Лайм',
        'Мята',
        'Дробленый лед',
        'Апероль',
        'Просекко',
        'Апельсин',
        'Персиковое пюре',
        'Персик',
        'Сверхкрепкий ром',
        'Сироп корицы',
        'Грейпфрутовый сок',
        'Лаймовый сок',
        'Грейпфрут',
        'Цитрусовая водка',
        'Клюквенный сок',
        'Водка',
        'Томатный сок',
        'Сельдерей',
        'Табаско соус',
        'Ворчестер соус',
        'Сельдереевая соль',
        'Черный перец молотый',
        'Золотой ром',
        'Кола',
        'Серебрянная текила',
        'Лимон',
        'Выдержанный ром',
        'Миндальный сироп',
        'Текила',
        'Соль',
        'Имбирное пиво',
        'Кокосовый сироп',
        'Ананас',
        'Ананасовые листья',
        'Коктейльная вишня',
        'Персиковый ликер',
        'Вишневый ликер',
        'Кофейный ликер',
        'Нежирные сливки',
        'Айриш крим',
        'Ванильная водка',
        'Ликер маракуйи',
        'Маракуйя',
        'Ванильный сахарный песок',
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
        name: 'allCocktails',
        query: { ingredients: this.ingredients.map(item => item.ingredient).join(',') },
      });
    },
  },
  computed: {
    results() {
      return this.keywords.filter(result => result.toLowerCase().includes(this.query.toLowerCase()));
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
}

.text-field__input:focus {
  @apply outline-none border-grey bg-[url('@/assets/search-icon_sm_active.svg')] md:bg-[url('@/assets/search-icon_md_active.svg')];
}

.text-field__input:focus::placeholder {
  opacity: 0;
}

.text-field {
  @apply relative h-[35px] flex items-center w-full  md:h-[50px];
}

.text-field__icon {
  position: relative;
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
