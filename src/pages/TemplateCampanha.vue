<template>
    <q-page class="container">
      <section id="headerCampanha">
        <div class="row q-pa-lg justify-center">
          <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
            <div class="contentTop">
              <q-icon @click="$router.push('/home')" name="o_close" size="2em" left />
              <q-icon class="iconDireita" @click="$router.push('/home')" name="o_share" size="2em"/>
              <div class="fotoicon column items-center" >
                <q-avatar size="122px" style="background: #C65C44;">
                  <q-file
                    v-model="file"
                    accept=".jpg, .png"
                    class="inputimagecustom"
                    borderless
                    @input="uploadImage($event)"
                  >
                    <q-icon color="white" class="" name="o_add_a_photo" size="sm" />
                  </q-file>
                  <img :src="foto">
                </q-avatar>
                <p class="nomeUsuario">{{ titulo_paciente }}</p>
                <p class="tpSanguineo">{{ tipo_sanguineo }}</p>
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
                <!-- Buscar o titulo no cadastro via api -->
                <q-item-section class="titulomenu">{{ item.titulo }}</q-item-section>
              </q-item>
            </q-list>
            <div id="buttoncustom" class="row q-pa-lg justify-center">
              <q-btn  color="#FFF" label="EDITAR" style="background: #228176; margin-top: 120px;" />
              <q-btn  color="#FFF" label="CANCELAR" style="color: #228176; margin-top: 18px;" outline  to="/home"/>
            </div>
          </div>
         </div>
      </section>
    </q-page>
</template>

<script>
export default {
  name: 'TemplateCampanha',
  data () {
    return {
      foto: 'https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image.png',
      titulo_paciente: '...',
      tipo_sanguineo: '...',
      file: null,
      menu: [{
        titulo: 'Data de Início da Campanha'
      },
      {
        titulo: 'Data de Término da Campanha'
      },
      {
        titulo: 'Local para Doação'
      }]
    }
  },
  methods: {
    uploadImage (evt) {
      const data = new FormData()
      data.append('name', 'my-picture')
      data.append('file', event.target.files[0])
      console.log(data.get('file').stream().toString)
      this.foto = this.readImage(data.get('file'))
      const config = {
        header: {
          'Content-Type': 'image/jpeg'
        }
      }
      this.$axios.post('http://localhost:3000/campanhas/upload/' + this.$route.params.id_campanha, data, config).then(resposta => {
        console.log('Aqui atualiza a pagina de perfil com a foto que foi postada')
        // console.log(Cookies.get('login-pdapp'))
      })
    },
    readImage (file) {
      // Check if the file is an image.
      if (file.type && !file.type.startsWith('image/')) {
        console.log('File is not an image.', file.type, file)
        return
      }
      const reader = new FileReader()
      reader.addEventListener('load', (event) => {
        this.foto = event.target.result
      })
      reader.readAsDataURL(file)
    },
    buscarCampanha () {
      this.$axios.get('http://localhost:3000/campanhas/' + this.$route.params.id_campanha).then(resposta => {
        if (resposta.status === 202) {
          this.foto = 'http://localhost:3000/img/' + resposta.data.campanha.foto
          this.menu = [{ titulo: 'Data inicial: ' + resposta.data.campanha.data_inicio }, { titulo: 'Data termino: ' + resposta.data.campanha.data_termino }, { titulo: 'Local de doação: ' + resposta.data.campanha.local_doacao }]
          this.titulo_paciente = resposta.data.campanha.titulo_paciente
          this.tipo_sanguineo = resposta.data.campanha.tipo_sanguineo
        }
      }).catch(erro => {
        // em caso de erro
      })
    }
  },
  beforeMount () {
    this.buscarCampanha()
  }
}
</script>
<style>
  #headerCampanha {
    background:#228176;
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
  .iconDireita {
    float: right;
  }
</style>
