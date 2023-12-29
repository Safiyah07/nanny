const mongoose = require('mongoose')

const uri = 'mongodb+srv://safiyah:safiyah07@nanny-cluster.i9ybn21.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(uri)
		console.log(`MongoDB Connected: ${conn.connection.host}`)
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
	}
}

connectDB()