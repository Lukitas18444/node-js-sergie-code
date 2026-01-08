import {config} from 'dotenv';
import env from 'env-var';


config();
const PORT = env.get('PORT').default('3000').asPortNumber();


console.log (PORT)