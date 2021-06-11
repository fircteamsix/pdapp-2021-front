<template>
  <q-page padding class="container">
    <section id="header">
      <div class="row q-pa-lg justify-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <q-icon @click="$router.push('/home')" name="o_arrow_back" style="color:#228176;" size="2em" left />
          <p style="color:#228176; font-weight: bold; font-size: 24px; text-align: center; width: 100%; ">Unidade de coleta</p>
          <q-select style="margin-top:18px;" filled v-model="tpEstado" :options="options" label="Estado (UF) do hemocentro" @input="buscarUnidades" />
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
      const xhr = new XMLHttpRequest()
      // console.log('ESTADO SELECIONADO: ' + this.tpEstado.value)
      xhr.onload = function () {
        if (this.status === 200) {
          try {
            const obj = JSON.parse(this.responseText)
            // const obj = this.responseText
            for (const i in obj.hemocentros) {
              console.log(obj.hemocentros[i].estado)
              if (obj.hemocentros[i].estado.toLowerCase() === this.tpEstado.value) {
                console.log(obj.hemocentros[i].link)
              }
            }
          } catch (e) {
            console.warn('O aquivo não é um JSON valido. erro: ' + e)
          }
        } else {
          console.warn('Erro ao ler o arquivo.')
        }
      }
      xhr.open('get', '../hemocentros.json')
      xhr.send()
    }
  }
}
</script>
