const { GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');
const heroGraphQLType =  require('./heroType');
const Hero = require('../models/heroes');


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        hero: {
            type: heroGraphQLType,
            args: { id: { type: GraphQLString }},
            resolve(parent, args) {
                return Hero.findById(args.id)
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
