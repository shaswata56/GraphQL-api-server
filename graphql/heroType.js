const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const HeroType = new GraphQLObjectType({
    name: 'Hero',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString }
    })
});

module.exports = HeroType;
