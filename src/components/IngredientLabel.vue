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
      type: String,
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
  @apply w-[6.65px] h-[6.65px] md:w-[9.33px] md:h-[9.33px];
}

.label-img {
  @apply px-[3px] py-[5px] md:px-1 md:py-[6px];
}

.label-text {
  @apply py-0.5 px-[6px] text-[10px] md:py-[3px] md:px-3 md:text-[12px];
  font-weight: 400;
  line-height: 130%;
  border-right: 1px solid #443e3e;
}
</style>
