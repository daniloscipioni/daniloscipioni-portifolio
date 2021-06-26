
import Home from './components/home/Home.vue'
import Contact from './components/contact/Contact.vue'
import Skill from './components/skill/Skill.vue'
import Func from './components/func/Func.vue'
import LoginAccess from './components/login/LoginAccess.vue'

export const routes = [

  { path: '', component: Home, title: 'header.home', meta: { public: true } },
  { path: '/contact', component: Contact, title: 'header.contact', meta: { public: true } },
  { path: '/skill', component: Skill, title: 'header.skill' },
  { path: '/funcionalidades', component: Func, title: 'header.func', meta: { public: true } },
  { path: '/login', component: LoginAccess, title: 'header.login', meta: { public: true } }

]
