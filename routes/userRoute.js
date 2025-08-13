// import express from 'express';
// import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';


// const userRouter = express.Router();

// userRouter.post('/register', registerUser)
// userRouter.post('/login', loginUser)
// userRouter.post('/admin', adminLogin)


// export default userRouter;

import express from "express";
import { loginUser, registerUser, adminLogin } from "../controllers/userController.js";

const router = express.Router();

// Register a new user
router.post("/registered", registerUser);

// Login user
router.post("/login", loginUser);

// Admin login
router.post("/admin/login", adminLogin);

export default router;
