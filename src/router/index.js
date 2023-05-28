import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocumentsView from '@/views/DocumentsView.vue'
import GamesView from '../views/GamesView.vue'
import ContactView from '../views/ContactView.vue'
import CharacterComponent from '@/components/CharacterComponent.vue';
import ChooseComponent from '@/components/ChooseComponent.vue';
import TfComponent from '@/components/TfComponent.vue';
import TriviaComponent from '@/components/TriviaComponent.vue';
import PhraseComponent from '@/components/PhraseComponent.vue';
import SynomComponent from '@/components/SynomComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/synom',
    name: 'synom',
    component: SynomComponent
  },
  {
    path: '/documents',
    name: 'documents',
    component: DocumentsView
  },
  {
    path: '/games',
    name: 'games',
    component: GamesView
  },
  {
    path: '/character',
    name: 'character',
    component: CharacterComponent
  },
  {
    path: '/choose',
    name: 'choose',
    component: ChooseComponent
  },
  {
    path: '/phrase',
    name: 'phrase',
    component: PhraseComponent
  },
  {
    path: '/true',
    name: 'true',
    component: TfComponent
  },
  {
    path: '/trivia',
    name: 'trivia',
    component: TriviaComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
