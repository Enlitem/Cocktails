<template>
  <nav
    class="fixed z-50 left-0 right-0 px-5 w-[100vw] max-w-[1256px] m-auto pt-[11px] lg:pt-[19px]"
    :class="{ 'navbar-hidden': !showNavbar }"
  >
    <div class="bordered flex items-center justify-between pb-[10px] lg:pb-[16px]">
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
          </ul>
        </div>
        <router-link to="/likes" active-class="router-link-active">
          <img v-if="$route.path === '/likes'" class="mr-[3px]" src="@/assets/favouritesEnabled.svg" alt="Favourites" />
          <img v-else class="mr-[3px]" src="@/assets/favourites.svg" alt="Favourites" />
        </router-link>
        <div class="lg:hidden">
          <main-burger-menu>
            <ul>
              <li class="nav-item burger-item">
                <router-link to="/" exact>Главная</router-link>
              </li>
              <li class="nav-item burger-item">
                <router-link to="/cocktails">Коктейли</router-link>
              </li>
            </ul>
          </main-burger-menu>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import MainBurgerMenu from '@/components/MainBurgerMenu';
export default {
  name: 'AppNavbar',
  components: { MainBurgerMenu },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 50) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style scoped>
nav {
  background-color: #ffffff;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}

.navbar-hidden {
  transform: translate3d(0, -100%, 0);
}

.bordered {
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
