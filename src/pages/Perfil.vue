<template>
    <q-page class="container">
      <section id="headerPerfil">
        <div class="row q-pa-lg justify-center">
          <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
            <div class="contentTop">
              <q-icon @click="$router.push({ path: '/home' })" name="o_close" size="2em" left />
              <div class="fotoicon column items-center" >
                <q-avatar size="122px" style="background: #C65C44;">
                  <q-file
                    v-model="filesImages"
                    accept=".jpg, image/*"
                    class="inputimagecustom"
                    borderless
                  >
                    <q-icon color="white" class="" name="o_add_a_photo" size="sm" />
                  </q-file>
                  <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image.png">
                </q-avatar>
                <p class="nomeUsuario">{{usuario.nome}}</p>
                <p class="tpSanguineo">{{usuario.tipo_sanguineo}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="conteudo">
         <div class="row q-pa-lg justify-center">
          <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
            <q-list>
              <q-item clickable v-ripple v-for="item in menu" :key="item.titulo">
                <q-item-section avatar>
                  <q-icon size="2em" style="color:#228176;" :name="item.icon" />
                </q-item-section>
                <!-- Buscar o titulo no cadastro via api -->
                <q-item-section class="titulomenu">{{ item.titulo }}</q-item-section>
              </q-item>
            </q-list>
            <div id="buttoncustom" class="row q-pa-lg justify-center">
              <q-btn  color="#FFF" label="EDITAR" style="background: #228176; margin-top: 120px;" @click="$router.push({ path: '/cadastro', query: { id: $route.query.id } })"/>
              <q-btn  color="#FFF" label="CANCELAR" style="color: #228176; margin-top: 18px;" outline  to="/home"/>
            </div>
          </div>
         </div>
      </section>
    </q-page>
</template>

<script>
import { Cookies } from 'quasar'
export default {
  name: 'Perfil',
  data () {
    return {
      usuario: {
        nome: '...',
        tipo_sanguineo: '...'
      },
      filesImages: null,
      menu: [{
        titulo: 'Ver Campanhas',
        icon: 'o_favorite_border'
      },
      {
        titulo: 'Doações Realizadas',
        icon: 'o_bloodtype'
      },
      {
        titulo: 'Recompensas',
        icon: 'o_emoji_events'
      }]
    }
  },
  methods: {
    verLogin () {
      const cookieLogin = Cookies.get('login-pdapp')
      if (!cookieLogin) {
        this.$router.push({ path: '/' })
      }
    },
    buscarPerfil () {
      this.$axios.get('http://localhost:3000/usuario/' + Cookies.get('login-pdapp')).then(resposta => {
        if (resposta.status === 202) {
          this.usuario = resposta.data.usuario
        }
      }).catch(erro => {
        // em caso de erro
      })
    }
  },
  beforeMount () {
    this.verLogin()
    this.buscarPerfil()
  }
}
</script>
<style>
  #headerPerfil {
    background:#E9795D;
    color: #FFF;
  }
  .fotoicon {
    padding: 20px 0 0;
  }
  .fotoicon p {
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    width: 100%;
  }
  .iconcustom {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 10px;
  }
  .inputimagecustom {
    position: absolute;
    top: 0;
  }
  .nomeUsuario{
    padding: 8px 0 0;
  }
  .tpSanguineo {
    margin-top: -18px;
    margin-bottom: -10px;
  }
  #conteudo {
    padding: 20px 0 0;
  }
  .titulomenu {
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 18px;
    color: #228176;
  }
  #buttoncustom .q-btn {
    width: 269px;
    height: 52px;
  }
</style>
