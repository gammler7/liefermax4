import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { con: null, promise: null };
}

async function dbConnect() {
  if (cached.con) {
    console.log('DB Verbindung aktiv');
    return cached.con;
  }
  
  if (!cached.promise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('The MONGODB_URI environment variable is not set');
    }

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    console.log('Attempting to connect to MongoDB with URI:', uri);

    cached.promise = mongoose.connect(uri, options).then((mongoose) => {
      console.log('DB Verbindung gestartet');
      return mongoose;
    }).catch((error) => {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    });
  }
  
  cached.con = await cached.promise;
  return cached.con;
}

async function dbDisconnect() {
  if (cached.con) {
    await mongoose.disconnect();
    console.log('DB Verbindung beendet');
    cached.con = null;
    cached.promise = null;
  }
}

const mongodb = { dbConnect, dbDisconnect };
export default mongodb;
