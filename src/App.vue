<template>
  <div class="app spacing">
    <app-navbar />
    <router-view> </router-view>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar';
export default {
  components: { AppNavbar },
};
</script>

<style>
* {
  @apply font-sans leading-[130%];
}
.spacing {
  @apply px-5 mr-auto ml-auto max-w-[1216px];
}
.router-link-active {
  @apply text-pink;
}
</style>
