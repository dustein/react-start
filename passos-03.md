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

Stripe.
Developers - API Keys - Secret Key: copia chave secreta. Na raiz do projeto, cria ".env.local" para armazenar a STRIPE_API_KEY. Vide documentação do Next quanto aos tipos de arquivos de variáveis de sistema por ambiente.

Neste momento veremos pela primeira vez o SSR - Server Side Rendering, para que a renderização seja feita dessa vez não no cliente (dferente do SSG - Static Site Generation / Client Side Rendering), de forma que o conteúdo carregado pela API externa seja renderizado na página juntamente com o conteúdo. As chamadas HTTP para a API serão feitas não no browser cliente, mas no servidor Node do Next.
Veja que o SSR tem o impacto de atrasar a exibição da página para o usuário, pois só será renderizada após a reposta da API, que pode ter uma latência não sabida pois é externa.
Lembrar também que o SSR só funciona em páginas, e não em componentes diretamente. Assim precisamos repassar a informação vinda da API na página para o componente, a partir da página.
Então começamos a escrever agora na página Home (index.tsx).

**yarn add dotenv**

Instalar o Stripe **yarn add stripe**. No /src criamos a pasta /services com o stripe.ts, que é como iremos codificar a comunicação com a API usando o SDK da Stripe.












