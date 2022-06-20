import { Router } from "express";
import {
	usersDelete,
	usersGet,
	usersPatch,
	usersPost,
	usersPut,
} from "../controllers/users.js";

const router = Router();

router.get("/", usersGet);
router.put("/:id", usersPut);
router.post("/", usersPost);
router.patch("/", usersPatch);
router.delete("/", usersDelete);

export { router };
