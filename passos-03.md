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

# !!! VIDE IMAGEM : diagrama-NEWS.png  !!!

Neste momento veremos pela primeira vez o SSR - Server Side Rendering, para que a renderização seja feita dessa vez não no cliente (diferente do SPA - Single Page Application), de forma que o conteúdo carregado pela API externa seja renderizado na página juntamente com o conteúdo. As chamadas HTTP para a API serão feitas não no browser cliente, mas no servidor Node do Next.
Veja que o SSR tem o impacto de atrasar a exibição da página para o usuário, pois só será renderizada após a reposta da API, que pode ter uma latência não sabida pois é externa.
Lembrar também que o SSR só funciona em páginas, e não em componentes diretamente. Assim precisamos repassar a informação vinda da API na página para o componente, a partir da página.
Então começamos a escrever agora na página Home (index.tsx).

**yarn add dotenv**

Instalar o Stripe **yarn add stripe**. No /src criamos a pasta /services com o stripe.ts, que é como iremos codificar a comunicação com a API usando o SDK da Stripe.

Agora sim vamos ver o Static Site Generator do NextJS. SSG é gerado um site estático com toda a renderização pelo servidor, o servidor "vai ver que já salvou a requisição daquela determinada página", e ao invés de fazer nova renderização, fazer nova chamada a API etc, simplesmente entrega o site estático já gerado anteriormente, como se fosse um cache.
Para aplicar o SSG o que temo sque fazer é simplesmente mudar de "getServerSideProps" para "getStaticProps".

Lenbrar que só devemos usar SSG em páginas que são comuns a todos os clientes que acessarem a aplicação, ou seja, não pode ser personalizada, por exemplo com o nome do usuário etc, senão este nome ficará gravado na página estática.
E também lembrar que nada impede que faácmos chamadas http na aplicação normalmente, como faríamos em um amiente que não fosse de NextJS. (Client side, SSR, SSG) 

SSG - siste estático, performático, bom para indexação pelos mecanismos de busca
SSR - também é indexãvel, mas sua renderização demanda mais recursos, pois traz informação em tempo real.
Client side - quando não precisa de indexação, informação que não tenha necessidade de já estar lá quando a página é carregada.

Por ex, um Blog. O conteúdo do post é o mesmo para todos (SSG) e abaixo tem uam seção de comentários (esses não precisam aparece logo no carregamento da página, pode ser só depois da página ter carregado, pois aí exige menos processamento e o tempo que a pessoa vai estar vendo o conetúdo do post ela nem vai perceber que os comentários ainda não foram carregados)











