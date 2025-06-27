import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

// API FAKE para testes no desenvolvimento
import { createServer } from "miragejs"

createServer({
  routes() {
    this.namespace = "api"

    this.get("/transactions", () => {
      return {
        id: 1,
        title: 'Transaction 1',
        amount: 400,
        type: 'deposit',
        category: 'Food',
        createdAt: new Date()
      }
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
