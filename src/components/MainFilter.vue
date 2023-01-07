<template>
  <div class="relative">
    <div class="filter-show-box">
      <div class="filter-show-text" @click="showFilter">
        <img class="mr-[14px]" src="@/assets/Options.svg" alt="Options" />
        <span v-if="!this.filterVisible">Показать фильтр</span>
        <span v-if="this.filterVisible">Скрыть фильтр</span>
      </div>
    </div>
    <ul v-if="filterVisible" class="filter-checkboxes mt-[14px] lg:mt-0">
      <li class="filter-options">
        <div class="option-name">Градус</div>
        <div class="checkbox-box">
          <input
            class="checkbox"
            type="checkbox"
            value="Крепкие"
            v-model="filters"
            @change="$emit('check', this.filters)"
          />
          <label>Крепкое</label>
        </div>
        <div class="checkbox-box">
          <input
            class="checkbox"
            type="checkbox"
            value="Слабоалкогольное"
            v-model="filters"
            @change="$emit('check', this.filters)"
          />
          <label>Слабоалкогольное</label>
        </div>
        <div class="checkbox-box">
          <input
            class="checkbox"
            type="checkbox"
            value="Безалкогольное"
            v-model="filters"
            @change="$emit('check', this.filters)"
          />
          <label>Безалкогольное</label>
        </div>
      </li>
      <li class="filter-options">
        <div class="option-name">Вкус</div>
        <div class="checkbox-box">
          <input
            class="checkbox"
            type="checkbox"
            value="Сладкое"
            v-model="filters"
            @change="$emit('check', this.filters)"
          />
          <label>Сладкое</label>
        </div>
        <div class="checkbox-box">
          <input
            class="checkbox"
            type="checkbox"
            value="Сливочное"
            v-model="filters"
            @change="$emit('check', this.filters)"
          />
          <label>Сливочное</label>
        </div>
        <div class="checkbox-box">
          <input
            class="checkbox"
            type="checkbox"
            value="Кофейное"
            v-model="filters"
            @change="$emit('check', this.filters)"
          />
          <label>Кофейное</label>
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
      filterVisible: window.screen.width > 768,
      filters: [],
    };
  },
  methods: {
    showFilter() {
      this.filterVisible = !this.filterVisible;
    },
    check() {},
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
