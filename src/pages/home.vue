<template>
  <q-page class="container">
    <div id="headercustom">
      <q-header class="text-primary">
        <q-toolbar style="background:#FFF; color:#228176;" >
          <q-btn dense flat round icon="menu" @click="menuLeft = !menuLeft" />
        </q-toolbar>
    </q-header>
    </div>
    <q-drawer style="color:#FFF;" v-model="menuLeft" side="left" overlay elevated>
      <q-scroll-area class="fit" style="background-color:#228176;">
        <q-list>
          <q-item clickable v-ripple>
            <q-item-section class="menuTitulo">
              PD App
            </q-item-section>
            <q-icon @click="menuLeft = !menuLeft" right size="2em" name="arrow_back" />
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label class="menulabel">Conta</q-item-label>
            </q-item-section>
          </q-item>
          <template>
            <q-item @click="$router.push({ path: '/perfil', query: { id: $route.query.id } })" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="o_account_circle" />
              </q-item-section>
              <q-item-section style="margin-left: -20px;">
                Perfil
              </q-item-section>
            </q-item>
            <q-item to="/campanhas" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="o_favorite_border" />
              </q-item-section>
              <q-item-section style="margin-left: -20px;">
                Ver Campanhas
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="o_bloodtype" />
              </q-item-section>
              <q-item-section style="margin-left: -20px;">
                Doações Realizadas
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="o_emoji_events" />
              </q-item-section>
              <q-item-section style="margin-left: -20px;">
                Recompensas
              </q-item-section>
            </q-item>
          </template>
          <q-separator dark />
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label class="menulabel">Hemocentros</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/postosunidades" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="o_local_hospital" />
            </q-item-section>
            <q-item-section style="margin-left: -20px;">
              <q-item-label>Unidades de coleta</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator dark />
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label class="menulabel">Conteúdo legal e políticas</q-item-label>
            </q-item-section>
          </q-item>
          <template>
            <q-item to="/termodeuso" clickable v-ripple>
              <q-item-section style="margin-left: 37px;">
                Termo de Uso
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section style="margin-left: 37px;">
                Informações Úteis
              </q-item-section>
            </q-item>
            <q-item to="/politicadeuso" clickable v-ripple>
              <q-item-section style="margin-left: 37px;">
                Política de Uso
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section style="margin-left: 37px;">
                Sobre
              </q-item-section>
            </q-item>
          </template>
          <q-separator dark />
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="o_logout" />
            </q-item-section>
            <q-item-section style="margin-left: -20px;">
              <q-item-label>Sair</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <section id="home">
      <div class="row q-pa-lg ">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
          <div id="cardCustom">
            <div class="row" id="card-center">
              <q-card class="my-card text-center" @click="$router.push('/criarcampanha')">
                <q-card-section>
                  <q-avatar size="68px" font-size="50px" color="teal" text-color="white" icon="o_volunteer_activism" />
                  <p style="margin: 2px 0 0 0; color:#228176; font-weight: 500;">Criar<br>Campanha</p>
                </q-card-section>
              </q-card>
              <q-card @click="$router.push('/campanhas')" class="my-card text-center">
                <q-card-section>
                  <q-avatar size="68px" font-size="50px" color="teal" text-color="white" icon="o_favorite_border" />
                  <p style="margin: 2px 0 0 0; color:#228176; font-weight: 500;">Ver<br>Campanhas</p>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div id="cardCustom">
            <div class="row" id="card-center">
              <q-card @click="$router.push('/postosunidades')" class="my-card text-center">
                <q-card-section>
                  <q-avatar size="68px" font-size="50px" color="teal" text-color="white" icon="o_local_hospital" />
                  <p style="margin: 2px 0 0 0; color:#228176; font-weight: 500;">Unidade de<br>Coleta</p>
                </q-card-section>
              </q-card>
              <q-card @click="$router.push('/informacoesuteis')" class="my-card text-center">
                <q-card-section>
                  <q-avatar size="68px" font-size="50px" color="teal" text-color="white" icon="o_info" />
                  <p style="margin: 2px 0 0 0; color:#228176; font-weight: 500;">Informações<br>Úteis</p>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div id="cardCustom">
            <div class="row" id="card-center">
              <q-card class="my-card text-center">
                <q-card-section>
                  <q-avatar @click="$router.push('/ajudafeedback')" size="68px" font-size="50px" color="teal" text-color="white" icon="o_help_outline" />
                  <p style="margin: 2px 0 0 0; color:#228176; font-weight: 500;">Ajuda e<br>Feedback</p>
                </q-card-section>
              </q-card>
              <q-card class="my-card text-center">
                <q-card-section>
                  <q-avatar @click="$router.push('/termodeuso')" size="68px" font-size="50px" color="teal" text-color="white" icon="o_description" />
                  <p style="margin: 2px 0 0 0; color:#228176; font-weight: 500;">Termo de<br>Uso</p>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { Cookies } from 'quasar'
export default {
  name: 'Home',
  data () {
    return {
      menuLeft: false,
      drawer: false
    }
  },
  methods: {
    verLogin () {
      const cookieLogin = Cookies.get('login-pdapp')
      if (!cookieLogin) {
        this.$router.push({ path: '/' })
      }
    }
  },
  beforeMount () {
    this.verLogin()
  }
}
</script>
<style>
  #cardCustom .my-card{
    max-width: 107px !important;
    max-height: 144px;
    width: 107px;
    height: 144px;
    background: #DCDCDC;
  }
  #cardCustom .q-card{
    border-radius: 13px;
  }
  .my-card q-card-section{
    background: #DCDCDC;
  }
  .my-card{
    margin: 28px;
  }
  .menulabel {
    font-size: 18px !important;
    font-family: 'Roboto';
    font-weight: 500;
  }
  .menuTitulo {
    font-size: 24px !important;
    font-family: 'Roboto';
    font-weight: 700;
  }
  #headercustom header{
    background: #FFF !important;
  }
</style>
