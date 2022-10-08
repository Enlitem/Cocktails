<template>
  <div class="label-box">
    <div class="label-text">{{ ingredient }}</div>
    <button class="label-img" @click="$emit('remove', ingredient)">
      <img class="img" src="@/assets/dismiss.svg" alt="Dismiss" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'IngredientLabel',
  props: {
    ingredient: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.label-box {
  @apply inline-flex items-center inline-block;
  border: 1px solid grey;
  border-radius: 4px;
}

.img {
  @apply w-[6.65px] h-[6.65px];
}

.label-img {
  @apply px-[3px] py-[5px];
}

.label-text {
  @apply py-0.5 px-[6px];
  font-weight: 400;
  font-size: 10px;
  line-height: 130%;
  border-right: 1px solid #443e3e;
}
</style>
