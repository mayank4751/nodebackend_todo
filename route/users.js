import  express  from "express";
import { User } from "../models/user.js";
import { getMyProfile, getallUsers, login, logout, register } from "../controllers/user.js";

const router = express.Router();

router.get("/all",getallUsers);
router.post("/new",register);
router.post("/login",login);
router.get("/logout",logout);
router.get("/me",getMyProfile);

    
    export default router;