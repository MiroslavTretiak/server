import { app } from './app.js';
import  dotenv from "dotenv";

dotenv.config();


app.listen(process.env.PORT, ()=> {
    console.log("Express server launched on port: "+process.env.PORT);
})


