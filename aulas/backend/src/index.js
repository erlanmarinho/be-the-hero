
/**
 * Metodos HTTP
 * 
 * GET: ( BUSCA / LISTAR ) Buscar uma informação do back-end
 * POST: ( CRIAR ) Criar uma informação no back-end
 * PUT: ( EDITAR ) Alterar uma informação no back-end
 * DELETE: ( DELETAR ) Deletar uma informação no back-end
 * 
 */

 /**
  * Tipos de parâmentros
  * 
  * Query Params: Parâmentros nomeados enviados na rota após "?" usados em (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos (Busca por ID)
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos (ex: Criar usuario ou Editar)
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB
   */

const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors({
    //Ex..
    //origin: 'meuapp.com'
}));
app.use(express.json());
// Abaixo do json
app.use(routes);


app.listen(3333);