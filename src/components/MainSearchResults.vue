<template>
  <div class="results-box top-full w-full bg-[#FFFFFF]">
    <ul>
      <li
        class="mb-2 last:mb-0 select-none truncate hover:bg-light-grey"
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
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: #999999;
  border-radius: 0 0 9px 9px;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  padding-left: 32px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
