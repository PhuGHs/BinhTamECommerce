import mongoose, { ConnectOptions } from 'mongoose';

export async function connectToDatabase() {
  try {
    const options : ConnectOptions = {
        autoIndex: false, // Don't build indexes
        maxPoolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4 // Use IPv4, skip trying IPv6
      };

    await mongoose.connect('mongodb+srv://lephu:vanphudh2003@binhtamshop.pijpb2i.mongodb.net/?retryWrites=true&w=majority', options);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
}

