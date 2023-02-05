import AllCocktails from '@/views/AllCocktailsView';
import Cocktails from '@/views/CocktailsView';
import Drink from '@/views/DrinkView';
import Likes from '@/views/LikesView';
import Main from '@/views/MainView';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/cocktails',
    name: 'cocktails',
    component: Cocktails,
    children: [
      {
        path: '',
        name: 'allCocktails',
        component: AllCocktails,
      },
      {
        path: ':drinkName',
        name: 'drink',
        component: Drink,
        props: true,
      },
    ],
  },
  {
    path: '/likes',
    name: 'likes',
    component: Likes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
