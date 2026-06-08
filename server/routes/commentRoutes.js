import express from "express";
import Comment from "../models/Comment.js";

const router = express.Router();

/* Add Comment */
router.post("/", async (req, res) => {
  try {
    const { blogId, blogSlug, name, email, comment } = req.body;

    if (!blogId || !blogSlug || !name || !email || !comment) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newComment = await Comment.create({
      blogId,
      blogSlug,
      name,
      email,
      comment,
    });

    res.status(201).json({
      success: true,
      message: "Comment added successfully",
      comment: newComment,
    });
  } catch (error) {
    console.error("Add comment error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

/* Get Comments By Blog Slug */
router.get("/:blogSlug", async (req, res) => {
  try {
    const comments = await Comment.find({
      blogSlug: req.params.blogSlug,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      comments,
    });
  } catch (error) {
    console.error("Get comments error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

export default router;