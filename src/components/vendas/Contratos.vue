<template>
    <div>
        <h5>Contratos</h5>
        <router-link class="btn btn-primary" :to="{ name: 'contratos', query: { leadId_like: 1} }">LeadId = 1</router-link>
        <router-link class="btn btn-primary" to="/home/vendas/contratos?servicoId_like=2">ServicoId = 2</router-link>

        <router-link class="btn btn-primary" :to="{ name: 'contratos', query: { leadId_like: 1, servicoId_like: 2} }">LeadId = 1 e servico_Id = 2</router-link>
        <router-link class="btn btn-primary" to="/home/vendas/contratos?servicoId_like=2&leadId_like=2">ServicoId = 2 e leadId = 2</router-link>
        
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Lead</th>
                    <th scope="col">Serviço</th>
                    <th scope="col">Data Inicio</th>
                    <th scope="col">Data Final</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="d in dados" :key="d.id">
                    <td>{{ d.id }}</td>
                    <td>{{ d.leadId }}</td>
                    <td>{{ d.servico.servico}}</td>
                    <td>{{ d.data_inicio }}</td>
                    <td>{{ d.data_fim }}</td>

                    <td>
                        <router-link :to="`/home/vendas/leads/${d.id}`" class="btn btn-sm btn-primary">
                            <i class="bi bi-pencil-square" style="cursor: pointer"></i>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin'

    export default{
        name: 'Leads',
        mixins: [ApiMixin],
        data: () => ({
            parametrosDeRelacionamento: '_expand=lead&_expand=servico'
        }),
        created() {
            this.getDadosApi(`http://127.0.0.1:3000/contratos?${this.parametrosDeRelacionamento}`)
        },
        beforeRouteUpdate(to, from, next) {
            const queryParams = new URLSearchParams(to.query).toString()
            const url = `http://127.0.0.1:3000/contratos?${this.parametrosDeRelacionamento}&${queryParams}`
            console.log(url)
            this.getDadosApi(url)
            next()
        }
    }
</script>