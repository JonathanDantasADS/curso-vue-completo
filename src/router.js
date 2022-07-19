import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'

import Vendas from '@/components/vendas/Vendas.vue'
import Leads from '@/components/vendas/Leads.vue'
import Contratos from '@/components/vendas/Contratos.vue'

import Servicos from '@/components/servicos/Servicos.vue'

import Login from '@/views/Login.vue'
import Site from '@/views/Site.vue'

const routes = [
    {
        path: '/', // localhost:8080/site
        component: Site
    },
    {
        path: '/home', // localhost:8080/home
        component: Home,
        children: [
            {
                path: 'vendas', // localhost:8080/home/vendas
                component: Vendas,
                children: [
                    {
                        path: 'leads', // localhost:8080/home/vendas/leads
                        component: Leads,
                    },
                    {
                        path: 'contratos', // localhost:8080/home/vendas/contratos
                        component: Contratos,
                    }
                ]
            },

            {
                path: 'servicos', // localhost:8080/home/servicos
                component: Servicos
            },

            {
                path: 'dashboard', // localhost:8080/home/dashboard
                component: Dashboard
            }
        ]
    },
    {
        path: '/login', // localhost:8080/login
        component: Login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router