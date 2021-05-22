<template>
  <q-page padding class="container">
    <section id="header">
      <div class="row q-pa-lg justify-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <q-icon @click="$router.push('/home')" name="o_arrow_back" style="color:#228176;" size="2em" left />
          <p style="color:#228176; font-weight: bold; font-size: 24px; text-align: center; width: 100%; ">Unidade de coleta</p>
          <q-select style="margin-top:18px;" filled v-model="tpEstado" :options="opEstado" label="Estado (UF) do hemocentro" @input="buscarUnidades" />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'PostosUnidades',
  data () {
    return {
      tpEstado: null,
      opEstado: ['Acre AC', 'Alagoas AL', 'Amapá AP', 'Amazonas AM', 'Bahia BA', 'Ceará CE', 'Espírito Santo ES', 'Goiás GO', 'Maranhão MA', 'Mato Grosso MT', 'Mato Grosso do Sul MS', 'Minas Gerais MG', 'Pará PA', 'Paraíba PB', 'Paraná PR', 'Pernambuco PE', 'Piauí PI', 'Rio de Janeiro RJ', 'Rio Grande do Norte RN', 'Rio Grande do Sul RS', 'Rondônia RO', 'Roraima RR', 'Santa Catarina SC', 'São Paulo SP', 'Sergipe SE', 'Tocantins TO', 'Distrito Federal DF']
    }
  },
  methods: {
    buscarUnidades () {
      console.log('ESTADO SELECIONADO: ' + this.tpEstado)
      console.log('Bucar os dados das unidade de acordo com estado na API')
    }
  }
}
</script>
