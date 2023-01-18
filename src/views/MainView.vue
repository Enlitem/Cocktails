<template>
  <div>
    <h1
      class="mb-[6px] font-raleway text-[24px] font-[500] leading-[29px] md:text-[36px] md:leading-[42px] md:tracking-[0.03em] lg:text-[50px] lg:tracking-[0.05em]"
    >
      Рецепты коктейлей в одном месте
    </h1>
    <h2 class="text-grey text-[14px] leading-[129%] mb-[32px] md:w-[75%] md:text-[16px] lg:w-[65%]">
      Господа, сложившаяся структура организации способствует повышению качества поставленных обществом задач.
    </h2>
    <MainSearch />
    <div>
      <img class="main-img" src="@/assets/MainImg.png" alt="IMG" />
    </div>
  </div>
</template>

<script>
import MainSearch from '@/components/MainSearch';
import AppNavbar from '@/components/AppNavbar';
export default {
  name: 'MainView',
  components: { MainSearch },
  data() {
    return {};
  },
};
</script>

<style scoped>
.main-img {
  @apply min-h-[250px] max-h-[320px] w-[100%] lg:min-h-[320px] xl:max-h-[410px];
  object-fit: cover;
  object-position: center;
  border-radius: 30px;
}
</style>
