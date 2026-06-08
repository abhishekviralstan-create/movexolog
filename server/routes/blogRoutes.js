import express from "express";
import {
  createBlog,
  getHomeBlogs,
  getBlogs,
  getBlogBySlug,
  getAdminBlogs,
  getAdminBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";

import { protect } from "../middleware/authMiddleware.js";
import { uploadBlogImage } from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/home", getHomeBlogs);
router.get("/", getBlogs);
router.get("/slug/:slug", getBlogBySlug);

router.get("/admin/all", protect, getAdminBlogs);
router.get("/admin/:id", protect, getAdminBlogById);

router.post("/", protect, uploadBlogImage.single("featuredImage"), createBlog);
router.put("/:id", protect, uploadBlogImage.single("featuredImage"), updateBlog);
router.delete("/:id", protect, deleteBlog);

export default router;