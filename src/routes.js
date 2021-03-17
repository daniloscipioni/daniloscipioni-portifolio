
import Home from './components/home/Home.vue'
import Contact from './components/contact/Contact.vue'
import Skill from './components/skill/Skill.vue'
import Func from './components/func/Func.vue'



export const routes = [

  { path: '', component: Home, title:'header.home' },
  { path: '/contact', component: Contact, title:'header.contact' },
  { path: '/skill', component: Skill, title:'header.skill'},
  { path: '/funcionalidades', component: Func, title:'header.func' }

]

