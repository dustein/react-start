Projeto utilizando Create React App
**npx create-react-app my-app --template typescript**
Limpeza dos arquivos, organização de diretorios, etc.
Usaremos o styled-components
**npm i styled-components**
Para criar estilos globais do styled components dentro se /src criamos /styles e global.ts
Em global, uma boa prática CSS é configurar o tamanho da fonte para tamanhos de tea, que influencia no REM do css:
``
  html {
    @media (max-width: 1080px) {
      font-size: 93.5%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
``  
Passamos a criar os Components da aplicação, dentro da pasta /src/components.

Nesta altura, como não temos um backend ainda, para conectar a uma API e obter dados, para fins de testes, em ambiente de desenvolvimento, utilizaremos uma "API fake". No caso a MirageJS.  
**npm install --save-dev miragejs**

Agora para não precisar fazer as requisições utilizando "fetch", iremos configurar um cliente HTTP. Usaremos o Axios. **npm install axios**

Para executar um modal, usaremos uma biblioteca **npm i react-modal**
A estilização do modal, verifique na documentação tem três opçoes de fazer. Iremos na que usamos a propriedade overlayClassName.

Para estilizar a borda do botao em styles do NewTransactionModal, usamos uma biblioteca **npm i polished**

050 - Vamos começar a ver Contexto. Criamos o TrasactionContext.tsx. E usaremos o hook useContext.









