

const resolver = {
    Query: {
        books: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllBooks(),
        book: async (parent, { id }, { mongoDataMethods }) =>
            await mongoDataMethods.getBookById(id),

        authors: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllAuthors(),
        author: async (parent, { id }, { mongoDataMethods }) =>
            await mongoDataMethods.getAuthorById(id)

    },


    // MUTATION
    Mutation: {
        createAuthor: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createAuthor(args),
        createBook: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createBook(args)
    }
}

module.exports = resolver