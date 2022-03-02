import { createWebHistory, createRouter } from 'vue-router';
import adminRoutes from './routes/admin.routes';

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: () => import('../views/AccueilPage.vue')
  },
  ...adminRoutes  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;