<template>
  <nav class="flex items-center justify-between pt-[11px] pb-[10px] mb-[60px] lg:pt-[19px] lg:pb-[16px]">
    <router-link to="/" exact>
      <div class="logo">LOGO</div>
    </router-link>
    <div class="flex justify-between items-center">
      <div class="hidden lg:block lg:mr-[144px]">
        <ul class="flex">
          <li class="nav-item">
            <router-link to="/" exact>Главная</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cocktails">Коктейли</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/party">Калькулятор вечеринок</router-link>
          </li>
        </ul>
      </div>
      <img class="mr-[3px]" src="@/assets/favourites.svg" alt="Favourites" />
      <div class="lg:hidden">
        <main-burger-menu>
          <ul>
            <li class="nav-item burger-item">
              <router-link to="/" exact>Главная</router-link>
            </li>
            <li class="nav-item burger-item">
              <router-link to="/cocktails">Коктейли</router-link>
            </li>
            <li class="nav-item burger-item">
              <router-link to="/party">Калькулятор вечеринок</router-link>
            </li>
          </ul>
        </main-burger-menu>
      </div>
    </div>
  </nav>
</template>

<script>
import MainBurgerMenu from '@/components/MainBurgerMenu';
export default {
  name: 'AppNavbar',
  components: { MainBurgerMenu },
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

.nav-item {
  @apply mr-11 last:mr-0 text-[14px] font-normal leading-[129%] text-grey;
}

.burger-item {
  @apply mb-[20px];
}
</style>
