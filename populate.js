require('dotenv').config();
const connectDb = require('./db/connect');
const mockData = require('./mockData.json');
const Job = require('./models/Job');

const start = async () => {
	try {
		await connectDb(process.env.MONGO_URI);
		await Job.create(mockData);
		console.log('success');
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

start();
