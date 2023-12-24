import express from "express"
import { createBlog, deletedBlog, getAllBlogs,getBlog, upDateBlog } from "../controlers/BlogController.js"

const router = express.Router()

router.get("/",getAllBlogs)
router.get("/:id",getBlog)
router.post("/",createBlog)
router.put("/:id",upDateBlog)
router.delete("/:id",deletedBlog)

export default router