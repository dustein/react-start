# Passos e Comandos para Lembrar

## 01

A primeira coisa em um projeto Node ou React é inicializar o repositório, criando o arquivo packet.json : **npm init -y**
**npm install react**
**npm install react-dom** (para trabalhar a Web com DOM, permitir que o React se comunique com a ávores de elementos HTML. Se fosse para utilizar com o React Native, não instalaria o DOM mas o react-native)

Criamos pastas para organização:
/src para nossos códigos
/public para os arquivos públicos, como o index.html, favicon, robot.txt, qualquer arquivo ue será acessado diretamente pelo meio externo.

Dentro de /src então criamos nosso primeior arquivo, o index.html e inicializamos o HTML nele.

Instalamos então o Babel, para conversão do códigos para que seja entendido pelos browsers e outras ferramentas mais modernas, é um compilador javascript.

Usaremos: 
**npm install --save-dev @babel/core**
**npm install --save-dev @babel/cli**
**npm install --save-dev @babel/preset-env** (biblioteca detecta o que precisa converter para cada ambiente ambiente: browser, Node, etc)
**npm install --save-dev @babel/preset-react**

Agora dentro do /src criamos o babel.config.js. Dentro dele, exportar a configuração do Babel.
Criamos o aquivo index.js dentro de /src

**npx babel src/index.js --out-file dist/bundle.js** (vai exportar o index.js para o html entendido pelos browsers).

Então para indicar que estamos lidando com arquivos js típicos do React, mudamos a extensão do arquivo em /src de js para jsx. Tecnicamente nada muda, mas é uma convenção trazida pelo React para identificação de arquivos (não muda a extensão do out-file que deverá ser js para que o browser entenda.).

Contudo, para automatizar, acrescentamos o script no package.json:
>"scripts": {
>  "build": "babel src/index.js --out-file dist/bundle.js"
>}

Configuramos agora o webpack
**npm install --save-dev webpack**
**npm install --save-dev webpack-cli**
**npm install  --save-dev webpack-dev-server**
Com o dev-server, não precisaremos ficar rodando npx webpack a cada vez que modificamos o jsx para atualizar o index.html. A partir de agora, para rodar usaremos "npx webpack serve"

Também vamos instalar uma integração do webpack com o Babel:

**npm install --save-dev babel-loader**

Agora rodamos o webpack
**npx webpack**

Vamos agora desenvolver a aplicaçao React no index.html.
Toda a aplicação se desenvolve dentro da única <div> criada no body, que chamamos de "root". E importamos o script com a devida tag também:
**script src="../dist/bundle.js"**
Após criar essa div no index.html, passamos a trabalhar o React no index.jsx
Para não precisar colocar manualment eo script co o nome do arquivo bundle, usareoms um plugin do webpack:
**npm i --save-dev html-webpack-plugin**
E no webpack.config.js adicionar "const HtmlWebpackPlugin = require("html-webpack-plugin");"
"plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public', 'index.html')
  })]"

