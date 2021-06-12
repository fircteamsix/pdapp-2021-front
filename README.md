# PDApp (pdapp)

Campanhas beneficentes de doação de sangue

## Instalação do node

Usando o Instalador do Node.

```bash
Acesse o link para baixar o instalador (De preferença as LTS)

https://nodejs.org/en/

```

Usando o NVM

```bash
nvm list available

nvm install 12.22.1 // Informe a versão que deseja. (De preferença as LTS)

nvm use 12.22.1 // Comando para usar a versão que foi instalada.
```

## Instação principal
 - Deve ter instalado o QUASAR CLI e YARN.
```bash
npm install -g yarn
yarn global add @quasar/cli
```

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```


### Gitflow
```
git flow feature start <nome>
git add .
git commit -m "titulo do commit"
git flow feature finish <nome>
git push

OBS: Esse comando só se der erro, muita atenção ao usar esse comando.
git push -f origin
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v1.quasar.dev/quasar-cli/quasar-conf-js).
