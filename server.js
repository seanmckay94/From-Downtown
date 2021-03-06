const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const db = require('./server/config/connection');
const { typeDefs, resolvers } = require('./server/schemas');

const app = express();
const PORT = process.env.PORT || 3000;
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`);
        console.log(`Use GraphQL at https://localhost:${PORT}${server.graphqlPath}`);
    });
});