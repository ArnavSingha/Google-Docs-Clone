import mongoose from 'mongoose';

const Connection = async (username = 'arnavsingha2002', password = 'Arnav2002') => {
    const URL = `mongodb://${username}:${password}@ac-cbat0ff-shard-00-00.uzf3bhe.mongodb.net:27017,ac-cbat0ff-shard-00-01.uzf3bhe.mongodb.net:27017,ac-cbat0ff-shard-00-02.uzf3bhe.mongodb.net:27017/GOOGLE-DOCS?ssl=true&replicaSet=atlas-12vo48-shard-0&authSource=admin&retryWrites=true&w=majority`;
    // mongodb://${username}:${password}@google-docs-clone-shard-00-00.u7w63.mongodb.net:27017,google-docs-clone-shard-00-01.u7w63.mongodb.net:27017,google-docs-clone-shard-00-02.u7w63.mongodb.net:27017/GOOGLE-DOCS?ssl=true&replicaSet=atlas-zfichu-shard-0&authSource=admin&retryWrites=true&w=majority
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;