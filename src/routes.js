
import Home from './components/home/Home.vue'
import Contact from './components/contact/Contact.vue'
import Skill from './components/skill/Skill.vue'
import Func from './components/func/Func.vue'
import LoginAccess from './components/login/LoginAccess.vue'

export const routes = [

  { path: '/', component: Home, title: 'header.home', meta: { public: true }, key: 1, icon: 'mdi-home' },
  { path: '/contact', component: Contact, title: 'header.contact', meta: { public: true }, key: 2, icon: 'mdi-cellphone' },
  { path: '/skill', component: Skill, title: 'header.skill', meta: { public: true }, key: 3, icon: 'mdi-lightbulb-on-outline' },
  { path: '/funcionalidades', component: Func, title: 'header.func', meta: { public: true }, key: 4, icon: 'mdi-note-edit-outline' },
  { path: '/login', component: LoginAccess, title: 'header.login', meta: { public: true }, login: { public: false }, key: 5, icon: 'mdi-login' }

]
