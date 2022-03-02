import blogRoutes from './blog.routes';
import ambassadeurRoutes from './ambassadeur.routes';
import valeurRoutes from './valeur.routes';
import texteRoutes from './texte.routes';
import equipeRoutes from './equipe.routes';


export default [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../../views/admin/AdminPage.vue')
  },
  ...blogRoutes,
  ...ambassadeurRoutes,
  ...valeurRoutes,
  ...texteRoutes,
  ...equipeRoutes
]