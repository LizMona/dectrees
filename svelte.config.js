import adapter from '@sveltejs/adapter-auto';
//import { MongoClient } from 'mongodb';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	}
};

export default config;
