<template>
  <div class="results-box w-full bg-[#FFFFFF]">
    <ul>
      <li
        class="mb-2 pl-[32px] last:mb-0 select-none truncate hover:bg-[#F5F5F5]"
        v-for="result in results"
        :key="result"
        @click="$emit('add', result)"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainSearchResults',
  props: {
    results: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style scoped>
.results-box {
  border-width: 1px;
  border-style: solid;
  border-color: #443e3e;
  border-radius: 0 0 9px 9px;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  padding: 10px 0 10px 0;
  top: calc(100% - 1px);
}
</style>
