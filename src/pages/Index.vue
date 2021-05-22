<template>
  <div class="q-pa-sm">
    <div class="q-gutter-y-sm column">
      <div class="column items-center" style="padding: 50px 0 0;">
        <q-avatar square size="100px">
          <img src="../assets/pdapp-new-logo.png">
        </q-avatar>
      </div>
        <q-input style="padding: 8em 0 0;" color="teal" outlined v-model="usuario.email" label="Email">
          <template v-slot:append>
            <q-icon name="mail_outline" />
          </template>
        </q-input>

        <q-input style="padding: 0 0 2em;" color="teal" outlined v-model="usuario.senha"  label="Senha"
        :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
          </template>
        </q-input>

      <div class="column items-center">
        <btn-custom style="background:#E9795D; font-weight: bold;"  color='#FFF' texto='ENTRAR' to="/home" />
        <btn-custom style="color:#E9795D; font-weight: bold; margin-top: 18px;" :outline="true"  color='#FFF' texto='CADASTRE-SE'  to="/cadastro"/>
      </div>

        <div class="column items-center" style="height: 150px; padding: 2em 0 0;">
            <q-btn flat  color="primary" label="Esqueceu sua senha?" style="width: 188px;" />
            <q-btn flat  color="primary" label="Termo de uso" style="width: 188px;" />
        </div>
    </div>
  </div>
</template>

<script>
import BtnCustom from 'components/Btn'
export default {
  name: 'PageIndex',
  components: { BtnCustom },
  data () {
    return {
      url: 'https://trello-attachments.s3.amazonaws.com/6046abed8fbab47b264e8da3/605d181436c4883a442be285/48962f9895bc15c4ac16765caf9dacf9/pdapp-new-logo_-_vs2.png',
      usuario: {
        email: null,
        senha: null
      },
      isPwd: true
    }
  },
  methods: {
    statusMenu () {
      this.$emit('statusMenu')
    }
  },
  beforeMount () {
    this.statusMenu()
  }
}
</script>
