Iniciar um projeto NextJS
**yarn create next-app 03_news**
Adicionar Typescript
**yarn add typescript @types/node -D**
Nos projetos Next, os arquivos CSS usamos o "home.module.css" como tipo de arquivo, pois ele aceita css scoped. Tem extensão css modules. Não vamos utilizar styled-components porque é muito recurso para aplicações pequenas como essa.
Mas, mesmo assim, não vamos usar CSS puro, vamos usar com o *yarn add sass*.
Então, trocamos o home.module.css para home.module.scss. Estes arquivos, com o module, se prestam a ser usados em cada local em que forem importados.
Mas vamos criar um arquivo de CSS global, no caso, não usando o module. "global.scss".

Icones
**yarn add react-icons**




