// import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL){
    throw new Error('Missing DATABASE_URL in .env file');
}
export default defineConfig({
    schema: "./src/db/schema/index.ts",
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});