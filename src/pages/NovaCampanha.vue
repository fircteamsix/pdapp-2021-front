<template>
  <q-page padding class="container">
    <section id="header">
      <div class="row q-pa-lg justify-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <p style="color:#228176; font-weight: bold; font-size: 24px; text-align: center; width: 100%; margin-top:36px;">Criar uma Campanha</p>
          <q-input v-model="tituloCampanha" style="margin-top:36px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="Titulo da Campanha" />

          <q-input label="Inicio da Campanha" filled v-model="dateInicio" mask="date" :rules="['date']" style="margin-top:18px;" >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="dateInicio">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input label="Término da Campanha" filled v-model="dateTermino" mask="date" :rules="['date']" >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="dateTermino">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-select style="margin-top:2px;" filled v-model="tpEstado" :options="opEstado" label="Estado" />

          <q-input v-model="localDoacao" style="margin-top:18px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="Local para doação" />

          <q-select style="margin-top:18px;" borderless v-model="tpSanguineo" :options="opSanguineo" label="Tipo Sanguíneo" />

        <div id="buttoncustom" class="row q-pa-lg justify-center">
          <q-btn  color="#FFF" label="ATUALIZAR" style="background: #228176; margin-top: 18px;" v-if="this.rotaEditar" @click="atualizar" />
          <q-btn  color="#FFF" label="CRIAR" style="background: #228176; margin-top: 18px;" v-else @click="cadastrar" />
          <q-btn  color="#FFF" label="CANCELAR" style="color: #228176; margin-top: 18px;" outline  to="/home"/>
        </div>

        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { Cookies } from 'quasar'
export default {
  // name: 'PageName',
  data () {
    return {
      rotaEditar: this.$route.params.id_campanha,
      dateInicio: null,
      dateTermino: null,
      tpSanguineo: null,
      tituloCampanha: null,
      localDoacao: null,
      opSanguineo: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Todos os tipos sanguineos'],
      tpEstado: null,
      opEstado: ['Acre AC', 'Alagoas AL', 'Amapá AP', 'Amazonas AM', 'Bahia BA', 'Ceará CE', 'Espírito Santo ES', 'Goiás GO', 'Maranhão MA', 'Mato Grosso MT', 'Mato Grosso do Sul MS', 'Minas Gerais MG', 'Pará PA', 'Paraíba PB', 'Paraná PR', 'Pernambuco PE', 'Piauí PI', 'Rio de Janeiro RJ', 'Rio Grande do Norte RN', 'Rio Grande do Sul RS', 'Rondônia RO', 'Roraima RR', 'Santa Catarina SC', 'São Paulo SP', 'Sergipe SE', 'Tocantins TO', 'Distrito Federal DF']
    }
  },
  methods: {
    cadastrar () {
      const user = Cookies.get('login-pdapp')
      this.$axios.post('http://localhost:3000/campanhas', {
        titulo_paciente: this.tituloCampanha,
        data_inicio: this.dateInicio,
        data_termino: this.dateTermino,
        local_doacao: this.localDoacao,
        tipo_sanguineo: this.tpSanguineo,
        estado: this.tpEstado,
        cd_usuario: user.chave
      }).then(resposta => {
        if (resposta.status !== 201) {
          // erro
        } else {
          this.$router.push('/templatecampanha/' + resposta.data.campanha.id_campanha)
        }
      }).catch(erro => {
        // Exibir alerta caso o status for diferente de 201
      })
    },
    atualizar () {
      this.$axios.put('http://localhost:3000/campanhas/' + this.$route.params.id_campanha, {
        titulo_paciente: this.tituloCampanha,
        data_inicio: this.dateInicio,
        data_termino: this.dateTermino,
        local_doacao: this.localDoacao,
        tipo_sanguineo: this.tpSanguineo,
        estado: this.tpEstado
      }).then(resposta => {
        if (resposta.status !== 200) {
          // erro
        } else {
          this.$router.push('/templatecampanha/' + this.$route.params.id_campanha)
        }
      }).catch(erro => {
        // Exibir alerta caso o status for diferente de 200
      })
    },
    buscarCampanha () {
      if (this.route.params.id_campanha) {
        this.$axios.get('http://localhost:3000/campanhas/' + this.$route.params.id_campanha).then(resposta => {
          this.dateInicio = resposta.data.campanha.data_inicio
          this.dateTermino = resposta.data.campanha.data_termino
          this.tpSanguineo = resposta.data.campanha.tipo_sanguineo
          this.tituloCampanha = resposta.data.campanha.titulo_paciente
          this.localDoacao = resposta.data.campanha.local_doacao
          this.tpEstado = resposta.data.campanha.estado
        })
      }
    }
  },
  beforeMount () {
    this.buscarCampanha()
  }
}
</script>

<style>
  #buttoncustom .q-btn {
    width: 269px;
    height: 52px;
  }
</style>
