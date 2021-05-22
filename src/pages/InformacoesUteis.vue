<template>
  <q-page padding class="container">
    <section id="header">
      <div class="row q-pa-lg justify-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <q-icon @click="$router.push('/home')" name="o_arrow_back" style="color:#228176;" size="2em" left />
          <p style="color:#228176; font-weight: bold; font-size: 24px; text-align: center; width: 100%; ">Informações Úteis</p>

          <q-expansion-item style="color:#228176; font-size: 18px !important; font-family: 'Roboto'; font-weight: 500;" v-for="items in infoUteis" :key="items.id"
            :label="items.titulo"
          >
            <q-card>
              <q-card-section style="color: #228176; font-size: 14px !important; font-family: 'Roboto'; font-weight: 400;">
                {{ items.conteudo }}
                <a v-if="items.link" target="_blank" :href="items.link" > [Acesse]</a>
              </q-card-section>
            </q-card>
          </q-expansion-item>

        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'InformacoesUteis',
  data () {
    return {
      infoUteis: [
        {
          id: 1,
          titulo: 'O que é o PDApp?',
          conteudo: 'Aplicativo tem a responsabilidade em contribuir com a disseminação da doação de sangue através de campanhas independentes. Além disso, o usuário tem acesso á informações pertinentes sobre o ato de doação e a busca por vários hemocentros, núcleos e pontos de coletas espalhados por todo o país.'
        },
        {
          id: 2,
          titulo: 'Como funciona o PDApp?',
          conteudo: 'No aplicativo, o usuario poderá criar campanhas de doação de sangue, para si próprio ou para outra pessoa. Permitindo compartilhar a campanha em todas as redes socias e mídias digitais.'
        },
        {
          id: 3,
          titulo: 'Etapas da doação de sangue',
          conteudo: 'Etapa padrão da doação de Sangue (Cartilha do Hemocentro de Ribeirão Preto - SP)',
          link: 'http://www.hemocentro.fmrp.usp.br/canal-do-doador/etapas-da-doacao/'
        },
        {
          id: 4,
          titulo: 'Doação Voluntária de sangue',
          conteudo: 'Manual de Orientações para Promoção de Doação Voluntária de Sangue (Ministério da Saúde)',
          link: 'https://bvsms.saude.gov.br/bvs/publicacoes/manual_orientacoes_promocao_doacao_voluntaria_sangue.pdf'
        }
      ]
    }
  }
}
</script>
