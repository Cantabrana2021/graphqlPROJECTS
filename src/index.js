const {ApolloServer}= require('apollo-server');
const mongoose= require('mongoose');
const typeDefs= require('./schemas/projectSchema');
const resolvers =require('./resolvers/projectResolver');
const  startServer = async ()=>{
     await mongoose.connect('mongodb+srv://lpzkntabrana:PolloFrito202445@e-commerce.5sl6r.mongodb.net/?retryWrites=true&w=majority&appName=E-commerce');
     const server= new ApolloServer({typeDefs, resolvers});
     server.listen().then(({url}) =>{
        console.log(`Servidor corriendose en ${url}`);
     }

     ) 
}
startServer()