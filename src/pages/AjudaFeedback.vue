<template>
  <q-page padding class="container">
    <section id="header">
      <div class="row q-pa-lg justify-center">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <q-icon @click="$router.push('/home')" name="o_arrow_back" style="color:#228176;" size="2em" left />
          <p style="color:#228176; font-weight: bold; font-size: 24px; text-align: center; width: 100%; ">Ajuda e Feedback</p>

          <q-expansion-item style="color:#228176; font-size: 18px !important; font-family: 'Roboto'; font-weight: 500;" v-for="items in infoUteis" :key="items.id"
            :label="items.titulo"
          >
            <q-card>
              <q-card-section style="color: #228176; font-size: 14px !important; font-family: 'Roboto'; font-weight: 400;">
                {{ items.conteudo }}
                <a v-if="items.link" target="_blank" :href="items.link" > [Acesse]</a>
                <q-input
                  v-if="items.txtarea"
                  v-model="txtFeedback"
                  filled
                  type="textarea"
                  counter
                  maxlength="200"
                />
                <div v-if="items.txtarea" id="buttoncustom" class="row q-pa-lg justify-center">
                  <q-btn  color="#FFF" label="ENVIAR" style="background: #E9795D;" />
                </div>
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
  name: 'AjudaFeedback',
  data () {
    return {
      txtFeedback: null,
      infoUteis: [
        {
          id: 1,
          titulo: 'Mudar ou redefinir senha',
          conteudo: 'Na tela de login, clique na opção de Recuperar Senha. Você será redirecionado para uma página que solicitará o e-mail cadastrado no aplicativo para receber um link de criação de uma nova senha.'
        },
        {
          id: 2,
          titulo: 'Excluir conta',
          conteudo: 'Acesse o menu na página principal e vá na opção Perfil. Na página Perfil, logo abaixo, estará disponível o botão Excluir. Responda a pergunta e confirme a exclusão.'
        },
        {
          id: 3,
          titulo: 'Compartilhar uma campanha',
          conteudo: 'Clique no botão de compartilhamento na parte superior da página da campanha. Acima da foto, ao lado direito.'
        },
        {
          id: 4,
          titulo: 'Remover uma campanha no PDApp',
          conteudo: 'Na página da campanha, logo abaixo, estará disponível o botão Excluir. Responda a pergunta e confirme a exclusão.'
        },
        {
          id: 5,
          titulo: 'Como registrar doação',
          conteudo: 'Acesse o menu na página principal e vá na opção Doações Realizadas. Ao adentrar a página, anexa o comprovante de doação, preencha as informações necessárias e clique em enviar.'
        },
        {
          id: 6,
          titulo: 'Como funciona as recompensas',
          conteudo: 'O usuário irá registrar suas doações e conforme a quantidades de doações feitas, receberá um prêmio simbolico por e-mail. O prêmio será um item de customização para sua rede social.'
        },
        {
          id: 7,
          titulo: 'Enviar feedback',
          conteudo: 'Quer enviar um feedback? Você pode utilizar o campo abaixo e deixar sua mensagem.',
          txtarea: true
        }
      ]
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
