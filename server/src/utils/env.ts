import * as dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 5000;

export const DB_URI = process.env.DB_URI!;

export const ENVIRONMENT = process.env.NODE_ENV || 'development';

export const REPLICATE_API_KEY = process.env.REPLICATE_API_KEY!;