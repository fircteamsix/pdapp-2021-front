<template>
  <q-page padding class="container">
    <section id="header">
      <div class="row q-pa-lg justify-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <q-icon @click="$router.push('/home')" name="o_arrow_back" style="color:#228176;" size="2em" left />
          <p style="color:#228176; font-weight: bold; font-size: 24px; text-align: center; width: 100%; ">Sobre</p>
            <div style="color:#228176; margin-left: 18px;">
              <p><b>Versão do Aplicativo</b><br>
              1.0.0.0</p>
              <p><b>Desenvolvido pela TeamSix</b><br>
              Augusto Figueira<br>
              Gedson Monteiro<br>
              Sara Benevides<br>
              Aldomiro José</p>
              <p>Jademir Barbosa - Consultoria</p>
              <p><b>Contato</b><br>
              teamsix_ficr@googlegroups.com</p>
            </div>
          </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'TermoUso',
  data () {
    return {
    }
  }
}
</script>
