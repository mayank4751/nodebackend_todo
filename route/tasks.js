import  express  from "express";
import { getMyProfile, getallUsers, login, logout, register } from "../controllers/user.js";
import { newTask } from "../controllers/tasks.js";

const router = express.Router();


router.post("/new",newTask);


    
    export default router;