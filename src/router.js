import { createRouter, createWebHistory } from "vue-router";
import AboutView from './views/AboutView.vue';
import ContactsView from './views/ContactsView.vue';
import ProjectsView from './views/ProjectsView.vue';
import HomeView from './views/HomeView.vue';
import NotFound from './views/NotFound.vue';
import PrivacyView from './views/PrivacyView.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            'path': '/',
            'name': 'home',
            'component': HomeView
        },
        {
            'path': '/about',
            'name': 'about',
            'component': AboutView
        },
        {
            'path': '/contacts',
            'name': 'contacts',
            'component': ContactsView
        },
        {
            'path': '/projects',
            'name': 'projects',
            'component': ProjectsView
        },
        {
            'path': '/:pathMatch(.*)*',
            'name': 'NotFound',
            'component': NotFound
        },
        {
            'path': '/privacy',
            'name': 'privacy',
            'component': PrivacyView
        }
    ]
})

export { router }