import {GraphQLServer} from "graphql-yoga";

const PORT = 3000;

const typeDefs = `
    type Query{
        hello: String!
    }  
`;

const resolvers = {
    Query : {
        hello: () =>"HI"
    }
};


const server = new GraphQLServer({ typeDefs, resolvers});

server.start({port:PORT}, () => 
    console.log(`Server running on http://localhost:${PORT}`)
);
