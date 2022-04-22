import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduction from '../views/Introduction.vue'
import description from '../views/description.vue'
import SubjectContent from '../views/SubjectContent.vue'
import workSchedule from '../views/workSchedule.vue'
import Profile from '../views/Profile.vue'
import Conclusions from '../views/Conclusions.vue'
import Calendarizacion from '../views/Calendarizacion.vue'
import practicasDesarrolladas from '../views/practicasDesarrolladas.vue'
import laboratorios from '../views/laboratorios.vue'
import proyectosInGrup from '../views/proyectosInGrup.vue'
import materiales from '../views/materiales.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Profile',
    component: Profile
  },

  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction
  },

  {
    path:'/descripcion',
    name:'description',
    component:description
  },

  {
    path:'/subjectContent',
    name:'SubjectContent',
    component:SubjectContent
  },

  {
    path:'/workSchedule',
    name:'workSchedule',
    component:workSchedule
  },
  {
    path:'/calendarizacion',
    name:'Calendarizacion',
    component:Calendarizacion
  },
  {
    path:'/profile',
    name:'Profile',
    component:Profile
  },

  {
    path:'/conclusions',
    name:'Conclusions',
    component:Conclusions
  },
  {
    path:'/practicasDesarrolladas',
    name:'practicasDesarrolladas',
    component:practicasDesarrolladas
  },
  {
    path:'/laboratorios',
    name:'laboratorios',
    component:laboratorios
  },
  {
    path:'/proyectosInGrup',
    name:'proyectosInGrup',
    component:proyectosInGrup
  },

  {
    path:'/materiales',
    name:'materiales',
    component:materiales
  },


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
