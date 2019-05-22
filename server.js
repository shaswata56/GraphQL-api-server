const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');
const app = new Koa();
const initDB = require('./database');
const port = process.env.PORT || 5000;

app.listen(port, '0.0.0.0' , () => {
    console.log('listening on '+ port)
});

app.on('error', err => {
    log.error('server error', err)
});

app.use(mount('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: false
})));

initDB();
