import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'

import Vendas from '@/components/vendas/Vendas.vue'
import Leads from '@/components/vendas/Leads.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'
import Lead from '@/components/vendas/Lead.vue'
import Contratos from '@/components/vendas/Contratos.vue'

import Servicos from '@/components/servicos/Servicos.vue'

import Login from '@/views/Login.vue'
import Site from '@/views/Site.vue'

const routes = [
    {
        path: '/', // localhost:8080/site
        name: '/',
        component: Site
    },
    {
        path: '/home', // localhost:8080/home
        name: 'home',
        component: Home,
        children: [
            {
                path: 'vendas', // localhost:8080/home/vendas
                name: '',
                component: Vendas,
                children: [
                    {
                        path: 'leads/:id', // localhost:8080/home/vendas/leads/5
                        name: 'leads/{$id}',
                        component: Lead,
                    },
                    {
                        path: 'leads', // localhost:8080/home/vendas/leads
                        name: 'leads',
                        component: Leads,
                    },
                    {
                        path: 'contratos', // localhost:8080/home/vendas/contratos
                        name: 'contratos',
                        component: Contratos,
                    },
                    {
                        path: '', // localhost:8080/home/vendas/
                        name: 'vendas',
                        component: VendasPadrao,
                    },
                ]
            },

            {
                path: 'servicos', // localhost:8080/home/servicos
                name: 'servicos',
                component: Servicos
            },

            {
                path: 'dashboard', // localhost:8080/home/dashboard
                name: 'dashboard',
                component: Dashboard
            }
        ]
    },
    {
        path: '/login', // localhost:8080/login
        name: 'login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router