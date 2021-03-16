
import Home from './components/home/Home.vue'
import Contact from './components/contact/Contact.vue'
import Skill from './components/skill/Skill.vue'
import Func from './components/func/Func.vue'



export const routes = [

  { path: '', component: Home },
  { path: '/contact', component: Contact },
  { path: '/skill', component: Skill},
  { path: '/funcionalidades', component: Func }

]

