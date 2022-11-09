import Cocktails from '@/views/CocktailsView';
import Main from '@/views/MainView';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/cocktails/',
    name: 'cocktails',
    component: Cocktails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
