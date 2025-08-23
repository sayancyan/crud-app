import express from "express";
import {
    create,
    getAll,
    getOne,
    update,
    deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/create", create); // Create a new user
router.get("/getall", getAll); // Get all users
router.get("/getone/:id", getOne); // Get one user by ID
router.put("/update/:id", update); // Update a user by ID
router.delete("/delete/:id", deleteUser); // Delete a user by ID

export default router;