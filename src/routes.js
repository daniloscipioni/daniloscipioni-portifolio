
import Home from './components/home/Home.vue'
import Contato from './components/contato/Contato.vue'
import Curriculo from './components/curriculo/Curriculo.vue'
import Funcionalidades from './components/funcionalidades/Funcionalidades.vue'
import i18n from './i18n'

export const routes = [

  { path: '', component: Home, titulo: 'Home' },
  { path: '/contato', component: Contato, titulo: 'Contato' },
  { path: '/curriculo', component: Curriculo, titulo: 'Curriculo' },
  { path: '/funcionalidades', component: Funcionalidades, titulo: 'Funcionalidades' }

]
