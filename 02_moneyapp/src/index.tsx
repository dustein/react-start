import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

// API FAKE para testes no desenvolvimento
import { createServer, Model } from "miragejs";

createServer({

  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = "api"

    this.get("/transactions", () => {
      return this.schema.all('transactions');
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  },
})
// import { createServer } from "miragejs";

// createServer({
//   routes() {
//     this.namespace = 'api';

//     this.get('/transactions', () => {
//       return [
//         {
//           id: 1,
//           title: 'Transaction 1',
//           amount: 400,
//           type: 'deposit',
//           category: 'Food',
//           createdAt: new Date()
//         }
//       ]
//     })
//   }
// })
// Fim API fake

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
