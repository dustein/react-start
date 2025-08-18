import { createServer, Factory, Model } from 'miragejs';

// para criar dados fictícios automaticamente, podemos usar uma lib chamada faker.
import faker from 'faker';

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },
    
    // vampos gerar dados fictícios para a base de dados fictícia
    factories: {
      user: Factory.extend({
        name(i : number) {  
          return 'User ${i+1}'
        },
        email() {
          return faker
        },
        createdAt() {},
      })
    },
    seeds(server) {

    },

    routes() {

      this.namespace = 'api';

      // configura um delay para resposta da api, para testarmos as animações de carregamento, loadings, etc
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      // hack para não 'prender' o API que o NextJS usa para fazer rotas também, dentro de pages, zeramos o namespace do Mirage.
      this.namespace = '';
      // as chamadas vai passar aqui pelo Mirage, e depois vão passar e continuar para caso haja alguma chamada de api da pasta do NextJS elas executarem normalmente.
      this.passthrough();
    }
  })

  return server;
}