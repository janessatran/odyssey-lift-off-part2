// Resolvers are functions that have the same name as the field it populates data for.
// It can fetch data from any source
// Then, it transforms the data into the shape required by the client.
const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client

    // parent: returned value of resolver for this field's parent.
    // args: contains all GraphQL args that were provided for the field by the GraphQL operation
    // context: object shared across all resolvers that are executing for a particular operation
    // info: contains info about operation's execution state
    tracksForHome: (_, __, { dataSources }) => {
      console.log(dataSources);
      return dataSources.trackApi.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackApi.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
