import express from "express";
import {
  ambilUser,
  editUser,
  hapusUser,
  tambahUser,
} from "../controller/UserController.js";

const router = express.Router();

router.get("/users", ambilUser);
router.post("/users", tambahUser);
router.patch("/users/:id", editUser);
router.delete("/users/:id", hapusUser);

export default router;