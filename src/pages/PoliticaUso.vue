<template>
  <q-page padding class="container">
    <section id="header">
      <div class="row q-pa-lg justify-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <q-icon @click="$router.push('/home')" name="o_arrow_back" style="color:#228176;" size="2em" left />
          <p style="color:#228176; font-weight: bold; font-size: 24px; text-align: center; width: 100%; ">Política de Uso</p>
          <!-- Texto sera consumido da API -->
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'PoliticaUso'
}
</script>
