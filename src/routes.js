
import Home from './components/home/Home.vue'
import Contact from './components/contact/Contact.vue'
import Skill from './components/skill/Skill.vue'
import Func from './components/func/Func.vue'
import LoginAccess from './components/login/LoginAccess.vue'

export const routes = [

  { path: '', component: Home, title: 'header.home', meta: { public: true }, key: 1 },
  { path: '/contact', component: Contact, title: 'header.contact', key: 2 },
  { path: '/skill', component: Skill, title: 'header.skill', key: 3 },
  { path: '/funcionalidades', component: Func, title: 'header.func', key: 4 },
  { path: '/login', component: LoginAccess, title: 'header.login', meta: { public: true }, login: { public: false }, key: 5 },

]
