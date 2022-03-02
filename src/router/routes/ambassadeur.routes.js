export default [
  {
    path: '/admin/ambassadeurs',
    name: 'AmbassadeursAdmin',
    component: () => import('../../views/admin/ambassadeurs/AmbassadeursAdminPage.vue')
  },
  {
    path: '/admin/ambassadeurs/ajouter',
    name: 'AmbassadeurAjouter',
    component: () => import('../../views/admin/ambassadeurs/AmbassadeurEditionPage.vue')
  },
  {
    path: '/admin/ambassadeurs/modifier/:id',
    name: 'AmbassadeurModifier',
    component: () => import('../../views/admin/ambassadeurs/AmbassadeurEditionPage.vue')
  }
]