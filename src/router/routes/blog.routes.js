export default [
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import('../../views/BlogsPage.vue')
  },
  {
    path: '/blogs/:id',
    name: 'Blog',
    component: () => import('../../views/BlogPage.vue')
  },
  {
    path: '/admin/blogs',
    name: 'BlogsAdmin',
    component: () => import('../../views/admin/blogs/BlogsAdminPage.vue')
  },
  {
    path: '/admin/blogs/ajouter',
    name: 'BlogAjouter',
    component: () => import('../../views/admin/blogs/BlogEditionPage.vue')
  },
  {
    path: '/admin/blogs/modifier/:id',
    name: 'BlogModifier',
    component: () => import('../../views/admin/blogs/BlogEditionPage.vue')
  },
]