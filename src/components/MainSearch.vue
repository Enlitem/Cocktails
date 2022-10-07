<template>
  <form class="flex items-center" @submit.prevent>
    <div class="text-field__icon text-field__icon_search text-field">
      <input
        class="input"
        v-model="ingredient"
        type="text"
        placeholder="Поиск по ингредиентам"
        @keyup.enter="addIngredient"
      />
    </div>
    <MainButton class="w-[25%]" text="Поиск" />
  </form>
</template>

<script>
import MainButton from '@/components/MainButton';
export default {
  name: 'MainSearch',
  components: { MainButton },
  data() {
    return {
      ingredient: '',
    };
  },
  methods: {
    addIngredient() {
      this.$emit('create', this.ingredient);
      this.ingredient = '';
    },
  },
};
</script>

<style scoped>
.input {
  @apply w-[95%];
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
</style>
