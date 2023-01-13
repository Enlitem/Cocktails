<template>
  <div class="relative">
    <div class="filter-show-box">
      <div class="filter-show-text" @click="showFilter">
        <img class="mr-[14px]" src="@/assets/Options.svg" alt="Options" />
        <span v-if="!this.filterVisible">Показать фильтр</span>
        <span v-if="this.filterVisible">Скрыть фильтр</span>
      </div>
    </div>
    <ul class="filter-checkboxes mt-[14px] lg:mt-0" v-if="filterVisible">
      <li class="filter-options" v-for="filter in filters" :key="filter.title">
        <div class="option-name">{{ filter.title }}</div>
        <div class="checkbox-box" v-for="checkbox in filter.checkboxes" :key="checkbox.name">
          <input
            class="checkbox"
            type="checkbox"
            :value="checkbox.value"
            v-model="checkedFilters"
            @change="$emit('check', this.checkedFilters)"
          />
          <label>{{ checkbox.name }}</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainFilter',
  data() {
    return {
      filterVisible: window.innerWidth > 1000,
      filters: [
        {
          title: 'Градус',
          checkboxes: [
            { name: 'Крепкое', value: 'Крепкие' },
            { name: 'Слабоалкогольное', value: 'Слабоалкогольные' },
          ],
        },
        {
          title: 'Вкус',
          checkboxes: [
            { name: 'Сладкий', value: 'Сладкие' },
            { name: 'Сливочный', value: 'Сливочные' },
            { name: 'Кофейный', value: 'Кофейные' },
            { name: 'Кислый', value: 'Кислые' },
          ],
        },
        {
          title: 'Тип',
          checkboxes: [
            { name: 'Лонги', value: 'Лонги' },
            { name: 'Шорт дринки', value: 'Шорт дринки' },
            { name: 'Шоты', value: 'Шоты' },
          ],
        },
      ],
      checkedFilters: [],
    };
  },
  props: {
    windowWidth: {
      type: Number,
      required: true,
    },
  },
  methods: {
    showFilter() {
      this.filterVisible = !this.filterVisible;
    },
    check() {},
  },
  watch: {
    windowWidth() {
      this.filterVisible = window.innerWidth > 1000;
    },
  },
};
</script>

<style scoped>
.filter-show-box {
  @apply h-[41px] px-[15px] py-[10px] lg:hidden;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
}

.filter-show-text {
  @apply flex text-[14px] font-normal items-center;
}

.filter-checkboxes {
  @apply absolute bg-[#FFF] w-full;
}

.filter-options {
  @apply flex flex-col mb-[15px] pb-[16px];
  border-bottom: 1px solid #cccccc;
}

.filter-options:last-child {
  @apply mb-0;
  border: none;
}

.option-name {
  @apply mb-[17px];
}

.checkbox-box {
  @apply mb-[6px] flex items-center;
}

.checkbox {
  @apply mr-[8px];
}

input[type='checkbox'] {
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url(@/assets/disabled.svg);
}

input[type='checkbox']:checked {
  background-image: url(@/assets/enabled.svg);
}

label {
  @apply text-[18px] font-normal;
}
</style>
