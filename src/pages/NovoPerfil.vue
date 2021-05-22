<template>
  <q-page padding class="container">
    <section id="header">
      <div class="row q-pa-lg justify-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <p style="color:#228176; font-weight: bold; font-size: 24px; text-align: center; width: 100%; margin-top:36px;">Perfil</p>
          <q-input style="margin-top:36px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="Nome" />
          <q-input filled v-model="date" mask="date" :rules="['date']" style="margin-top:18px;" >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="date">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input style="margin-top:2px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="E-mail">
              <template v-slot:append>
                <q-icon name="mail_outline" />
              </template>
            </q-input>

          <q-select style="margin-top:18px;" borderless v-model="tpSanguineo" :options="opSanguineo" label="Tipo Sanguíneo" />

          <q-select style="margin-top:18px;" filled v-model="tpEstado" :options="opEstado" label="Estado" />

          <q-input style="margin-top:18px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="Endereço com o Bairro" />

          <q-input style="margin-top:18px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="Informe a Cidade" />

          <q-input style="margin-top:18px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="Telefone" />

          <q-input style="margin-top:18px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="Senha" />

          <q-input style="margin-top:18px;" input-style="width: 264px; height: 42px;" color="teal"  outlined label="Confirme sua senha" />

        <div id="buttoncustom" class="row q-pa-lg justify-center">
          <q-btn  color="#FFF" label="SALVAR" style="background: #228176; margin-top: 18px;" />
          <q-btn  color="#FFF" label="CANCELAR" style="color: #228176; margin-top: 18px;" outline  to="/"/>
        </div>

        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'NovoPerfil',
  data () {
    return {
      date: null,
      tpSanguineo: null,
      opSanguineo: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      tpEstado: null,
      opEstado: ['Acre AC', 'Alagoas AL', 'Amapá AP', 'Amazonas AM', 'Bahia BA', 'Ceará CE', 'Espírito Santo ES', 'Goiás GO', 'Maranhão MA', 'Mato Grosso MT', 'Mato Grosso do Sul MS', 'Minas Gerais MG', 'Pará PA', 'Paraíba PB', 'Paraná PR', 'Pernambuco PE', 'Piauí PI', 'Rio de Janeiro RJ', 'Rio Grande do Norte RN', 'Rio Grande do Sul RS', 'Rondônia RO', 'Roraima RR', 'Santa Catarina SC', 'São Paulo SP', 'Sergipe SE', 'Tocantins TO', 'Distrito Federal DF'],
      dense: false
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
