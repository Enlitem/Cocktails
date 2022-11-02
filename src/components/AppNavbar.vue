<template>
  <nav class="flex items-center justify-between pt-[11px] pb-[10px] mb-[60px] lg:pt-[19px] lg:pb-[16px]">
    <div class="logo">LOGO</div>
    <div class="flex justify-between items-center">
      <div class="hidden lg:block lg:mr-[144px]">
        <ul class="flex">
          <li class="nav-item">
            <router-link :class="[currentRouteName === 'main' ? 'link-active' : '']" to="/">Главная</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="[currentRouteName === 'cocktails' ? 'link-active' : '']" to="cocktails"
              >Коктейли</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="">Калькулятор вечеринок</router-link>
          </li>
        </ul>
      </div>
      <img class="mr-[9px]" src="@/assets/favourites.svg" alt="Favourites" />
      <img class="w-[18px] h-[13px] lg:hidden" src="@/assets/burger.svg" alt="Favourites" />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
nav {
  border-bottom: 1px solid #cccccc;
}
.logo {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #443e3e;
}
.link-active {
  @apply text-pink;
}

.nav-item {
  @apply mr-11 last:mr-0 text-[14px] font-normal leading-[129%] text-grey;
}
</style>
