# GraphQL-api-server
API server is running on @ http://graphql-api-service.herokuapp.com/graphql

It's my first GraphQL api using MongoDB.

You will get a demo hero name by this POST request on the api server!!

```bash
curl -X POST -H "Content-Type: application/json" --data '{ "query": "{ hero(id: \"5ce4968e1c9d440000992840\") { name } }" }'  https://graphql-api-service.herokuapp.com/graphql
```
