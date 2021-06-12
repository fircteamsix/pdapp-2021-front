<template>
  <q-page padding class="container">
    <section id="header">
      <div class="row q-pa-lg justify-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <p style="color:#228176; font-weight: bold; font-size: 24px; text-align: center; width: 100%; margin-top:36px;">Perfil</p>
          <q-input v-model="usuario.nome" style="margin-top:36px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="Nome" />
          <q-input label="Nascimento (dia/mês/ano)" filled v-model="usuario.data_nascimento" mask="date" :rules="['date']" style="margin-top:18px;" >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="usuario.data_nascimento">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input v-model="usuario.email" style="margin-top:2px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="E-mail">
              <template v-slot:append>
                <q-icon name="mail_outline" />
              </template>
            </q-input>

          <q-select style="margin-top:18px;" borderless v-model="usuario.tipo_sanguineo" :options="opSanguineo" label="Tipo Sanguíneo" />

          <q-select style="margin-top:18px;" filled v-model="usuario.estado" :options="opEstado" label="Estado" />

          <q-input v-model="usuario.rua" style="margin-top:18px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="Rua" />

          <q-input v-model="usuario.bairro" style="margin-top:18px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="Bairro" />

          <q-input v-model="usuario.cidade" style="margin-top:18px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="Informe a Cidade" />

          <q-input v-model="usuario.telefone" style="margin-top:18px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="Telefone" />

          <q-input v-model="usuario.senha" style="margin-top:18px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="Senha" />

          <q-input v-model="usuario.confSenha" style="margin-top:18px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="Confirme sua senha" />

        <div id="buttoncustom" class="row q-pa-lg justify-center">
          <q-btn  color="#FFF" label="ATUALIZAR" style="background: #228176; margin-top: 18px;" v-if="this.estaLogado" @click="atualizar" />
          <q-btn  color="#FFF" label="SALVAR" style="background: #228176; margin-top: 18px;" v-else @click="cadastrar" />
          <q-btn  color="#FFF" label="CANCELAR" style="color: #228176; margin-top: 18px;" outline  to="/"/>
        </div>

        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { Cookies } from 'quasar'
export default {
  name: 'NovoPerfil',
  data () {
    return {
      estaLogado: Cookies.get('login-pdapp'),
      usuario: {
        cd_usuario: null,
        nome: null,
        email: null,
        rua: null,
        bairro: null,
        cidade: null,
        telefone: null,
        senha: '',
        confSenha: '',
        tipo_sanguineo: null,
        estado: null,
        data_nascimento: null,
        complemento: '...',
        cep: 111
      },
      opSanguineo: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      opEstado: ['Acre AC', 'Alagoas AL', 'Amapá AP', 'Amazonas AM', 'Bahia BA', 'Ceará CE', 'Espírito Santo ES', 'Goiás GO', 'Maranhão MA', 'Mato Grosso MT', 'Mato Grosso do Sul MS', 'Minas Gerais MG', 'Pará PA', 'Paraíba PB', 'Paraná PR', 'Pernambuco PE', 'Piauí PI', 'Rio de Janeiro RJ', 'Rio Grande do Norte RN', 'Rio Grande do Sul RS', 'Rondônia RO', 'Roraima RR', 'Santa Catarina SC', 'São Paulo SP', 'Sergipe SE', 'Tocantins TO', 'Distrito Federal DF'],
      dense: false
    }
  },
  methods: {
    cadastrar () {
      // Confirmar as senhas
      if (this.usuario.senha !== this.usuario.confSenha) {
        // Exibir alerta que as senhas não estão iguais
      } else {
        // Senha estão iguais
        this.$axios.post('http://localhost:3000/usuario', this.usuario).then(resposta => {
          if (resposta.status === 201) {
            this.$router.push('/')
          }
        }).catch(erro => {
          // Exibir alerta caso o status for diferente de 201
        })
      }
    },
    atualizar () {
      if (this.usuario.senha !== this.usuario.confSenha) {
        // Exibir alerta que as senhas não estão iguais
        console.log('Senhas diferentes')
      } else {
        console.log(this.usuario.senha)
        this.$axios.put('http://localhost:3000/usuario/', this.usuario).then(resposta => {
          if (resposta.status === 200) {
            this.$router.push({ path: '/home' })
          }
        }).catch(erro => {
          // em caso de erro
        })
      }
    },
    buscarPerfil () {
      this.$axios.get('http://localhost:3000/usuario/' + this.estaLogado).then(resposta => {
        if (resposta.status === 202) {
          this.usuario = resposta.data.usuario
        }
      }).catch(erro => {
        // em caso de erro
      })
    }
  },
  beforeMount () {
    if (this.estaLogado) {
      this.buscarPerfil()
    }
  }
}
</script>

<style>
  #buttoncustom .q-btn {
    width: 269px;
    height: 52px;
  }
</style>
