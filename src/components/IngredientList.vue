<template>
  <div class="flex flex-wrap gap-x-2.5 gap-y-2 md:gap-x-[15px]" v-if="ingredients.length > 0">
    <ingredient-label
      v-for="ingredient in ingredients"
      :key="ingredient.id"
      :ingredient="ingredient.ingredient"
      @remove="$emit('remove', ingredient)"
    />
  </div>
</template>

<script>
import IngredientLabel from '@/components/IngredientLabel';
export default {
  name: 'IngredientList',
  components: { IngredientLabel },
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
