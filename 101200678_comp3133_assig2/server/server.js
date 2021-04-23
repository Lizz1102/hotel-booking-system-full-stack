const express = require('express');
const app = express();

const mongodb = require('./libs/db-connection');

const TypeDefs = require('./schema/schema');
const Resolvers = require('./resolvers/resolver');

const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const server = new ApolloServer({
      typeDefs: TypeDefs.typeDefs,
      resolvers: Resolvers.resolvers,
});


app.use(bodyParser.json());
app.use('*', cors());
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000
app.listen(PORT, () =>
  console.log(`Server is up at http://localhost:${PORT}${server.graphqlPath}`));