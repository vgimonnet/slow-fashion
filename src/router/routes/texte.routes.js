export default [
  {
    path: '/admin/textes/accueil',
    name: 'TexteAccueilModifier',
    component: () => import('../../views/admin/textes/AccueilEditionPage.vue')
  },
  {
    path: '/admin/textes/donation',
    name: 'TexteDonationModifier',
    component: () => import('../../views/admin/textes/DonationEditionPage.vue')
  },
  {
    path: '/admin/textes/partenaire',
    name: 'TextePartenaireModifier',
    component: () => import('../../views/admin/textes/PartenaireEditionPage.vue')
  }
]