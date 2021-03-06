import {GraphQLServer} from "graphql-yoga";
import dotenv from 'dotenv';
import logger from "morgan";
import schema from "./schema";

dotenv.config();

const PORT = process.env.PORT || 5000;




const server = new GraphQLServer({schema});
server.express.use(logger("dev"));

server.start({port:PORT}, () => 
    console.log(`Server running on http://localhost:${PORT}`)
);
