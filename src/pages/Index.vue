<template>
  <q-page padding class="container">
    <section id="header">
      <div class="row q-pa-lg justify-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <div id="spinn" v-if="spinn" >
              <q-spinner-hourglass
                style="color:#E9795D;"
                size="4em"
              />
          </div>
          <div class="column items-center" style="padding: 50px 0 0;">
            <q-avatar square size="100px">
              <img src="../assets/pdapp-new-logo.png">
            </q-avatar>
          </div>
            <q-input :disable="status" style="padding: 8em 0 0;" color="teal" outlined v-model="usuario.email" label="Email">
              <template v-slot:append>
                <q-icon name="mail_outline" />
              </template>
            </q-input>

            <q-input :disable="status" style="padding: 0 0 2em;" color="teal" outlined v-model="usuario.senha"  label="Senha"
            :type="isPwd ? 'password' : 'text'">
              <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
              </template>
            </q-input>

          <div id="buttoncustom" class="column items-center">
            <q-btn :disable="status"  color="#FFF" label="ENTRAR" style="background:#E9795D; font-weight: bold;" @click="entrar" />
            <q-btn  color="#FFF" label="CADASTRE-SE" outline style="color:#E9795D; font-weight: bold; margin-top: 18px;" to="/cadastro" />
          </div>

            <div class="column items-center" style="height: 150px; padding: 2em 0 0;">
                <q-btn flat  color="primary" label="Esqueceu sua senha?" style="width: 188px;" />
                <q-btn flat  color="primary" label="Termo de uso" style="width: 188px;" />
            </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { Cookies } from 'quasar'
export default {
  name: 'Index',
  data () {
    return {
      url: 'https://trello-attachments.s3.amazonaws.com/6046abed8fbab47b264e8da3/605d181436c4883a442be285/48962f9895bc15c4ac16765caf9dacf9/pdapp-new-logo_-_vs2.png',
      usuario: {
        email: null,
        senha: null
      },
      isPwd: true,
      spinn: false,
      status: false
    }
  },
  methods: {
    async entrar () {
      this.spinn = true
      this.status = true
      await this.$axios.get('http://localhost:3000/usuario/' + this.usuario.email + '/' + this.usuario.senha).then(resposta => {
        if (resposta.status === 202) {
          const chave = resposta.data.usuario
          Cookies.set('login-pdapp', chave, { expires: '1h' })
          this.$router.push({ path: '/home' })
        }
      }).catch(erro => {
        this.spinn = false
        this.status = false
      })
    },
    statusMenu () {
      this.$emit('statusMenu')
    },
    verLogin () {
      const cookieLogin = Cookies.get('login-pdapp')
      if (cookieLogin) {
        this.$router.push({ path: '/home' })
      }
    }
  },
  beforeMount () {
    this.statusMenu()
    this.verLogin()
  }
}
</script>
<style>
  #buttoncustom .q-btn {
    width: 269px;
    height: 52px;
  }
  #spinn {
    position: absolute;
    top: 35%;
    left: 45%;
  }
</style>
