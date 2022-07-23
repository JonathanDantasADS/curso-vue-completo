import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import DashboardRodape from '@/components/dashboard/DashboardRodape.vue'

import Vendas from '@/components/vendas/Vendas.vue'
import Leads from '@/components/vendas/Leads.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'
import Lead from '@/components/vendas/Lead.vue'
import Contratos from '@/components/vendas/Contratos.vue'

import Servicos from '@/components/servicos/Servicos.vue'
import Servico from '@/components/servicos/Servico.vue'
import Indicadores from '@/components/servicos/Indicadores.vue'
import Opcoes from '@/components/servicos/Opcoes.vue'

import Login from '@/views/Login.vue'
import Site from '@/views/Site.vue'

import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada.vue'

const routes = [
    {
        path: '/', // localhost:8080/site
        name: '/',
        component: Site,
        meta: { 
            requerAutorizacao: false 
        }
    },
    {
        path: '/home', // localhost:8080/home
        alias: '/app',
        name: 'home',
        component: Home,
        meta: { 
            requerAutorizacao: true 
        },
        children: [
            {
                path: 'vendas', // localhost:8080/home/vendas
                name: '',
                component: Vendas,
                children: [
                    {
                        path: 'leads', // localhost:8080/home/vendas/leads
                        name: 'leads',
                        component: Leads,
                        
                        // beforeEnter(to, from, next){
                        beforeEnter(){
                            // Poderiamos verificar se o usuário tem permissão de acesso a rota
                            console.log('Guarda de rota beforeEnter')
                        },
                    },
                    {
                        path: 'leads/:id', // localhost:8080/home/vendas/leads/5
                        props: true,
                        name: 'leads/{$id}',
                        component: Lead,
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
                component: Servicos,
                children: [
                    {
                        path: ':id', // localhost:8080/home/servicos/5
                        name: 'servico',
                        components: {
                            default: Servico,
                            opcoes: Opcoes,
                            indicadores: Indicadores,
                        },
                        props: {
                            default: true,
                            indicadores: true,
                            opcoes: true,
                        },

                    }
                ]
            },

            {
                path: '/:catchAll(.*)*', 
                component: PaginaNaoEncontrada
            },

            {
                path: 'dashboard', // localhost:8080/home/dashboard
                name: 'dashboard',
                components: {
                    default: Dashboard,
                    rodape: DashboardRodape,
                }
            }
        ]
    },
    {
        path: '/login', // localhost:8080/login
        name: 'login',
        meta: {
            requerAutorizacao: false,
            campo2: 'teste'
        },
        component: Login
    },
    {
        path: '/redirecionamento-1', 
        redirect: '/home/servicos'
    },
    {
        path: '/redirecionamento-2', 
        redirect: { name: 'leads'}
    },
    {
        path: '/redirecionamento-3', 
        redirect: '/home/servicos'
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// router.beforeEach(to => {
router.beforeEach(() => {
    // console.log(`-> Destino: ${to.path}`)
    console.log(`Guarda global beforeEach`)
})

// router.afterEach((to, from) => {
router.afterEach(() => {
    // console.log(`Origem: ${from.path} -> Destino: ${to.path}`)
    console.log(`Guarda global afterEach`)
})

router.beforeResolve(() => {
    console.log('Guarda global beforeResolve')
})

export default router