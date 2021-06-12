<template>
  <q-page padding class="container">
    <section id="header">
      <div class="row q-pa-lg justify-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <q-icon @click="$router.push('/home')" name="o_arrow_back" style="color:#228176;" size="2em" left />
          <p style="color:#228176; font-weight: bold; font-size: 24px; text-align: center; width: 100%; ">Nova Senha</p>
          <div class="alinhamento">
            <p style="line color:#333333; font-size: 14px !important; font-family: 'Roboto'; font-weight: 300;">Informe o e-mail cadastrado no aplicativo para receber um link para criação de uma nova senha.</p>
            <q-input v-model="email" style="margin-top:18px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="E-mail">
              <template v-slot:append>
                <q-icon name="mail_outline" />
              </template>
            </q-input>
          </div>
          <div id="buttoncustomSenha" class="row q-pa-lg justify-center">
            <q-btn  color="#FFF" label="ENVIAR" style="background: #E9795D;" @click="renovarSenha" />
          </div>
          <q-dialog v-model="alert">
            <q-card>
              <q-card-section>
              <div class="text-h6">Nova Senha</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Sua solicitação foi enviada com sucesso.
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'AjudaFeedback',
  data () {
    return {
      alert: false,
      email: null
    }
  },
  methods: {
    renovarSenha () {
      if (this.email) {
        this.alert = !this.alert
      }
    }
  }
}
</script>
<style>
  .alinhamento {
    padding: 0 25px;
  }
  #buttoncustomSenha {
    margin-top: 420px
  }
  #buttoncustomSenha .q-btn {
    width: 269px;
    height: 52px;
  }
</style>
