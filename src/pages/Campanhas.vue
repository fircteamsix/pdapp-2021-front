<template>
  <q-page padding class="container">
    <section id="header">
      <div class="row q-pa-lg justify-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <q-icon @click="$router.push('/home')" name="o_arrow_back" style="color:#228176;" size="2em" left />
          <p style="color:#228176; font-weight: bold; font-size: 24px; text-align: center; width: 100%; ">Campanhas</p>

          <q-list style="margin-top:70px">
            <q-item @click="$router.push('/templatecampanha')" clickable v-ripple v-for="item in campanhas.titulo" :key="item">
              <q-item-section avatar>
                <q-icon size="3em" style="color:#228176;" name="o_favorite_border" />
              </q-item-section>
              <!-- Buscar o titulo no cadastro via api -->
              <q-item-section class="titulocampanha">{{ campanhas.titulo[0] }}</q-item-section>
            </q-item>
          </q-list>

        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'Campanhas',
  data () {
    return {
      campanhas: {
        titulo: ['Titulo da campanha aqui']
      }
    }
  }
}
</script>
<style>
.titulocampanha {
    font-size: 18px !important;
    font-family: 'Roboto';
    font-weight: 500;
    color: #228176;
  }
</style>
