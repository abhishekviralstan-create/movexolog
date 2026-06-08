import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 70,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    blogH1: {
      type: String,
      required: true,
      trim: true,
    },

    excerpt: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    metaTitle: {
      type: String,
      required: true,
      trim: true,
      maxlength: 70,
    },

    metaDescription: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    keywords: {
      type: [String],
      default: [],
    },

    featuredImage: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
      default: "Medical Billing",
    },

    publishedAt: {
      type: Date,
      default: Date.now,
    },

    author: {
      type: String,
      default: "Abhishek Singh",
    },

    publisher: {
      type: String,
      default: "Transvera RCM",
    },

    robotsTag: {
      type: String,
      default: "index, follow",
    },

    schemaType: {
      type: String,
      default: "BlogPosting",
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;