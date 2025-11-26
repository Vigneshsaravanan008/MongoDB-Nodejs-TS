import { errorHandler } from '../utils/ErrorHandler.js';
import {app} from './app.js';
import dotenv from 'dotenv';

dotenv.config();
const { API_PORT } = process.env;
const port = API_PORT || 3000;

app.use(errorHandler);

// server listening 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});