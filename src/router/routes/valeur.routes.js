export default [
  {
    path: '/admin/valeurs',
    name: 'ValeursAdmin',
    component: () => import('../../views/admin/valeurs/ValeursAdminPage.vue')
  },
  {
    path: '/admin/valeurs/ajouter',
    name: 'ValeurAjouter',
    component: () => import('../../views/admin/valeurs/ValeurEditionPage.vue')
  },
  {
    path: '/admin/valeurs/modifier/:id',
    name: 'ValeurModifier',
    component: () => import('../../views/admin/valeurs/ValeurEditionPage.vue')
  }
]