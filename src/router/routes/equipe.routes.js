export default [
  {
    path: '/admin/equipe',
    name: 'EquipeAdmin',
    component: () => import('../../views/admin/equipe/EquipeAdminPage.vue')
  },
  {
    path: '/admin/equipe/ajouter',
    name: 'EquipeAjouter',
    component: () => import('../../views/admin/equipe/EquipeEditionPage.vue')
  },
  {
    path: '/admin/equipe/modifier/:id',
    name: 'EquipeModifier',
    component: () => import('../../views/admin/equipe/EquipeEditionPage.vue')
  }
]