
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/cadastro', component: () => import('pages/NovoPerfil.vue') },
      { path: '/home', component: () => import('pages/home.vue') },
      { path: '/novacampanha', component: () => import('pages/NovaCampanha.vue') },
      { path: '/postosunidades', component: () => import('pages/PostosUnidades.vue') },
      { path: '/campanhas', component: () => import('pages/Campanhas.vue') },
      { path: '/criarcampanha', component: () => import('pages/NovaCampanha.vue') },
      { path: '/informacoesuteis', component: () => import('pages/InformacoesUteis.vue') },
      { path: '/termodeuso', component: () => import('pages/TermoUso.vue') },
      { path: '/politicadeuso', component: () => import('pages/PoliticaUso.vue') },
      { path: '/perfil', component: () => import('pages/Perfil.vue') },
      { path: '/templatecampanha', component: () => import('pages/TemplateCampanha.vue') },
      { path: '/ajudafeedback', component: () => import('pages/AjudaFeedback.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
