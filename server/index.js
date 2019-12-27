const path = require('path');
const {GraphQLServer} = require('graphql-yoga');
const {prisma} = require('./generated/javascript-client');

const resolvers = {
  Query: {
    products: (parent, args, ctx, info) => ctx.prisma.products({}, info),
  },
};

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers,
  context: req => ({
    ...req,
    prisma,
  }),
});

const options = {
  port: 8000,
  cors: {
    origin: '*',
  },
};

server.start(options, args =>
  console.log(`Server is running on http://localhost:${args.port}`)
);
