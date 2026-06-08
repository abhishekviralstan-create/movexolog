import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password, adminSecret } = req.body;

  if (!name || !email || !password || !adminSecret) {
    res.status(400);
    throw new Error("All fields are required");
  }

  if (adminSecret !== process.env.ADMIN_SECRET) {
    res.status(401);
    throw new Error("Invalid admin secret");
  }

  const exists = await User.findOne({ email });

  if (exists) {
    res.status(400);
    throw new Error("Admin already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  const token = generateToken(user._id);

  res.status(201).json({
    success: true,
    message: "Admin registered successfully",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

export const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await user.matchPassword(password))) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  const token = generateToken(user._id);

  res.json({
    success: true,
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

export const resetPasswordByAdminSecret = asyncHandler(async (req, res) => {
  const { email, newPassword, adminSecret } = req.body;

  if (!email || !newPassword || !adminSecret) {
    res.status(400);
    throw new Error("Email, new password and admin secret are required");
  }

  if (adminSecret !== process.env.ADMIN_SECRET) {
    res.status(401);
    throw new Error("Invalid admin secret");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("Admin not found");
  }

  user.password = newPassword;
  await user.save();

  res.json({
    success: true,
    message: "Password reset successfully",
  });
});

export const getProfile = asyncHandler(async (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});