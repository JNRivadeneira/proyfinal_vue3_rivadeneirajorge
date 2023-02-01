import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
      path: '/menu/entradas',
      name: 'menuEntradas',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "menuEntradas" */ '../views/MenuEntradasView.vue')
    },
    {
      path: '/menu/carnes',
      name: 'menuCarnes',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "menuCarnes" */ '../views/MenuCarnesView.vue')
    },
    {
      path: '/menu/ensaladas',
      name: 'menuEnsaladas',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "menuEnsaladas" */ '../views/MenuEnsaladasView.vue')
    },
    {
      path: '/menu/pastas',
      name: 'menuPastas',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "menuPastas" */ '../views/MenuPastasView.vue')
    },
    {
      path: '/menu/veganos',
      name: 'menuVeganos',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "menuVeganos" */ '../views/MenuVeganosView.vue')
    },
    {
      path: '/menu/pescadosmariscos',
      name: 'menuPescadosMariscos',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "menuPescadosMariscos" */ '../views/MenuPescadosMariscosView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "menu" */ '../views/ListadoView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "registro" */ '../views/RegisterFormView.vue')
    },
    {
      path: '/prueba',
      name: 'prueba',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "prueba" */ '../views/PruebaView.vue')
    },
    {
      path: '/index',
      name: 'landingPage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "landingPage" */ '../views/LandingPageView.vue')
    },
    {
      path: '/newproduct',
      name: 'newproduct',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "newproduct" */ '../views/NewProductView.vue')
    }
  ]  
})

export default router;