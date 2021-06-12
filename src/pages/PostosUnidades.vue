<template>
  <q-page padding class="container">
    <section id="header">
      <div class="row q-pa-lg justify-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <q-icon @click="$router.push('/home')" name="o_arrow_back" style="color:#228176;" size="2em" left />
          <p style="color:#228176; font-weight: bold; font-size: 24px; text-align: center; width: 100%; ">Unidade de coleta</p>
          <q-select style="margin-top:18px;" filled v-model="tpEstado" :options="options" label="Estado (UF) do hemocentro" @input="buscarUnidades" />
          <div style="color:#228176; margin-left: 18px; margin-top: 20px;">
            <div class="hemocentro" v-for="hemocentro in hemocentros" :key="hemocentro.id_hemocentro">
              <p><b>{{hemocentro.unidade}}</b><br>
              <a :href="hemocentro.link" target="_blank">Acesse o site</a></p>
            </div>
          </div>
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
      hemocentros: null,
      tpEstado: null,
      options: [
        {
          label: 'Acre AC',
          value: 'AC'
        },
        {
          label: 'Alagoas AL',
          value: 'AL'
        },
        {
          label: 'Amapá AP',
          value: 'AP'
        },
        {
          label: 'Amazonas AM',
          value: 'AM'
        },
        {
          label: 'Bahia BA',
          value: 'BA'
        },
        {
          label: 'Ceará CE',
          value: 'CE'
        },
        {
          label: 'Espírito Santo ES',
          value: 'ES'
        },
        {
          label: 'Goiás GO',
          value: 'GO'
        },
        {
          label: 'Maranhão MA',
          value: 'MA'
        },
        {
          label: 'Mato Grosso MT',
          value: 'MT'
        },
        {
          label: 'Mato Grosso do Sul MS',
          value: 'MS'
        },
        {
          label: 'Minas Gerais MG',
          value: 'MG'
        },
        {
          label: 'Pará PA',
          value: 'PA'
        },
        {
          label: 'Paraíba PB',
          value: 'PB'
        },
        {
          label: 'Paraná PR',
          value: 'PR'
        },
        {
          label: 'Pernambuco PE',
          value: 'PE'
        },
        {
          label: 'Piauí PI',
          value: 'PI'
        },
        {
          label: 'Rio de Janeiro RJ',
          value: 'RJ'
        },
        {
          label: 'Rio Grande do Norte RN',
          value: 'RN'
        },
        {
          label: 'Rio Grande do Sul RS',
          value: 'RS'
        },
        {
          label: 'Rondônia RO',
          value: 'RO'
        },
        {
          label: 'Roraima RR',
          value: 'RR'
        },
        {
          label: 'Santa Catarina SC',
          value: 'SC'
        },
        {
          label: 'São Paulo SP',
          value: 'SP'
        },
        {
          label: 'Sergipe SE',
          value: 'SE'
        },
        {
          label: 'Tocantins TO',
          value: 'TO'
        },
        {
          label: 'Distrito Federal DF',
          value: 'DF'
        }
      ]
    }
  },
  methods: {
    buscarUnidades () {
      // console.log('ESTADO SELECIONADO: ' + this.tpEstado.value)
      this.$axios.get('http://localhost:3000/hemocentros/' + this.tpEstado.value).then(respostas => {
        this.hemocentros = respostas.data.hemocentros
      })
    }
  }
}
</script>
