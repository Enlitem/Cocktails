<template>
  <button class="btn">{{ text }}</button>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.btn {
  @apply bg-pink h-[35px] flex justify-center items-center text-[12px] md:text-[16px] md:h-[50px];
  font-weight: 500;
  line-height: 130%;
  border-radius: 0 7px 7px 0;
  color: #ffffff;
}

.btn:hover {
  @apply bg-[#E21B36];
}

.btn:active {
  @apply bg-[#C92037];
}
</style>
