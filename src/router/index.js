import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/quiz/:id',
    name: 'Quiz',
    component: () => import(/*webpackChunkName: "quiz"*/ '../views/Quiz.vue'),
  },
  {
    path: '/results',
    name: 'Results',
    component: () => import(/*webpackChuckName: "results"*/ '../views/Results.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
