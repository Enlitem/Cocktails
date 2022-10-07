<template>
  <div class="btn">
    <button>{{ text }}</button>
  </div>
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
  @apply bg-pink py-[10px] flex justify-center;
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;
  border-radius: 0 7px 7px 0;
  color: #ffffff;
}
</style>
